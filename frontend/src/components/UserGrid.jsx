import { Button } from "./Button";

export const UserGrid = ({ user }) => {
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
        <Button label={"Send Money"} />
      </div>
    </div>
  );
};
