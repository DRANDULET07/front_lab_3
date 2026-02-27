import React, { useState } from "react";
import UserProfile from "./UserProfile";

function UsersApp() {
  const [userId, setUserId] = useState(1);

  const handleChangeUserId = (newId) => {
    setUserId(newId);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 3.2: User Profile with useEffect</h1>

      <div style={{ marginBottom: "12px" }}>
        <span>Choose user: </span>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)} style={{ marginLeft: "8px" }}>
          User 2
        </button>
        <button onClick={() => setUserId(3)} style={{ marginLeft: "8px" }}>
          User 3
        </button>
      </div>

      <UserProfile userId={userId} onChangeUserId={handleChangeUserId} />
    </div>
  );
}

export default UsersApp;