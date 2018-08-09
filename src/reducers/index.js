import { combineReducers } from 'redux'
import shortener from './shortener'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  shorteners: shortener,
  visibilityFilter
})
