export default async function fetcher(url, error) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${error} with status code : ${res.status}`);
  return await res.json();
}
