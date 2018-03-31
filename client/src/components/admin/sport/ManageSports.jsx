import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SportList from './SportList';

class ManageSports extends React.Component {
  constructor(props, context) {
    super(props, context);

    const sports = props.sports
      .map(s => {
        s.isEditMode = false;
        return s;
      });

    this.state = { sports };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentWillReceiveProps(ownProps, nextProps) {
    if (!this.state.sports.length && ownProps.sports && ownProps.sports.length) {
      const sports = this.mapSports(ownProps.sports);
      this.setState({ sports });
    }
  }

  mapSports(sports) {
    const sportsItems = sports
      .map(s => {
        s.isEditMode = false;
        return s;
      });

    return sportsItems;
  }

  onEdit(sport) {
    sport.isEditMode = true;

    const sports = Object.assign([], this.state.sports);

    const index = sports.findIndex(s => s.id === sport.id);
    sport.original = Object.assign({}, sports[index]);

    sports[index] = Object.assign({}, sport);

    this.setState({ sports });
  }

  onCancel(sport) {

  }

  onDelete(sport) {

  }

  onSave(sport) {

  }

  render() {
    return (
      <SportList sports={this.state.sports}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        onCancel={this.onCancel}
        onSave={this.onSave} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sports: [...state.sports]
  }
}

export default connect(mapStateToProps)(ManageSports);