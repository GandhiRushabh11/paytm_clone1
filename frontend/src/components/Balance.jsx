export const Balance = ({bal})=>{
    return (
        <div className="flex">
            <div className="font-bold text-lg">Your balance</div>
            <div className="font-semibold ml-4 text-lg">Rs {bal}</div>
        </div>
    )
}