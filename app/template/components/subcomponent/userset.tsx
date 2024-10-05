"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger , TabsEnd } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
export const Userset = ()=>{
    const [activeIndex, setActiveIndex] = useState(1);
    const [progress, setProgress] = useState(2)
    useEffect(()=>{
        if(activeIndex>2 || activeIndex<1){
            setActiveIndex(1)
        }
    },[activeIndex])
    useEffect(() => {
        if(activeIndex === 1) {
            setProgress(50)
         } else if(activeIndex ===2 ){
            setProgress(100)
         }
    }, [activeIndex])
    return (
        <div className="h-full grid ">
            <Tabs defaultValue="tab1" value={`tab${activeIndex}`} onValueChange={(value) => setActiveIndex(parseInt(value.replace('tab', '')))}>
            <div className=" h-[80%]">
            <Progress value={progress} className="w-[100%] text-white" />
            <TabsList className="hidden">
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Make changes to your account here.</TabsContent>
            <TabsContent value="tab2">Change your password here.</TabsContent>
            </div>
            <div className="">
                <TabsEnd activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
            </Tabs>

        </div>
    )
}