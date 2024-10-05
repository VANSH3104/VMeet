import React from "react";
import { Topbar } from "../signin/component/topbar";
// import User from "./page";

export default async function useLayout({children}:{children:React.ReactNode}) {
    return (
        <div className="h-full">
            <main className="h-full">
            <div className="relative overflow-hidden">
            <div className="fixed left-0 right-0">
                <Topbar/>
            </div>
            <div className="mt-16 overflow-hidden">
                {children}
            </div>
            </div>
            </main>
        </div>
    )
}