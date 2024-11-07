import { Button } from "@/components/ui/button";

export const ButtonSec = ()=>{
    return (
        <>
         <div className="md:pl-5">
              <Button className="block w-[200px] h-[180px] rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 font-bold text-white text-xl shadow-lg">
                <h1>Create a meeting</h1>
              </Button>
            </div>
            <div className="pb-12 md:pb-0">
              <Button className="block w-[200px] h-[180px] rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 font-bold text-white text-xl shadow-lg">
                <h1>Join a meeting</h1>
              </Button>
            </div>
        </>
    )   
}