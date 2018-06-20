import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/eventActions';
import { Input } from 'reactstrap';

const mapStateToProps = (state, ownProps) => ({
  active: (ownProps.filter === state.visibilityFilter) + ''
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (e) => dispatch(setVisibilityFilter(ownProps.filter, e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)
