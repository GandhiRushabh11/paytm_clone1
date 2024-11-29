import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const userToken = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-screen items-center bg-gray-200">
      <div className="h-full flex flex-col justify-center">
        <div className="border rounded-lg h-min max-w-md p-4  w-96 space-y-8 bg-white shadow-lg">
          <div className="flex flex-col p-6">
            <h2 className=" text-3xl font-bold text-center">{"Send Money"}</h2>
          </div>
          <div className="p-6">
            <div className=" flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full  bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {name && name.length > 0 && name[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium ">Amount (in Rs)</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Enter Amount"
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
              <button
                className="justify-center rounded-md text-sm font-medium h-10 w-full py-2 px-4 bg-green-500 text-white"
                onClick={async () => {
                  setIsLoading(true);
                  try {
                    const response = await axios.post(
                      import.meta.env.VITE_SERVER_URL +
                        "/api/v1/account/transfer",
                      { to: id, amount },
                      {
                        headers: { Authorization: `Bearer ${userToken}` },
                      }
                    );
                    setTimeout(() => {
                      toast.success(response.data.message);
                      setIsLoading(false);
                      navigate("/dashboard");
                    }, 2000);
                  } catch (error) {
                    setTimeout(() => {
                      setIsLoading(false);
                      toast.error(error.response.data.message);
                      navigate("/dashboard");
                    }, 1000);
                  }
                }}
              >
                {!isLoading ? "Initiate Transfer" : "Transferring Amount ..."}
              </button>
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="justify-center rounded-md text-sm font-medium h-10 w-full py-2 px-4 bg-red-500 text-white"
              >
                Cancel & Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
