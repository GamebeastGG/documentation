import React from 'react';
import { LaptopMinimal, Server } from "lucide-react"

const ReturnTypeTile = ({context} : {context : "client" | "server"}) => {
  return <div style={{"background" : (context == "client" ? "#326ac2" : "#369159")}} className='flex flex-row rounded-lg bg-opacity-40 w-min items-center py-1 px-2 mt-2'>
    {
      context == "client" ? <LaptopMinimal color='#ffffff' /> : <Server color='#ffffff'/> 
    }
    <p className="font-semibold text-md w-min h-min px-2 text-nowrap text-white capitalize">{(context)}</p>  
  </div>
};

const ReturnType = ({contexts} : {contexts : ("client" | "server")[]}) => {
  return <div className="flex flex-row w-full mt-2 gap-x-2.5">
    {
      contexts.map((context, index) => <ReturnTypeTile key={index} context={context}/>)
    }
  </div>
}

export default ReturnType;