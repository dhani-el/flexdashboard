import { useState } from "react";
import Analytics from "../Analytics/Jsx";
import Navigation from "../Navigation/jsx";
import { navConstants } from "../constants";


export default function MainContainer(){
    const [page, setPage] = useState(navConstants.HOME)
    
    return (<div className="container">
                <Analytics/>
                <Navigation navToFunc={setPage}/>
            </div>)
}