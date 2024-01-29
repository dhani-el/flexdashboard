
import { motion } from "framer-motion";
import { navConstants } from "../../constants";
import { Home } from "@mui/icons-material";
import  "../style/index.css"

// todo 1
// in need of optimzation due to function being passed in
export default function Navigation({navToFunc}){

    function handleNavClick(to){
        navToFunc((init)=>to)
    }

    return <motion.div id = "navigationContainer">
                <NavItem  handleClickFunc={handleNavClick}  Description={navConstants.HOME}  Icon={Home}  />
                <NavItem  handleClickFunc={handleNavClick}  Description={navConstants.RECORD}  Icon={Home}  />
                <NavItem  handleClickFunc={handleNavClick}  Description={navConstants.ANALYTICS}  Icon={Home}  />
                <NavItem  handleClickFunc={handleNavClick}  Description={navConstants.THEME}  Icon={Home}  />
            </motion.div>
}

// todo 2
// in need of optimzation due to function being passed in

function NavItem({handleClickFunc,Description,Icon}){
    return <motion.div className = "navItem" onClick={()=>handleClickFunc(Description)}>
                <motion.span><Icon/></motion.span>
                <motion.span>{Description}</motion.span>
            </motion.div>
}