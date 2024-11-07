import { Topbar } from "../signin/_components/topbar";
import { Logout } from "./_components/logout";
import { ButtonSec } from "./_components/ButtonSec";

const Templates = () => {
  return (
    <div className="overflow-hidden h-full">
      <div className="">
          <Topbar/>
      </div>
      <div className="h-full">
        <div className="flex h-full">
          <div className="bg-indigo-600 w-35">
            <Logout />
          </div>
          <div className="grid md:flex items-center justify-center md:items-center md:justify-start w-full md:gap-24 md:pl-5">
            <ButtonSec/>
            <div className="bg-gray-400 w-full h-full hidden lg:block">
              hiooho
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
};

export default Templates;
