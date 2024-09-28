import React from "react";
// import User from "./page";

export default async function useLayout({children}:{children:React.ReactNode}) {
    return (
        <div className="h-full">
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}