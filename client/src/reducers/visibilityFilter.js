import { VisibilityFilters } from '../actions/eventActions';

const visibilityFilter = (state = { filter: VisibilityFilters.SHOW_ALL }, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action
    default:
      return state
  }
}

export default visibilityFilter