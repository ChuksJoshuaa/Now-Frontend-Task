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
    [theme.breakpoints.down("285")]: {
      fontSize: "0.9em",
    },
  },
  wordyy: {
    fontFamily: `"Rajdhani", sans-serif`,
    color: "rgba(15, 15, 15, 0.9)",
    fontSize: "1em",
  },
  wording: {
    marginLeft: "12em",

    [theme.breakpoints.down("432")]: {
      marginLeft: "10em",
    },
    [theme.breakpoints.down("405")]: {
      marginLeft: "8em",
    },

    [theme.breakpoints.down("361")]: {
      marginLeft: "6em",
    },

    [theme.breakpoints.down("318")]: {
      marginLeft: "3em",
    },

    [theme.breakpoints.down("285")]: {
      fontSize: "0.9em",
      marginLeft: "5em",
    },
  },
  wordy: {
    fontFamily: `"Rajdhani", sans-serif`,
    color: "rgba(15, 15, 15, 0.9)",
    fontSize: "1em",
    marginRight: "1em",
    textTransform: "none",
    [theme.breakpoints.down("285")]: {
      fontSize: "0.9em",
    },
  },
}));
