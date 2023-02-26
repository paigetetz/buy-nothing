import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UserLogout({ user, setUser }) {
  let navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <div className="logout">
      <h1>Are you sure you want to log out?</h1>
      <button className="logout-link" onClick={handleLogoutClick}>
        Log Out
      </button>
      <Link to="/listings">
        Go Back
      </Link>
    </div>
  );
}

export default UserLogout;