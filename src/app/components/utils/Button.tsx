import React from 'react'
interface Btn {
    btnFunction: React.MouseEventHandler<HTMLButtonElement>;
    solid: boolean;
    text: string;
}

function Button({btnFunction, solid, text}: Btn) {
  return (
      <button onClick={btnFunction} className={`${solid ? "bg-dark-blue border-2 border-dark-blue  text-white": "border-2 border-dark-blue text-dark-blue"} rounded-md px-4 py-2 font-medium`}>
      {text}
    </button>
  )
}

export default Button
