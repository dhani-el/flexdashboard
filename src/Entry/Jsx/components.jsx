import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { EntryConst } from "../../constants";


export function ARecord({Description,onClick}){
    return <motion.div onClick={onClick} >
                <motion.p>{Description}</motion.p>
            </motion.div>
}

export function RecordDialouge({variant}){

        return <motion.div>
                    <motion.p>{variant}</motion.p>
                    <TextField placeholder= {(variant === EntryConst.FIXEDEXPENSES || variant === EntryConst.FIXEDINCOME  ) ? "NEW AMOUNT" : "COST"} />
                    <TextField placeholder="NAME OF EXPENSE" sx={{display:((variant === EntryConst.FIXEDEXPENSES || variant === EntryConst.FIXEDINCOME  ) ? "hidden" : "block")}} />
                    <Button>RECORD</Button>
                </motion.div>
}