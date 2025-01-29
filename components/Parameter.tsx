import React from 'react';

const ParameterList = ({children} : {name : string, children : any}) => {
  return <>
    <div className="flex flex-col w-full mt-6 rounded-md outline-1 outline outline-gb-light-bg3 dark:outline-gb-bg2">
      {children}
    </div>
  </>
}

const Parameter = ({name, type, children} : {name : string, type? : string, children : any}) => {
  return ( 
    <div className="flex flex-row w-full border-t-[1px] dark:border-gb-bg2 border-gb-light-bg3 ">
      <div className="min-w-1/3 dark:bg-gb-bg1 bg-gb-light-bg2 content-center p-2 px-4 border-r-2 border-gb-light-bg3 dark:border-gb-bg2 flex flex-col items-left">
        <p className='font-semibold text-xl dark:text-gb-faded text-black'>{name}</p>
        <p className="font-semibold texl-xl dark:bg-gb-bg3 bg-gb-light-bg1 bg-opacity-50 h-min w-min p-1 mt-1 text-nowrap rounded-md text-[#444444] dark:text-[#8d8d8d]">{ (type || "any")}</p>
      </div>
      <div className='w-auto dark:bg-gb-tertiary p-3 content-center'>
        <p className="text-lg">{children}</p>
      </div>
    </div>
  )
};

export {ParameterList, Parameter};