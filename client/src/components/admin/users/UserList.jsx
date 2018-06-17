import React from 'react';
import { Button } from 'reactstrap';

class UserList extends React.Component {


  renderUser(user) {
    return (<tr key={user._id}>
      <td>
        {user.name}
      </td >
      <td>
        <Button color="danger" size="sm" onClick={() => this.props.delete(user)}>Delete</Button>
      </td >
    </tr >);
  }

  render() {
    return (<table className="table table-bordered table-condensed">
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
          this.props.users.map((user) =>
            this.renderUser(user))
        }
      </tbody>
    </table>);
  }
}

export default UserList;