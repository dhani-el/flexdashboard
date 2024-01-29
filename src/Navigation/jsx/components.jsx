
import { motion } from "framer-motion"


export function ThemeSlider({setTheme}){
    function handleClick(){
        setTheme();
    }
    return <motion.div onClick={handleClick} id="themeSliderDiv" >
                <motion.span id="themeSliderSpan">
                    <motion.div id="themeSliderSpanDiv" >

                    </motion.div>
                </motion.span>
                <p>Theme</p>
            </motion.div>
}