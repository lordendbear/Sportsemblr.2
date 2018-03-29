import React from 'react'
// import PropTypes from 'prop-types'
import toastr from 'toastr';

const Notification = (props) => {
  if (props.notification.error) {
    toastr.error(props.notification.error.message);
  }

  if (props.notification.success) {
    toastr.success(props.notification.success.message);
  }

  return (
    <div className="hidden"></div>
  );
}

export default Notification;