import React from "react";
import Piramid from "components/Piramid";
import { InputWrapper } from "./styles";
import { TextField } from "@material-ui/core";

const MainPage = () => {
  const [countRows, setCountRows] = React.useState();
  const [errors, setErrors] = React.useState([]);

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.value.length === 0) {
      setCountRows("");
      return;
    }
    if (e.target.value.length > 1 && Number.isNaN(value)) {
      setErrors(["This is not number"]);
      return;
    }
    if (value > 22) {
      setErrors(["Value must be grade then 1 and less then 23"]);
      return;
    }
    setErrors([]);
    setCountRows(value);
  };

  return (
    <>
      <InputWrapper>
        <TextField
          error={errors.length > 0 ? true : false}
          label="enter count rows of pyramid"
          onChange={handleInput}
          value={countRows || ""}
          helperText={errors.join(<hr />)}
          variant="outlined"
        />
      </InputWrapper>
      {countRows > 1 && <Piramid countRows={countRows} />}
    </>
  );
};

export default MainPage;
