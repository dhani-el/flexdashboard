
import { motion } from "framer-motion";
import { Home } from "@mui/icons-material";
import { navConstants } from "../../constants";
import { ThemeSlider } from "./components";
import  "../style/index.css"

// todo 1
// in need of optimzation due to function being passed in
export default function Navigation({navToFunc,setTheme}){

    function handleGeneralNavClick(to){
        navToFunc((init)=>to)
    }

    function handleThemeClick(){
        setTheme(init=>!init)
    }

    return <motion.div id = "navigationContainer">
                <NavItem  handleClickFunc={handleGeneralNavClick}  Description={navConstants.HOME}  Icon={Home}  />
                <NavItem  handleClickFunc={handleGeneralNavClick}  Description={navConstants.RECORD}  Icon={Home}  />
                <NavItem  handleClickFunc={handleGeneralNavClick}  Description={navConstants.ANALYTICS}  Icon={Home}  />
                <ThemeSlider setTheme={handleThemeClick}/>
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