import Appbar from "../components/Appbar"
import { Balance } from "../components/Balance"

const Dashboard = ()=>{
    return (<div>
        <Appbar/>
        <div className="m-8">
            <Balance bal={"57888"}/>
        </div>
    </div>)
}

export default Dashboard