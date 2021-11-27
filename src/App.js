import { createContext, useEffect, useState } from "react";
import ControlPanel from "./components/ControlPanel";
import UserList from "./components/UserList";

export const Context = createContext({
  users: [],
  delUser: null
});

function App() {

  const [users, setUsers] = useState([]);
  const [delUser, setDelUser] = useState(null);

  useEffect(()=>{
    setDelUser(null);
  }, [users]);

  return (
    <>
      <ControlPanel users={users} setUsers={setUsers} delSelected={delUser} />
      <UserList users={users} onSelect={setDelUser} selected={delUser} />
    </>
  );
}

export default App;
