import Head from "next/head";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>welcome to super supper</h1>
        <Link href="/dashboard">
          <Button variant="contained" color="primary">
            dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
