"use client"

import { BiDollar } from "react-icons/bi";
import { InputProps } from "../../types";



const Input:React.FC<InputProps> = ({id,label,type="text", disabled,formatPrice,register,required,errors}) => {
    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiDollar size={24} className="text-neutral-700 absolute top-5 left-2" />
            )}
            <input 
            id={id}
            disabled={disabled}
            {...register(id, {required})}
            placeholder=" "
            type={type}
            className={`
            peer
            w-full
            p-4
            pt-6
            font-light
            bg-white
            border-2
            `}
            />
        </div>
    )
}

export default Input;