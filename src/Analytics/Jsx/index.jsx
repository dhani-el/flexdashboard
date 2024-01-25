import { motion } from "framer-motion";
import { AttachMoney,Paid,AccountBalanceWallet, CreditCard,Payments } from "@mui/icons-material";
import { ResponsiveContainer,AreaChart,XAxis,YAxis, CartesianGrid, Tooltip, Area,Bar, BarChart, Legend, PieChart, Pie, LineChart, Line } from "recharts";
import { CircularProgress, LinearProgress } from "@mui/material";
import "../Styles/index.css"
import { useEffect, useRef } from "react";

const constants = {
    INCOME :"INCOME",
    EXPENSES:"EXPENSES",
}

const transactionData = [{type:constants.EXPENSES,description:"Shawarma",percentage:45, amount:1500},{type:constants.INCOME,description:"Daily Bonus",percentage:32, amount:4500},{type:constants.EXPENSES,description:"Transport",percentage:21, amount:600}]

export default function Analytics(){
    return <div id = "analyticsContainer">
                 <FirstLevelData/>
                 <motion.div id="overviewAndExpectationsDiv">
                    <OverViewComponent/>
                    <Expectations/>
                 </motion.div>
                 <motion.div id="dayTransactionsAndIncome">
                    <motion.div id="dayChartsAndTransactionsDiv" >
                        <DayTransactionChart/>
                        <Transactions transactions={transactionData}/>
                    </motion.div>
                    <motion.div id="bigScreenTransaction">
                        <Transactions transactions={transactionData}/>
                        <IncomeUsage value={42} />
                    </motion.div>
                    <IncomeUsage value={42} />
                </motion.div>   
                 <UnexpectedIncomeTrend/>
          </div>
}

function FirstLevelData(){
    return <motion.div id="FirstLevelDataContainer">
                <SingleFirstLevelData Icon={<Paid/>} label="Fixed Income" amount="170,000" />
                <SingleFirstLevelData Icon={<CreditCard/>}  label="Fixed Expenses" amount="92,400" />
                <SingleFirstLevelData Icon={<AttachMoney/>} label="Misc Income" amount="12,100" />
                <SingleFirstLevelData Icon= {<Payments/>} label="Misc Expenses" amount="92,400" />
                <SingleFirstLevelData Icon={<AccountBalanceWallet/>} label="Balance" amount="92,400" />
            </motion.div>
}

function SingleFirstLevelData({Icon,label,amount}){
    return <motion.div id="SingleFirstLevelDataContainer" >
                <motion.div className="icon">
                    {Icon}
                </motion.div>
                <motion.div className="details" >
                    <motion.p className="label">{label}</motion.p>
                    <motion.p className="amount" >&#8358;{amount}</motion.p>
                </motion.div>

    </motion.div>
}

function OverViewComponent(){
    const tempData = [{name:"Expenses", total1:500000,total2:45786},{name:"Income", total1:712000,total2:823940}]




    return <motion.div id="overViewComponentDiv" >
              <ResponsiveContainer aspect={2}  >
                <AreaChart  data={tempData} >
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
              </ResponsiveContainer>  

    </motion.div>
}

function DayTransactionChart(){
    const data = [{name:"day1", income:175000, expenses:23000 },{name:"day2",income:186000, expenses:29000}]
    return <motion.div id="DayTransactionChartDiv" >
              <ResponsiveContainer height={250}>
                <BarChart data={data} >
                    <XAxis dataKey={"name"}/>
                    <YAxis/>
                    <Legend/>
                    <Tooltip/>
                    <Bar dataKey="income" fill="#8884d8" />
                    <Bar dataKey="expenses" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
}

function Transactions({transactions}){
    return <motion.div id="transactionsDiv" >
              {!!transactions.length &&  transactions.map(function(transaction){
                    if (transaction.type === constants.INCOME) {
                        return <Income description={transaction.description} amount={transaction.amount} percentage={transaction.percentage} />
                    }else if (transaction.type === constants.EXPENSES) {
                        return <Expenses description={transaction.description} amount={transaction.amount} percentage={transaction.percentage} />
                    }
                    return
                })}
           </motion.div>
}

function Expenses({description,amount, percentage}){
    return <motion.div id="transactionExpenses" >
        <motion.div id="textData">
            <motion.p id="description">{description}</motion.p>
            <motion.p id="amount">{amount}</motion.p>
        </motion.div>
        <motion.div id="progressbarDiv" >
            <LinearProgress variant="determinate" value={percentage} />
        </motion.div>

    </motion.div>
}

function Income({description,amount, percentage}){
    return <motion.div id="transactionIncome">
                <motion.div id="textData">
                    <motion.p id="description">{description}</motion.p>
                    <motion.p id="amount">{amount}</motion.p>
                </motion.div>
                <motion.div id="progressbarDiv" >
                    <LinearProgress variant="determinate" value={percentage} />
                </motion.div>
    </motion.div>
}

function Expectations(){
    return <motion.div id="expectationsDiv">
                <ExpectedIncome/>
                <ExpectedExpenses/>
    </motion.div>
}

function ExpectedIncome(){
    const data = [{name:"rand", value:34}]
    return <motion.div className="subExpectation">
            <ResponsiveContainer height={300}>
                <PieChart >
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} fill="#8884d8" label />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
    </motion.div>
}

function ExpectedExpenses(){
    const data = [{name:"rando", value:67000},{name:"yam",value:48000}]
    return <motion.div className="subExpectation" >
            <ResponsiveContainer height={300}>
                <PieChart >
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"  innerRadius={40} fill="#15bab3" label />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
    </motion.div>   
}

function UnexpectedIncomeTrend(){
    const data = [{name: 'Page A', uv: 400, pv: 200, amt: 2400},{name: 'Page B', uv: 300, pv: 300, amt: 3400},{name: 'Page C', uv: 600, pv: 230, amt: 3400},]
    return <motion.div id="unexpectedTrends">
                <ResponsiveContainer height={300}>
                <LineChart data={data} >
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#15bab3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                </LineChart>
                </ResponsiveContainer>
    </motion.div>
}


function IncomeUsage({value}){
            return <motion.div id="incomeUsage">
                        <CircularProgress variant="determinate" value={value} sx={{color:"cyan"}} style={{width:"70%",height:"70%", }} />
                        <motion.p>{value}%</motion.p>
            </motion.div>
}