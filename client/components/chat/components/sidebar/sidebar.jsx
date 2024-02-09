import React from "react";
import './sidebar.css';
function SideBar({socket}) {
let [users, setUsers] = React.useState([])

    React.useEffect(() => {
    socket.on('responseNewUser', (data) => {
    setUsers(data)
    })
    },[socket,users])

console.log(users)

const filteredList = users.filter((value, index, self) => {
    return index === self.findIndex((t) => (
        t.user === value.user && t.socketID === value.socketID
    ));
});

return (
<>

<div className="sideNav2">
   <div className="SideNavhead">
      <h2>Chats</h2>
      <i className="fa-solid fa-filter"></i>
      <i className="fa-solid fa-user-plus"></i>
   </div>
   <div className="SearchInputHolder">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className="searchInput" placeholder="Search For Chat.."/>
   </div>
   <div>
   {
  filteredList.map((element) => (
    <li key={element.socketID} className="group">
      <p className="GroupName">{element}</p>
    </li>
  ))
}
   </div>
</div>
</>
);
}
export default SideBar;