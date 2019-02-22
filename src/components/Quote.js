import React from 'react'

export default function Quote(props) {
  const {
    quote,
    author
  } = props;
  return (
      <div>
          <div id="text">
            {quote}
      </div>
      <br />
          <div id="author">
            {author}
          </div>

        </div>
  )
}
