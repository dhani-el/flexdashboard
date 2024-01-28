import { useState } from "react";
import { motion } from "framer-motion";
import Analytics from "../Analytics/Jsx";
import Navigation from "../Navigation/jsx";
import { navConstants } from "../constants";


export default function MainContainer(){
    const [page, setPage] = useState(navConstants.HOME)
    
    return (<motion.div className="container">
                <motion.div id="pageContent" >
                    {page === navConstants.ANALYTICS && <Analytics/> }
                </motion.div>
                <motion.div id="navigationCompContainer">
                    <Navigation navToFunc={setPage}/>
                </motion.div>
            </motion.div>)
}