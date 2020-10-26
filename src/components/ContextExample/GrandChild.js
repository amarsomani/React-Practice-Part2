import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class GrandChild extends Component {
  render() {
    return (
      <UserConsumer>
        {users => {
          return (
            <div>
              {/* Hello {users[1].name}, Your id is {users[1].id} */}
              {users.map(user => (
                <li>
                  User id = {user.id} || User name = {user.name}
                </li>
              ))}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default GrandChild;
