import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SportList from './SportList';

class ManageSports extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { sports: [] };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentWillReceiveProps(ownProps, nextProps) {
    if (!this.state.sports.length && ownProps.sports && ownProps.sports.length) {
      const isEditMode = ownProps.sports
        .map(s => false);
      this.setState({ sports: ownProps.sports, isEditMode });
    }
  }

  mapSports(sports) {
    const sportsItems = sports
      .map(s => {
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
    const isEditMode = Object.assign([], this.state.isEditMode);
    isEditMode[index] = true;

    this.setState({ sports, isEditMode });
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
        isEditMode={this.state.isEditMode}
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