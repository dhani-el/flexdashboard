import { motion } from "framer-motion";
import { AttachMoney,Paid,AccountBalanceWallet, CreditCard,Payments } from "@mui/icons-material";
import { AreaChart,XAxis,YAxis, CartesianGrid, Tooltip, Area } from "recharts";
import "../Styles/index.css"



export default function Analytics(){
    return <div id = "analyticsContainer">
                 <AnalysisDisplay/>   
                 <OverViewComponent/>
          </div>
}

function Menu(){
    return <motion.div>

    </motion.div>
}

function AnalysisDisplay(){
    return <motion.div>
                <FirstLevelData/>
    </motion.div>
}

function FirstLevelData(){
    return <motion.div>
                <SingleFirstLevelData Icon={<Paid/>} label="Fixed Income" amount="170,000" />
                <SingleFirstLevelData Icon={<CreditCard/>}  label="Fixed Expenses" amount="92,400" />
                <SingleFirstLevelData Icon={<AttachMoney/>} label="Misc Income" amount="12,100" />
                <SingleFirstLevelData Icon= {<Payments/>} label="Misc Expenses" amount="92,400" />
                <SingleFirstLevelData Icon={<AccountBalanceWallet/>} label="Balance" amount="92,400" />
            </motion.div>
}

function SingleFirstLevelData({Icon,label,amount}){
    return <motion.div>
                <motion.div>
                    {Icon}
                </motion.div>
                <motion.div>
                    <p>{label}</p>
                    <p>&#8358; {amount}</p>
                </motion.div>

    </motion.div>
}

function OverViewComponent(){
    const tempData = [{name:"Expenses", total1:500000,total2:45786},{name:"Income", total1:712000,total2:823940}]
    return <motion.div>
                <AreaChart width={730} height = {250} data={tempData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="total1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="total2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>

    </motion.div>
}