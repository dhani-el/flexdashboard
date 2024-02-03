import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { EntryConst } from "../../constants";


export function ARecord({Description,onClick}){
    return <motion.div onClick={onClick} id="arecord" >
                <motion.p>{Description}</motion.p>
                <Button variant="contained" >RECORD</Button>
            </motion.div>
}

export function RecordDialouge({variant, handleCancleClick}){
const variantCheck =  variant === EntryConst.FIXEDEXPENSES || variant === EntryConst.FIXEDINCOME;

        return <motion.div id="recordDialouge">
                    <motion.p>{variant}</motion.p>
                    <TextField placeholder= {variantCheck ? "NEW AMOUNT" : "COST"} type="number" />
                    <TextField placeholder="NAME OF EXPENSE" style={{display: variantCheck ? "none" : "inline-flex"}} />
                    <motion.div id="btnDiv" >
                        <Button variant="contained" id = "firstButton" >RECORD</Button>
                        <Button variant="contained" id = "secondButton"  onClick={handleCancleClick} >CANCEL</Button>
                    </motion.div>
                </motion.div>
}