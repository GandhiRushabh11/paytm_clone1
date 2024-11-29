import axios from "axios";
import { useEffect, useState } from "react";
import { UserGrid } from "./UserGrid";

export const Users = () => {
  const [users, setUsers] = useState([]);
  //Need to apply debouncing here
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    async function getAllUsers() {
      const response = await axios.get(
        import.meta.env.VITE_SERVER_URL +
          "/api/v1/user/bulk" +
          `?filter=${filter}`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setUsers(response.data.data);
    }
    getAllUsers();
  }, [users]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">{"Users"}</div>
      <div className="mt-4 mb-9">
        <input
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
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
