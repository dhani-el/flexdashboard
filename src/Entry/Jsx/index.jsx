import { useState } from "react";
import { motion } from "framer-motion";
import { ARecord, RecordDialouge } from "./components";
import { EntryConst } from "../../constants";
import "../styles/index.css"

export default function Entry(){
    const [showRecordDiag, setShowRecordDiag] = useState(false);
    const [RecordDiag, setRecordDiag] = useState(EntryConst.MISCELLANEOUSEXPENSES);

    function handleRecordClick(recordType){
        setShowRecordDiag(init=>!init);
        setRecordDiag(init => recordType )
    }

    function handleCancleClick(){
        setShowRecordDiag(init=>!init);
    }

    
    return <motion.div id="entryDiv" >
                <motion.p id="headerText">RECORDS</motion.p>
                <motion.div id="recordsContainer" >
                    <ARecord Description={EntryConst.MISCELLANEOUSEXPENSES}  onClick={()=>handleRecordClick(EntryConst.MISCELLANEOUSEXPENSES)}  />
                    <ARecord Description={EntryConst.MISCELLANEOUSINCOME}  onClick={()=>handleRecordClick(EntryConst.MISCELLANEOUSINCOME)}  />
                    <ARecord Description={EntryConst.FIXEDEXPENSES}  onClick={()=>handleRecordClick(EntryConst.FIXEDEXPENSES)}  />
                    <ARecord Description={EntryConst.FIXEDINCOME}  onClick={()=>handleRecordClick(EntryConst.FIXEDINCOME)}  />
                </motion.div>
                { showRecordDiag && <RecordDialouge variant={RecordDiag} handleCancleClick={handleCancleClick} /> }
            </motion.div>
}

