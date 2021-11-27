import Axios from "axios";

export default function ControlPanel({users, setUsers, delSelected}) {

  async function handleAdd(e) {
    e.preventDefault();
    const responseUser = await Axios.get('https://randomuser.me/api/');
    const {first, last} = responseUser.data.results[0].name;
    const userObj = {first, last};
    setUsers([...users, userObj]);
  }

  function handleDelete(e) {
    e.preventDefault();
    const leftUsers = users.slice(0, users.length - 1);
    setUsers(leftUsers);
  }

  function handleDeleteUser(e) {
    e.preventDefault();
    const leftUsers = users.filter((user, i)=> i !== delSelected);
    setUsers(leftUsers);
  }

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete} disabled={!users.length}>
        Delete last
      </button>
      <button onClick={handleDeleteUser} disabled={delSelected === null}>
        Delete user
      </button>
    </>
  );
}
