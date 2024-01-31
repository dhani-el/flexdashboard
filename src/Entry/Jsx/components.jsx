import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { EntryConst } from "../../constants";
import { ArrowRightAlt } from "@mui/icons-material";


export function ARecord({Description,onClick}){
    return <motion.div onClick={onClick} id="arecord" >
                <motion.p>{Description}</motion.p>
                {/* <motion.div id = "arrowDiv">
                    <ArrowRightAlt/>
                </motion.div> */}
                <Button variant="contained" >RECORD</Button>
            </motion.div>
}

export function RecordDialouge({variant}){

        return <motion.div id="recordDialouge">
                    <motion.p>{variant}</motion.p>
                    <TextField placeholder= {(variant === EntryConst.FIXEDEXPENSES || variant === EntryConst.FIXEDINCOME  ) ? "NEW AMOUNT" : "COST"} />
                    <TextField placeholder="NAME OF EXPENSE" sx={{display:((variant === EntryConst.FIXEDEXPENSES || variant === EntryConst.FIXEDINCOME  ) ? "hidden" : "block")}} />
                    <motion.div>
                        <Button>RECORD</Button>
                        <Button>CANCEL</Button>
                    </motion.div>
                </motion.div>
}