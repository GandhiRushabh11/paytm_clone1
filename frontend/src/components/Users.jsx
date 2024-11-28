import axios from "axios";
import { useEffect, useState } from "react";
import { UserGrid } from "./UserGrid";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    async function getAllUsers() {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/bulk",
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      console.log(response.data.data);
      setUsers(response.data.data);
    }
    getAllUsers();
  }, []);

  return (
    <>
      <div className="font-bold mt-6 text-lg">{"Users"}</div>
      <div className="mt-4 mb-9">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full rounded px-2 py-1 border  border-slate-200"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <UserGrid user={user} key={user._id} />
        ))}
      </div>
    </>
  );
};
