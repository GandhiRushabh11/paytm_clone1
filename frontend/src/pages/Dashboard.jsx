import axios from "axios";
import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Users } from "../components/users";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const getBalance = async () => {
    const userToken = localStorage.getItem("token");
    // Check if token exists in local storage
    if (!userToken) {
      navigate("/signin"); // Redirect to sign-in page if  token doesn't exist
    } else {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/account/balance",
          { headers: { Authorization: `Bearer ${userToken}` } }
        );

        //Setting Up Balance For user
        setBalance(response.data?.balance);
      } catch (error) {
        toast.error("Session expired, please login again.")
        localStorage.removeItem("token")
        navigate("/signin");
      }
    }
  };
  useEffect(() => {
    getBalance();
  }, []);
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance bal={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
