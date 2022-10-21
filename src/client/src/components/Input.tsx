import React from 'react'

type InputProps = {
    value: string;
    type: string;
    placeholder: string;
    handler: (to:string) => void;

}

export default function Input({value,type, placeholder, handler}: InputProps) {
  return (
    <div>
            <input
              id={type}
              className="mt-4 text-gray-800 rounded w-full py-3 px-8 bg-slate-200 placeholder:font-semibold  hover:ring-1"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handler(e.target.value)}
            />
</div>
  )
}



