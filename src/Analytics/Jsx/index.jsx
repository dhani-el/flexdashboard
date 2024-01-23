import { motion } from "framer-motion";
import { AttachMoney,Paid,AccountBalanceWallet, CreditCard,Payments } from "@mui/icons-material";
import { AreaChart,XAxis,YAxis, CartesianGrid, Tooltip, Area,Bar, BarChart, Legend, PieChart, Pie, LineChart, Line } from "recharts";
import { CircularProgress, LinearProgress } from "@mui/material";
import "../Styles/index.css"

const constants = {
    INCOME :"INCOME",
    EXPENSES:"EXPENSES",
}

export default function Analytics(){
    return <div id = "analyticsContainer">
                 <AnalysisDisplay/>   
                 <OverViewComponent/>
                 <DayTransactionChart/>
                 <Transactions transactions={[]}/>
                 <Expectations/>
                 <UnexpectedIncomeTrend/>
                 <UnexpectedExpensesTrend/>
                 <IncomeUsage value={42} />
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

function DayTransactionChart(){
    const data = [{name:"day1", income:175000, expenses:23000 },{name:"day2",income:186000, expenses:29000}]
    return <motion.div>
                <BarChart  width={730} height={250} data={data} >
                    <XAxis dataKey={"name"}/>
                    <YAxis/>
                    <Legend/>
                    <Tooltip/>
                    <Bar dataKey="income" fill="#8884d8" />
                    <Bar dataKey="expenses" fill="#82ca9d" />
                </BarChart>
            </motion.div>
}

function Transactions({transactions}){
    return <motion.div>
              {!!transactions.length &&  transactions.map(function(transaction){
                    if (transaction.type === constants.INCOME) {
                        return <Income description={transaction.description} amount={transaction.amount} />
                    }else if (transaction.type === constants.EXPENSES) {
                        return <Expenses description={transaction.description} amount={transaction.amount}  />
                    }
                    return
                })}
    </motion.div>
}

function Expenses({description,amount}){
    return <motion.div>
        <motion.p>{description}</motion.p>
        <LinearProgress variant="determinate" value={amount} />
        <motion.p>{amount}</motion.p>
    </motion.div>
}

function Income({description,amount}){
    return <motion.div>
                <motion.p>{description}</motion.p>
                    <LinearProgress variant="determinate" value={amount} />
                <motion.p>{amount}</motion.p>
    </motion.div>
}

function Expectations(){
    return <motion.div>
                <ExpectedIncome/>
                <ExpectedExpenses/>
    </motion.div>
}

function ExpectedIncome(){
    const data = [{name:"rand", value:34}]
    return <motion.div>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} fill="#8884d8" />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
    </motion.div>
}

function ExpectedExpenses(){
    const data = [{name:"rando", value:67000},{name:"yam",value:48000}]
    return <motion.div>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"  innerRadius={60} fill="#8884d8" />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
    </motion.div>   
}

function UnexpectedIncomeTrend(){
    const data = [{name: 'Page A', uv: 400, pv: 200, amt: 2400},{name: 'Page B', uv: 300, pv: 300, amt: 3400},{name: 'Page C', uv: 600, pv: 230, amt: 3400},]
    return <motion.div>
                <LineChart width={600} height={300} data={data} >
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#15bab3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                </LineChart>
    </motion.div>
}

function UnexpectedExpensesTrend(){
    const data = [{name: 'Page A', uv: 400, pv: 200, amt: 2400},{name: 'Page B', uv: 300, pv: 300, amt: 3400},{name: 'Page C', uv: 600, pv: 230, amt: 3400},]
    return <motion.div>
                <LineChart width={600} height={300} data={data} >
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#15bab3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                </LineChart>
    </motion.div>
}

function IncomeUsage({value}){
            return <motion.div>
                        <CircularProgress variant="determinate" value={value} />
                        <motion.p>{value}%</motion.p>
            </motion.div>
}