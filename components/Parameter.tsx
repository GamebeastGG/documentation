import React, { useEffect, useRef } from 'react';

const ParameterList = ({children} : {name : string, children : any}) => {
  const [maxSize, setMaxSize] = React.useState(0);

  function sizeCallback(size : number) {
    if (size > maxSize) {
      setMaxSize(size);
    }
  }

  const modifiedChildren = React.Children.map(children, (child, index) => {
    

    return React.cloneElement(child, {sizeOverride : maxSize, sizeCallback});
  })

  return <>
    <div className="flex flex-col gap-2 w-full mt-6 ">
      {modifiedChildren}
    </div>
  </>
}

const Parameter = ({name, type, children, sizeCallback, sizeOverride} : {name : string, type? : string, children : any, sizeOverride? : number, sizeCallback? : (size : number) => void}) => {

  const typeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeContainerRef.current && sizeCallback) {
      sizeCallback(typeContainerRef.current.offsetWidth);
    }
  }, [typeContainerRef.current])

  return ( 
    <div className="flex flex-col w-full rounded-md outline-1 outline outline-gb-light-bg3 dark:outline-gb-bg2">
      <div ref={typeContainerRef} className=" min-w-1/3 min-w- dark:bg-gb-bg1 bg-gb-light-bg2 content-center p-2 px-4 flex flex-row items-center">
        <p className='font-semibold text-xl dark:text-gb-faded text-black pr-2'>{name}</p>
        <p className="font-semibold texl-xl dark:bg-gb-bg3 bg-gb-light-bg1 bg-opacity-50 h-min w-min p-1 mt-1 text-nowrap rounded-md text-[#444444] dark:text-[#8d8d8d]">{ (type || "any")}</p>
      </div>
      <div className='w-auto dark:bg-gb-tertiary p-3 content-center text-md'>
        {children}
      </div>
    </div>
  )
};

export {ParameterList, Parameter};