"use client"
import{ useState, useEffect } from "react";
import Loading from "./loading";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="h-full">
            {loading ? (
                <div className="flex items-center justify-center h-full">
                    <Loading />
                </div>
            ) : (
                <main className="h-full">
                    {children}
                </main>
            )}
        </div>
    );
}
