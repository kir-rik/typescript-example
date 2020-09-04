import React from "react";
import styles from "./styles.css";

type Props = {
  value: string
}

export default ({ value }: Props) => <div className={styles.text}>{value}</div>;
