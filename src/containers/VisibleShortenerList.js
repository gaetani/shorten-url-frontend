import { connect } from 'react-redux'
import { toggleShortener } from '../actions'
import ShortenerList from '../components/ShortenerList'
import { VisibilityFilters } from '../actions'

const getVisibleShorteners = (shorteners, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return shorteners
    case VisibilityFilters.SHOW_COMPLETED:
      return shorteners.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return shorteners.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  shorteners: getVisibleShorteners(state.shorteners, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleShortener: id => dispatch(toggleShortener(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortenerList)
