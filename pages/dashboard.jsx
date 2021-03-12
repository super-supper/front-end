import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link';
import React, { useState } from "react";
import Form from "../component/form";
import styles from "../styles/dashboard.module.css";


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
        <Form/>
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
