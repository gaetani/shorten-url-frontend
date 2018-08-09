import React from 'react'
import { connect } from 'react-redux'
import { addShortener } from '../actions'

const AddShortener = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addShortener(input.value, dispatch)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Shortener
        </button>
      </form>
    </div>
  )
}

export default connect()(AddShortener)
