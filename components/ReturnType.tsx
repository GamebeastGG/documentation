import React from 'react';

const ReturnType = ({type} : {type? : string}) => {
  return <p className="font-semibold italic text-lg w-min bg-gb-secondary bg-opacity-10 h-min px-2 py-1 mt-2 text-nowrap rounded-lg dark:text-gb-faded text-opacity-20">{"→ " + (type || "void")}</p>  
};

export default ReturnType;