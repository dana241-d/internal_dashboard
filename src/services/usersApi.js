const base_URL = "https://jsonplaceholder.typicode.com/users";
// empty api https://mocki.io/v1/d538e43f-da5c-419a-b9e4-637aa0c08b9d
const todos_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getUsers() {
  const res = await fetch(base_URL);
  if (!res.ok) throw new Error("Something went wrong while getting users ");
  const data = await res.json();
  console.log("users datttttta sd", data);
  return data;
}

export async function getUserDetails(id) {
  const res = await fetch(`${base_URL}/${id}`);
  if (!res.ok)
    throw new Error("Something went wrong while fetching user details");
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getTasks(id) {
  console.log("getTask", id);

  const res = await fetch(`${todos_URL}?userId=${id}`);
  if (!res.ok) throw new Error("Error while getting user todos");
  const data = await res.json();
  console.log("todos", data);
  return data;
}
