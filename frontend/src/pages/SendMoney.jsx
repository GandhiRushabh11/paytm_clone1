import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");

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
                />
              </div>
              <button className="justify-center rounded-md text-sm font-medium h-10 w-full py-2 px-4 bg-green-500 text-white">
                Initiate Transfer
              </button>
              <button className="justify-center rounded-md text-sm font-medium h-10 w-full py-2 px-4 bg-red-500 text-white">
                Cancel  & Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
