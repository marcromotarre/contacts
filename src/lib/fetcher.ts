const API = "https://reqres.in";

export default function fetcher(url: string, data = undefined) {
  return fetch(`${API}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
}
