import React, { useEffect, useState } from "react";

function UserProfile({ userId, onChangeUserId }) {
  const [user, setUser] = useState(null);      
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);      

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(null);

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        
        if (err.name === "AbortError") {
          return;
        }
        setError(err.message || "Unknown error");
        setLoading(false);
      }
    };

    fetchUser();

    
    return () => {
      controller.abort();
    };
  }, [userId]); 
 
  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    if (onChangeUserId) {
      onChangeUserId(randomId);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h2>User Profile (ID: {userId})</h2>

      <button onClick={handleRefresh} style={{ marginBottom: "12px" }}>
        Refresh (random user)
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {user.address && (
            <p>
              Address: {user.address.city}, {user.address.street}
            </p>
          )}
          {user.company && <p>Company: {user.company.name}</p>}
        </div>
      )}
    </div>
  );
}

export default UserProfile;