import Link from "next/link";
import styles from "../styles/books.module.css";

export default function Book({ display_name, list_name_encoded }) {
  return (
    <div className={styles.book}>
      <Link href={`/list/${list_name_encoded}`}>{display_name} &rarr;</Link>
    </div>
  );
}
