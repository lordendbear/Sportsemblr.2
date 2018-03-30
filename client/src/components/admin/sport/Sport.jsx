import React from 'react';
import TextInput from '../../common/TextInput';

const Sport = ({ sport, isEditMode, onSave, onDelete, onCancel, onEdit }) => {
  return (
    <tr>
      <td>
        {sport.name}
      </td >
      <td>
        {isEditMode ? null :
          <a className="btn btn-default btn-sm"
            onClick={(e) => onEdit(sport)}>
            <span className="fa-edit" >
            </span>
            Edit
        </a>
        }
      </td >
    </tr >
  );
};

export default Sport;