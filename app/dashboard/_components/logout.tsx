"use client"
import { signOut } from 'next-auth/react';
import { ImExit } from "react-icons/im";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
export const Logout = ()=>{
  return (
    <div className='p-4'>
      <HoverCard>
        <HoverCardTrigger><ImExit onClick={()=>signOut({ callbackUrl: '/signin' })} className='text-black size-6' /></HoverCardTrigger>
        <HoverCardContent className='w-full rounded-lg'>
          Logout
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

