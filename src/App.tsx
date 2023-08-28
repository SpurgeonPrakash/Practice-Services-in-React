// import userService, { User } from "./services/userService";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, loading } = useUsers();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // const deleteUser = (user: User) => {
  //   const originalUsers = [...users];
  //   setUsers(users.filter((u) => u.id !== user.id));

  //   userService.delete(user.id).catch((err) => {
  //     setError(err.message);
  //     setUsers(originalUsers);
  //   });
  // };

  return (
    <div>
      <p>{error}</p>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default App;
