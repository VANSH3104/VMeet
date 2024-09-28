"use client"
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <button onClick={()=>signIn()}>signin</button>
      <h1 className="font-lato font-bold text-2xl">Lato - Bold</h1>
  <p className="font-lato font-light">This is Lato light text.</p>  
  <h1 className="font-roboto font-bold text-2xl">Roboto - Bold</h1>
  <p className="font-roboto font-regular">This is Roboto regular text.</p>

  <h1 className="font-openSans font-bold text-2xl text-red-600">Open Sans - Bold</h1>
  <p className="font-openSans font-light">This is Open Sans light vansh and hi from me text.</p>
  <h1 className="font-montserrat font-bold text-2xl">Montserrat - Bold</h1>
  <p className="font-montserrat font-regular">This is Montserrat regular is a vansh and m,y sel regular text.</p>

  <h1 className="font-poppins font-bold text-2xl">Poppins - Bold</h1>
  <p className="font-poppins font-light">This is Poppins light text.</p>

    </div>
  )
  }
