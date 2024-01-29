import { useState } from "react";
import { motion } from "framer-motion";
import Analytics from "../Analytics/Jsx";
import Navigation from "../Navigation/jsx";
import { navConstants } from "../constants";
import "../styles/main.css";

export default function MainContainer(){
    const [page, setPage] = useState(navConstants.HOME)
    const [darkMode, setDarkMode] = useState(false);
    
    return (<motion.div className="container">
                <motion.div id="pageContent" >
                    {page === navConstants.ANALYTICS && <Analytics theme={darkMode} /> }
                </motion.div>
                <motion.div id="navigationCompContainer">
                    <Navigation navToFunc={setPage} setTheme={setDarkMode} />
                </motion.div>
            </motion.div>)
}