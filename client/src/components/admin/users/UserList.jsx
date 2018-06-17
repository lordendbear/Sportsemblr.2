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

        {
          user.role === 'admin' ?
            <Button color="primary" size="sm" onClick={() => this.props.toggleAdmin(user, false)}>Remove admin</Button>
            : <Button color="primary" size="sm" onClick={() => this.props.toggleAdmin(user, true)}>Make admin</Button>
        }
      </td >
    </tr >);
  }

  render() {
    return (<table className="table table-bordered table-condensed">
      <thead>
        <tr>
          <th className="col-md-8">
            Name
       </th>
          <th className="col-md-4">
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