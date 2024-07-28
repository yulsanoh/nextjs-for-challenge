import Book from "../../components/books";
import styles from "../../styles/home.module.css";

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBooks() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
}

export default async function Home() {
  const books = await getBooks();

  return (
    <div className={styles.container}>
      {books.results.map((book) => (
        <Book
          display_name={book.display_name}
          list_name_encoded={book.list_name_encoded}
        />
      ))}
    </div>
  );
}
