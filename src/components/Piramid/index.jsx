import React from "react";
import Cell from "components/Cell";
import "./styles.js";
import Counter from "components/counter";
import { StyledPiramid, ButtonWrapper } from "./styles.js";
import { Button } from "@material-ui/core";
import Spinner from "components/spinner/index.jsx";
// eslint-disable-next-line
import Worker from "worker-loader!./calcBestWay.worker.js";

const Piramid = ({ countRows }) => {
  const findBestWayWorker = new Worker();
  const [savedRows, setSavedRows] = React.useState([]);
  const [isPiramidCompleted, setIsPiramidCompleted] = React.useState(false);
  const [isBestWayShowing, setIsBestWayShowing] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [savedScore, setSavedScore] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const getCellBackgroundColor = () => {
    const avalilableColors = [
      "green",
      "brown",
      "blue",
      "crimson",
      "coral",
      "forestgreen",
      "goldenrod",
      "darkgreen",
      "darkseagreen",
    ];

    return avalilableColors[
      Math.floor(Math.random() * avalilableColors.length)
    ];
  };

  const getRandomValue = () => {
    return Math.ceil(Math.random() * 99);
  };

  React.useEffect(() => {
    setSavedRows([]);
    setIsBestWayShowing(false);
    setIsPiramidCompleted(false);
    const rows = [];
    for (let i = 0; i < countRows; i++) {
      const row = [];
      for (let j = 0; j < i + 1; j++) {
        row.push({
          indexPos1: i,
          indexPos2: j,
          value: getRandomValue(),
          showValue: false,
          isClickable: false,
          backgroundColor: getCellBackgroundColor(),
        });
      }
      rows.push(row);
    }
    rows[0][0] = { ...rows[0][0], showValue: true };
    rows[1][0] = { ...rows[1][0], isClickable: true };
    rows[1][1] = { ...rows[1][1], isClickable: true };
    setScore(rows[0][0].value);
    setRows(rows);
  }, [countRows]);

  const handleCellClick = (i, j) => {
    let cell = rows[i][j];
    if (!cell.isClickable) return null;
    setRows((prevState) => {
      prevState[i] = prevState[i].map((row) =>
        cell === row
          ? { ...row, showValue: true, isClickable: false }
          : Object.defineProperty(row, "isClickable", { value: false })
      );
      if (i !== countRows - 1) {
        prevState[i + 1] = prevState[i + 1].map((row, currentIndex) =>
          currentIndex === j || currentIndex === j + 1
            ? Object.defineProperty(row, "isClickable", { value: true })
            : row
        );
      } else {
        setIsPiramidCompleted(true);
      }
      return [...prevState];
    });
    setScore((prevState) => prevState + cell.value);
  };

  React.useEffect(() => {
    findBestWayWorker.onmessage = ($event) => {
      if ($event && $event.data) {
        const [score, path] = $event.data;
        setRows((prevState) => {
          return prevState.map((row, rowIndex) =>
            row.map((cell, cellIndex) => {
              return cellIndex === parseInt(path[rowIndex])
                ? { ...cell, showValue: true }
                : { ...cell, showValue: false };
            })
          );
        });
        setIsLoading(false);
        setScore(score);
        setIsBestWayShowing(true);
      }
    };
  }, [findBestWayWorker]);

  const handleShowBestWay = () => {
    if (isBestWayShowing) {
      setRows(savedRows);
      setSavedRows([]);
      setScore(savedScore);
      setIsBestWayShowing(false);
      return;
    }
    setSavedRows(rows);
    setSavedScore(score);
    setIsLoading(true);

    findBestWayWorker.postMessage({ rows });
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Counter value={score} />
      <StyledPiramid>
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map((cellData, index) => (
              <Cell
                cellData={cellData}
                handleClick={handleCellClick}
                key={index}
              />
            ))}
          </div>
        ))}
      </StyledPiramid>
      <ButtonWrapper>
        <Button
          onClick={handleShowBestWay}
          disabled={!isPiramidCompleted}
          color="primary"
          variant="contained"
        >
          {isBestWayShowing ? "Hide" : "Show"} best way
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Piramid;
