import User from "./User";

export default function UserList({users, onSelect, selected}) {

    function handleSelect(index){
        return function select(e){
            onSelect(index);
        }
    }

  return (
    <ul>
      {users.map((user, i) => (
        <User
          key={i}
          name={user.first}
          lastName={user.last}
          select={handleSelect(i)}
          delSelect={selected===i}
        />
      ))}
    </ul>
  );
}
