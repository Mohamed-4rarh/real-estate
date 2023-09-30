import React from 'react'

export default function RepeatedTitle({ title, description, titleColor, descriptionColor}) {
  return (
    <div className='repeated-title'>
        <h1 className={`repeated-title__title ${titleColor}`}>{title}</h1>
        <p className={`repeated-title__description ${descriptionColor}`}>{description}</p>
    </div>
  )
}
