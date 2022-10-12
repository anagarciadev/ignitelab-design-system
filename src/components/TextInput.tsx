import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
}

export interface TextInputRootProps {
    children: ReactNode,
}

function TextInputRoot (props: TextInputRootProps) {
    return (
        <div className='flex items-center h-12 gap-3 py-4 px-3 bg-grey-800 rounded w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )

}

export interface TextInputIcon {
    children: ReactNode;
}

function TextInputIcon (props: TextInputIcon) {
    return (
        <Slot className='w-6 h-6 text-grey-400'>
            {props.children}
        </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput (props: TextInputInputProps) {
    return (
         <input 
            className='bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none'
             {...props}
            
         />       
        
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}