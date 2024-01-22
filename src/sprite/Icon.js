import React from 'react'
import Icons from './sprite.svg'

const Icon = ({id, className}) => {
  return (
    <svg className={className}>
        <use href={Icons + "#icon-" + id}></use>
    </svg>
  )
}

export default Icon
