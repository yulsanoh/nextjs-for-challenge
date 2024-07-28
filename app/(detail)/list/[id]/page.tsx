import { API_URL } from "../../../(home)/page";

async function getBook(id) {
  const response = await fetch(`${API_URL}?name=${id}`);
  const json = response.json();
  return json;
}

export default async function Detail({ params: { id } }) {
  const book = await getBook(id);
  return <div>{JSON.stringify(book)}</div>;
}
