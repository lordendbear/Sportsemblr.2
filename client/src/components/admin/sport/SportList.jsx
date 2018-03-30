import React from 'react';
import TextInput from '../../common/TextInput';
import Sport from './Sport';

const SportList = ({ sports }) => {
  console.log(sports);
  return (
    <table className="table table-bordered table-condensed">

      <thead>
        <tr>
          <th className="col-md-10">
            Name
           </th>
          <th className="col-md-2">

          </th>
        </tr>
      </thead>

      <tbody>
        {
          sports.map(sport =>
            <Sport
              key={sport.id}
              sport={sport}
            />
          )
        }
      </tbody>
    </table>
  );
};

export default SportList;