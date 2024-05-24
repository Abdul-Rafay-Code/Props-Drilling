import React from 'react'

const Input = (props:any) => {
    const {placeholder,value,style} = props
    const {backgroundColor,border,padding} = style
  return (
       <input type="text" placeholder={placeholder} className={`${backgroundColor} ${padding} ${border} `  } onChange={value}  /> 
)
}

export default Input