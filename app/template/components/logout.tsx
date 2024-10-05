"use client"
import { signOut } from 'next-auth/react'; // If using NextAuth.js, otherwise, implement custom logic
export const Logout = ()=>{
  return (
    <div>
      <h1>Signing Out...</h1>
      <button onClick={()=>signOut({ callbackUrl: '/signin' })}>signout</button>;
      <p>You will be redirected shortly.</p>
    </div>
  );
};

