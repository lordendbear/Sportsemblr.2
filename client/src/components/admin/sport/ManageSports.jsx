import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SportList from './SportList';
import { deleteSport, saveSport } from '../../../actions/sportActions';

class ManageSports extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { sports: [], isEditMode: [], originalSports: [] };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentWillReceiveProps(ownProps, nextProps) {
    if (ownProps.sports) {
      const isEditMode = ownProps.sports
        .map(s => false);

      this.state.originalSports = ownProps.sports.map(s => {
        return Object.assign({}, s);
      });

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

    const sports = Object.assign([], this.state.sports);
    const originalSport = this.state.originalSports[index];

    sports.splice(index, 1, Object.assign({}, originalSport));

    const isEditMode = Object.assign([], this.state.isEditMode);
    isEditMode[index] = false;

    this.setState({ isEditMode, sports });
  }

  onDelete(sport) {
    this.props.delete(sport.id);
  }

  onSave(sport) {
    this.props.save(sport)
    // .then(savedSport => {
    //   const index = this.state.sports.findIndex(s => s.id === sport.id);

    //   const sports = Object.assign([], this.state.sports);
    //   sports.splice(index, 1, savedSport);

    //   const isEditMode = Object.assign([], this.state.isEditMode);
    //   isEditMode[index] = false;
    //   this.setState({ isEditMode, sports });
    // });
  }

  onAdd() {
    const sports = Object.assign([], this.state.sports);
    sports.push({ name: '', id: 0 });

    const isEditMode = Object.assign([], this.state.isEditMode);
    isEditMode.push(true);

    this.setState({ isEditMode, sports });
  }

  onNameChange(sport, newName) {
    const index = this.state.sports.findIndex(s => s.id === sport.id);

    const sports = Object.assign([], this.state.sports);
    const changedSport = Object.assign({}, sport);
    changedSport.name = newName;

    sports.splice(index, 1, changedSport);

    this.setState({ sports });
  }

  render() {
    return (
      <SportList sports={this.state.sports.map(s => Object.assign({}, s))}
        isEditMode={this.state.isEditMode}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        onCancel={this.onCancel}
        onSave={this.onSave}
        onNameChange={this.onNameChange}
        onAdd={this.onAdd} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sports: [...state.sports]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    delete: deleteSport, save: saveSport
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSports);