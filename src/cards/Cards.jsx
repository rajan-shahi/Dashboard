import React from 'react'
import "./card.css"

export default function Cards({name}) {
  return (
    <div>
      <div className="card-container">
        <p>{name}</p>
   
      </div>
    </div>
  )
}
