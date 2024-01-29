import { TextField } from "@mui/material";
import { motion } from "framer-motion";



export function ARecord({Description,onClick}){
    return <motion.div onClick={onClick} >
                <motion.p>{Description}</motion.p>
            </motion.div>
}

export function RecordDialouge({variant}){
        return <motion.div>
                    <motion.p>{variant}</motion.p>
                    <TextField  />
                </motion.div>
}