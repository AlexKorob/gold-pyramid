import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spinnerWrapper: {
    marginTop: "2rem",
    textAlign: "center",
  },
  spinner: {
    color: "#1a90ff",
    animationDuration: "550ms",
    margin: "0 auto",
  },
});

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinnerWrapper}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.spinner}
        size={40}
        value={100}
        thickness={4}
      />
    </div>
  );
};

export default Spinner;
