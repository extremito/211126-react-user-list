import "./User.css";

export default function User({name, lastName, select, delSelect}){
    return (<li className={delSelect ? "active-user" : ""} onClick={select}>
        {`${name} ${lastName}`}
    </li>);
};