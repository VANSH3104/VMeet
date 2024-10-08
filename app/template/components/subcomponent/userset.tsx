"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger , TabsEnd } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export const Userset = ()=>{
    const [activeIndex, setActiveIndex] = useState(1);
    const [progress, setProgress] = useState(4);
    
    useEffect(()=>{
        if(activeIndex>4 || activeIndex<1){
            setActiveIndex(1)
        }
    },[activeIndex])
    useEffect(() => {
        if(activeIndex === 1) {
            setProgress(25)
         } else if(activeIndex ===2 ){
            setProgress(50)
         }
         else if(activeIndex === 3){
            setProgress(75)
         }
         else{
            setProgress(100)
         }
    }, [activeIndex])
    return (
        <div className="h-full grid ">
            <Tabs defaultValue="tab1" value={`tab${activeIndex}`} onValueChange={(value) => setActiveIndex(parseInt(value.replace('tab', '')))}>
            <div className=" h-[80%]">
            <Progress value={progress} className="w-[100%] text-white" />
            <TabsList className="hidden">
                <TabsTrigger value="tab1">Main</TabsTrigger>
                <TabsTrigger value="tab2">Header</TabsTrigger>
                <TabsContent value="tab3">sidebar</TabsContent>
                <TabsContent value="tab4">middle</TabsContent>
            </TabsList>
            <TabsContent value="tab1">hii</TabsContent>
            <TabsContent value="tab2">Change your password here.</TabsContent>
            <TabsContent value="tab3">Make .</TabsContent>
            <TabsContent value="tab4">Make account here.</TabsContent>
            </div>
            <div className="">
                <TabsEnd activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
            </Tabs>

        </div>
    )
}