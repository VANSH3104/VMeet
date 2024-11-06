import { Topbar } from "../signin/_components/topbar";
import { Logout } from "./_components/logout";

const Templates = () => {
  return (
    <div className="grid overflow-hidden">
      <div className="">
          <Topbar/>
      </div>
      <div className="">
        <Logout/>
      </div>
    </div>
  ) 
};

export default Templates;
