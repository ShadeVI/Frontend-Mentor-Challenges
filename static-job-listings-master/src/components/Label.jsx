import React from 'react'
import './styles/Label.css'

const Label = ({ children, isNew, isFeatured }) => {
  return (
    <span className={`label ${isNew && 'label--isNew'} ${isFeatured && 'label--isFeatured'}`}>{children}</span>
  )
}

export default Label
