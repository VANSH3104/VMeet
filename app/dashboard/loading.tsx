import Image from "next/image";
const Loading = ()=>{
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Image
            src="/images/logo.svg"
            alt="logo"
            width={60}
            height={60}
            className="duration-700 animate-pulse"
            />
        </div>
    )
}
export default Loading