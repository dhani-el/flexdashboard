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

export default function Analytics({theme}){
    const transactionData = [{type:constants.EXPENSES,description:"Shawarma",percentage:45, amount:1500},{type:constants.INCOME,description:"Daily Bonus",percentage:32, amount:4500},{type:constants.EXPENSES,description:"Transport",percentage:21, amount:600}]
    const firstLevelDataSet = {fixedIncome:"170,000",fixedExpenses:"92,400",miscIncome:"12,500",miscExpenses:"9,750",balance:"80,150"}
    const overViewData = [{name:"Expenses", total1:500000,total2:45786},{name:"Income", total1:712000,total2:823940}]
    const overviewDataKeys = ["name","total1","total2"];
    const dayTransacdata = [{name:"day1", income:175000, expenses:23000 },{name:"day2",income:186000, expenses:29000}];
    const dayTransacdataKeys = ["name","income","expenses" ];
    const incomeUsageData = 74
    const trendData = [{name: 'Page A', uv: 400, pv: 200, amt: 2400},{name: 'Page B', uv: 300, pv: 300, amt: 3400},{name: 'Page C', uv: 600, pv: 230, amt: 3400},]
    const trendDataKeys = ["uv","pv","name"];
    const incData = [{name:"rand", value:34}]
    const incDataKey = "value"
    const incNameKey = "name"
    const expData = [{name:"rando", value:67000},{name:"yam",value:48000}]
    const expDataKey = "value"
    const expNameKey = "name"

    return <div id = "analyticsContainer" className={theme ? "" : "light"}>
                 <FirstLevelData amounts={firstLevelDataSet}/>
                 <motion.div id="overviewAndExpectationsDiv">
                    <OverViewComponent data={overViewData} dataKeys={overviewDataKeys}/>
                    <Expectations incData = {incData} incDataKey = {incDataKey} incNameKey = {incNameKey} expData = {expData} expDataKey = {expDataKey} expNameKey = {expNameKey} />
                 </motion.div>
                 <motion.div id="dayTransactionsAndIncome">
                    <motion.div id="dayChartsAndTransactionsDiv" >
                        <DayTransactionChart data={dayTransacdata} dataKeys={dayTransacdataKeys}/>
                        <Transactions transactions={transactionData}  />
                    </motion.div>
                    <motion.div id="bigScreenTransaction">
                        <Transactions transactions={transactionData}/>
                        <IncomeUsage value={incomeUsageData} />
                    </motion.div>
                    <IncomeUsage value={incomeUsageData} />
                </motion.div>   
                 <UnexpectedIncomeTrend data={trendData} dataKeys={trendDataKeys} />
          </div>
}

function FirstLevelData({amounts}){
    return <motion.div id="FirstLevelDataContainer">
                <SingleFirstLevelData Icon={<Paid/>} label="Fixed Income" amount={amounts.fixedIncome} />
                <SingleFirstLevelData Icon={<CreditCard/>}  label="Fixed Expenses" amount={amounts.fixedExpenses} />
                <SingleFirstLevelData Icon={<AttachMoney/>} label="Misc Income" amount={amounts.miscIncome} />
                <SingleFirstLevelData Icon= {<Payments/>} label="Misc Expenses" amount={amounts.miscExpenses} />
                <SingleFirstLevelData Icon={<AccountBalanceWallet/>} label="Balance" amount={amounts.balance} />
            </motion.div>
}

function SingleFirstLevelData({Icon,label,amount}){
    return <motion.div id="SingleFirstLevelDataContainer" >
                <motion.div id="icon">
                    {Icon}
                </motion.div>
                <motion.div className="details" >
                    <motion.p className="label">{label}</motion.p>
                    <motion.p className="amount" >&#8358;{amount}</motion.p>
                </motion.div>

    </motion.div>
}

function OverViewComponent({data,dataKeys}){

    return <motion.div id="overViewComponentDiv" >
            <motion.p>Overview</motion.p>
              <ResponsiveContainer aspect={2}  >
                <AreaChart  data={data} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="darkcyan" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="darkcyan" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="cyan" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="cyan" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                    <XAxis dataKey={dataKeys[0]}/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey={dataKeys[1]} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey={dataKeys[2]} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </ResponsiveContainer>  

    </motion.div>
}

function DayTransactionChart({data,dataKeys}){
    return <motion.div id="DayTransactionChartDiv" >
            <motion.p>Performance</motion.p>
              <ResponsiveContainer height={250}>
                <BarChart data={data} >
                    <XAxis dataKey={dataKeys[0]}/>
                    <YAxis/>
                    <Legend/>
                    <Tooltip/>
                    <Bar dataKey={dataKeys[1]} fill="darkcyan" />
                    <Bar dataKey= {dataKeys[2]} fill="cyan" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
}

function Transactions({transactions}){
    return <motion.div id="transactionsDiv" >
                <motion.p id="label">Transactions</motion.p>
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
            <motion.p id="amount">-{amount}</motion.p>
        </motion.div>
        <motion.div id="progressbarDiv" >
            <LinearProgress variant="determinate" value={percentage}  />
        </motion.div>

    </motion.div>
}

function Income({description,amount, percentage}){
    return <motion.div id="transactionIncome">
                <motion.div id="textData">
                    <motion.p id="description">{description}</motion.p>
                    <motion.p id="amount">+{amount}</motion.p>
                </motion.div>
                <motion.div id="progressbarDiv" >
                    <LinearProgress variant="determinate" value={percentage} />
                </motion.div>
    </motion.div>
}

function Expectations({incData, incDataKey, incNameKey, expData, expDataKey, expNameKey}){

    return <motion.div id="expectationsDiv">
                <motion.p>Target</motion.p>
                <motion.div>
                    <ExpectedIncome data={incData} dataKey={incDataKey} nameKey={incNameKey} />
                    <ExpectedExpenses data={expData} dataKey={expDataKey} nameKey={expNameKey}  />
                </motion.div>
    </motion.div>
}

function ExpectedIncome({data,nameKey,dataKey}){

    return <motion.div className="subExpectation">
            <ResponsiveContainer height={300}>
                <PieChart >
                    <Pie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" innerRadius={40} fill="darkcyan" label />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
    </motion.div>
}

function ExpectedExpenses({data,nameKey,dataKey}){
    return <motion.div className="subExpectation" >
            <ResponsiveContainer height={300}>
                <PieChart >
                    <Pie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" innerRadius={40} fill="cyan" label />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
    </motion.div>   
}

function UnexpectedIncomeTrend({data,dataKeys}){

    return <motion.div id="unexpectedTrends">
                <motion.p>
                    Miscellanous Trends
                </motion.p>
                <ResponsiveContainer height={300}>
                <LineChart data={data} >
                    <Line type="monotone" dataKey={dataKeys[0]} stroke="cyan" />
                    <Line type="monotone" dataKey={dataKeys[1]} stroke="darkcyan" />
                    <XAxis dataKey={dataKeys[2]} />
                    <YAxis />
                    <Tooltip/>
                </LineChart>
                </ResponsiveContainer>
    </motion.div>
}

function IncomeUsage({value}){
            return <motion.div id="incomeUsage">
                        <motion.p id="label">Income Usage</motion.p>
                        <motion.div>
                            <CircularProgress variant="determinate" value={value} sx={{color:"cyan"}} style={{width:"70%",height:"70%", }} />
                            <motion.p>{value}%</motion.p>
                        </motion.div>
            </motion.div>
}


