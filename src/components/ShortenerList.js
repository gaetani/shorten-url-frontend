import React from 'react'
import PropTypes from 'prop-types'
import Shortener from './Shortener'

const ShortenerList = ({ shorteners, toggleShortener }) => (
  <ul>
    {
      shorteners.map(shortener =>
      <Shortener
        key={shortener.id}
        {...shortener}
        onClick={() => toggleShortener(shortener.id)}
      />
    )}
  </ul>
)

ShortenerList.propTypes = {
  shorteners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleShortener: PropTypes.func.isRequired
}

export default ShortenerList
