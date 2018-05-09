import React from 'react';
import TextInput from '../../common/TextInput';
import { Input, Button } from 'reactstrap';

const Sport = ({ sport, isEditMode, onSave, onDelete, onCancel, onEdit }) => {
  return (
    <tr>
      <td>
        {!isEditMode && sport.name}

        {isEditMode && <Input onChange={(e) => this.onEmailChange(e.target.value)}
          value={sport.name} type="text" />}
      </td >
      <td>
        {!isEditMode &&
          <Button color="primary" size="sm" onClick={() => onEdit(sport)}>Edit</Button>
        }

        {isEditMode &&
          <Button color="success" size="sm" onClick={() => onSave(sport)}>Save</Button>
        }

        {isEditMode && !!sport.id &&
          <Button color="warning" size="sm" onClick={() => onCancel(sport)}>Cancel</Button>
        }

        {isEditMode &&
          <Button color="danger" size="sm" onClick={() => onDelete(sport)}>Delete</Button>
        }
      </td >
    </tr >
  );
};

export default Sport;