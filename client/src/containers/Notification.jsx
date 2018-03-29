import { connect } from 'react-redux'
import Notification from '../components/common/Notification';

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
}

export default connect(
  mapStateToProps
)(Notification)