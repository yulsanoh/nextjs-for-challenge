import { API_URL } from "../../../(home)/page";
import styles from "../../../../styles/book.module.css";

async function getBook(id) {
  const response = await fetch(`${API_URL}?name=${id}`);
  const json = response.json();
  return json;
}

export default async function Detail({ params: { id } }) {
  const book = await getBook(id);
  return (
    <>
      <h1 className={styles.title}>{book.results.list_name}</h1>
      <div className={styles.book_container}>
        {book.results.books.map((item) => (
          <div key={"rank" + item.rank}>
            <div className={styles.book_image}>
              <img src={item.book_image} />
            </div>
            <div className={styles.book_text}>
              <h1>{item.title}</h1>
              <h3>{item.author}</h3>
              <a href={item.amazon_product_url} target="_blank">
                Buy now &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
