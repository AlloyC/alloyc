import React from 'react'
interface Btn {
    btnFunction: React.MouseEventHandler<HTMLButtonElement>;
    solid: boolean;
    text: string;
}

function Button({btnFunction, solid, text}: Btn) {
  return (
      <button onClick={btnFunction} className={`${solid ? "bg-dark-blue border-2 dark:bg-light-blue-DM border-dark-blue dark:border-light-blue-DM text-white": "border-2 border-dark-blue dark:border-light-blue-DM text-dark-blue dark:text-light-blue-DM"} rounded-md px-4 py-2 font-medium`}>
      {text}
    </button>
  )
}

export default Button
