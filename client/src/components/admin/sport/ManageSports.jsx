import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SportList from './SportList';

class ManageSports extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { sports: [], isEditMode: [] };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentWillReceiveProps(ownProps, nextProps) {
    if (!this.state.sports.length && ownProps.sports && ownProps.sports.length) {
      const isEditMode = ownProps.sports
        .map(s => false);

      this.setState({ sports: ownProps.sports, isEditMode });
    }
  }

  onEdit(sport) {
    const index = this.state.sports.findIndex(s => s.id === sport.id);

    const isEditMode = Object.assign([], this.state.isEditMode);
    isEditMode[index] = true;

    this.setState({ isEditMode });
  }

  onCancel(sport) {
    const index = this.state.sports.findIndex(s => s.id === sport.id);

    const isEditMode = Object.assign([], this.state.isEditMode);
    isEditMode[index] = false;

    this.setState({ isEditMode });
  }

  onDelete(sport) {

  }

  onSave(sport) {

  }

  onAdd() {
    const sports = Object.assign([], this.state.sports);
    sports.push({ name: '', id: 0 });

    const isEditMode = Object.assign([], this.state.isEditMode);
    isEditMode.push(true);

    this.setState({ isEditMode, sports });
  }

  render() {
    return (
      <SportList sports={this.state.sports.map(s => Object.assign({}, s))}
        isEditMode={this.state.isEditMode}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        onCancel={this.onCancel}
        onSave={this.onSave}
        onAdd={this.onAdd} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sports: [...state.sports]
  }
}

export default connect(mapStateToProps)(ManageSports);