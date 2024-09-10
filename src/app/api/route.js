export async function GET(req) {
  let url_api = "https://reqres.in/api/users";
  const response = await fetch(url_api);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
