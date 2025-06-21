
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://literate-pancake-g4qrrj7r45gqhq9w-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-secondary text-white">
        <h2 className="mb-0">Users</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {users.map(user => (
            <li key={user._id} className="list-group-item">
              {user.username} <span className="text-muted">({user.email})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
