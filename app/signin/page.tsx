"use client"
import {Authmain} from "./component/authmain"
import { ImCross } from "react-icons/im";
const Signin = ()=>{
    const goBack = () => {
        window.location.href = "/";
    };
    return (
        <div className="min-h-screen h-screen overflow-hidden ">
            <div className="flex justify-between">
                <div className=" ">
                    <button className="pl-3" onClick={goBack}>
                        <img src="/images/Group1.png" className="w-28 h-16"/>
                        </button>
                </div>
                <div className="p-6">
                    <button className="pl-2" onClick={goBack}>
                    <ImCross className="p-1 text-xl" />
                    </button>
                </div>
            </div>
        <div className="h-full flex min-h-screen justify-center 
        items-center ">
            <Authmain />
        </div>
        </div>
    )
}
export default Signin
