import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    background: {
      default: "#585c61",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#b7bfc9",
  },
  word: {
    fontFamily: `"Rajdhani", sans-serif`,
    color: "rgba(15, 15, 15, 0.9)",
    fontSize: "1em",
    color: "#b7bfc9",
    marginLeft: "0.5em",
  },
  wordyy: {
    fontFamily: `"Rajdhani", sans-serif`,
    color: "rgba(15, 15, 15, 0.9)",
    fontSize: "1em",
  },
  wordy: {
    fontFamily: `"Rajdhani", sans-serif`,
    color: "rgba(15, 15, 15, 0.9)",
    fontSize: "1em",
    marginRight: "1em",
    textTransform: "none",
  },
}));
