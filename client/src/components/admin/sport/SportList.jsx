import React from 'react';
import Sport from './Sport';
import { Button } from 'reactstrap';

const SportList = ({ sports, onSave, onDelete, onCancel, onEdit, isEditMode, onAdd }) => {
  return (
    <table className="table table-bordered table-condensed">
      <thead>
        <tr>
          <th className="col-md-10">
            Name
           </th>
          <th className="col-md-2">
            <Button color="primary" size="sm" onClick={() => onAdd()}>Add</Button>
          </th>
        </tr>
      </thead>

      <tbody>
        {
          sports.map((sport, index) =>
            <Sport
              key={sport.id}
              sport={sport}
              onEdit={onEdit}
              onSave={onSave}
              onCancel={onCancel}
              onDelete={onDelete}
              isEditMode={isEditMode[index]}
            />
          )
        }
      </tbody>
    </table>
  );
};

export default SportList;