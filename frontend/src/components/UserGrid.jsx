import { useNavigate } from "react-router";
import { Button } from "./Button";

export const UserGrid = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            <div>{user?.firstName[0]?.toUpperCase()}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user?.firstName} {user?.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button
          label={"Send Money"}
          onClick={() => {
            navigate("/send?id=" + `${user._id}` + "&name=" + `${user.firstName}`);
          }}
        />
      </div>
    </div>
  );
};
