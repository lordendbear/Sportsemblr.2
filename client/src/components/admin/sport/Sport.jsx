import React from 'react';
import TextInput from '../../common/TextInput';

const Sport = ({ sport, isEditMode, onSave, onDelete, onCancel, onEdit }) => {
  return (
    <tr>
      <td>
        {!isEditMode && sport.name}
      </td >
      <td>
        {!isEditMode &&
          <a className="btn btn-default btn-sm"
            onClick={(e) => onEdit(sport)}>
            <span className="fa-edit" >
            </span>
            Edit
        </a>}

        {isEditMode &&
          <a className="btn btn-default btn-sm"
            onClick={(e) => onSave(sport)}>
            <span className="fa-edit" >
            </span>
            Save
        </a>}

        {isEditMode && sport.id &&
          <a className="btn btn-default btn-sm"
            onClick={(e) => onCancel(sport)}>
            <span className="fa-edit" >
            </span>
            Cancel
        </a>}

        {isEditMode &&
          <a className="btn btn-default btn-sm"
            onClick={(e) => onDelete(sport)}>
            <span className="fa-edit" >
            </span>
            Delete
        </a>}
      </td >
    </tr >
  );
};

export default Sport;