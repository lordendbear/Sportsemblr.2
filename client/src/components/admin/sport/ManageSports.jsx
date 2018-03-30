import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SportList from './SportList';

class ManageSports extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <SportList sports={this.props.sports} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sports: [...state.sports]
  }
}

export default connect(mapStateToProps)(ManageSports);