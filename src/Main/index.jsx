import { useState } from "react";
import { motion } from "framer-motion";
import Analytics from "../Analytics/Jsx";
import Navigation from "../Navigation/jsx";
import Entry from "../Entry/Jsx";
import { navConstants } from "../constants";
import "../styles/main.css";

export default function MainContainer(){
    const [page, setPage] = useState(navConstants.RECORD);
    const [darkMode, setDarkMode] = useState(false);
    
    return (<motion.div className="container" id={darkMode ? "" : "lightmode"}>
                <motion.div id="pageContent" >
                    {page === navConstants.ANALYTICS && <Analytics theme={darkMode} /> }
                    {page === navConstants.RECORD && <Entry  /> }
                </motion.div>
                <motion.div id="navigationCompContainer">
                    <Navigation navToFunc={setPage} setTheme={setDarkMode} />
                </motion.div>
            </motion.div>)
}