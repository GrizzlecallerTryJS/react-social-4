import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

export const Input = forwardRef((props, ref) => {
  const styles = useStyles();

  return (
    <TextField
      className={styles.root}
      variant="outlined"
      margin="normal"
      inputRef={ref}
      {...props}
    />
  );
});
