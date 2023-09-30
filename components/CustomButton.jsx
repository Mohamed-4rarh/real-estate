import React from 'react'

export default function CustomButton({ text, style }) {
  return (
    <button className={`${style} flex m-[10px] font-semibold capitalize py-[12px] px-[24px] rounded-[5px] `}>
        {text}
    </button>
  )
}
