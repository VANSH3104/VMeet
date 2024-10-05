import { Topbar } from "../signin/component/topbar";
import AllTemp  from "./components/temp";
// import { Logout } from "./components/logout";

const Templates = () => {
  return (
    <div className="grid overflow-hidden h-full">
      <div className="">
          <Topbar/>
      </div>
      <div className="">
        <AllTemp />
      </div>
    </div>
  ) 
};

export default Templates;
