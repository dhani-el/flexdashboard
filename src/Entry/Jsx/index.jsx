import { motion } from "framer-motion"
import { ARecord, RecordDialouge } from "./components"
import "../styles/index.css"
import { useState } from "react"

export default function Entry(){
    const [showRecordDiag, setShowRecordDiag] = useState(false)
    return <motion.div>
                { showRecordDiag && <RecordDialouge/> }
            </motion.div>
}

