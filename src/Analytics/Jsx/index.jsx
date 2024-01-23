import { motion } from "framer-motion";
import { AttachMoney,Paid,AccountBalanceWallet, CreditCard,Payments } from "@mui/icons-material";
import "../Styles/index.css"



export default function Analytics(){
    return <div id = "analyticsContainer">
                 <AnalysisDisplay/>   
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
