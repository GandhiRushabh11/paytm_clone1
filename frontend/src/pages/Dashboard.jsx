import axios from "axios";
import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState("0");
  const getBalance = async () => {
    const userToken = localStorage.getItem("token");
    // Check if token exists in local storage
    if (!userToken) {
      navigate("/signin"); // Redirect to sign-in page if  token doesn't exist
    } else {
      const response = await axios.get(
        "http://localhost:5000/api/v1/account/balance",
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      //Setting Up Balance For user 
      setBalance(response.data?.balance);
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
      </div>
    </div>
  );
};

export default Dashboard;
