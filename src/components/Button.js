import React from 'react'

export default function Button(props) {
  const {
    name,
    id,
    buttonClickHandler
  } = props;
  let btnClass = {
    "padding": '8px',
    "background": 'grey'
  }
  return (
    <div>
      <button onClick={buttonClickHandler} className={btnClass} id={id} > {name} </button>
    </div>
  )
}
