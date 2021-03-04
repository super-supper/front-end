import React, { useState } from "react";
import Link from 'next/link'

import styles from "../styles/dashboard.module.css";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [days, setDays] = useState("");

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <form>
          <h1>How many days shall we plan for?</h1>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={days}
              onChange={handleChange}
              label="Days"
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
      <div className={styles.footer}>
        <Link href="/">
          <Button variant="contained" color="primary">
            country road, take me home
          </Button>
        </Link>
      </div>
    </div>
  );
}
