import MainLayout from "../../layouts/MainLayout";
import React, { PureComponent } from "react";
import { login } from "../../helpers/firebase";
import Router from "next/router";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  login = event => {
    login(this.state.email, this.state.password)
      .then(user => Router.push("/admin"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <MainLayout>
        <form>
          <div
            style={{
              textAlign: "center",
              padding: 20
            }}
          >
            <label>
              Email:
              <input
                type="text"
                name="email"
                onChange={event => this.setState({ email: event.target.value })}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </label>
            <br />
            <input type="button" value="Login" onClick={this.login} />
          </div>
        </form>
      </MainLayout>
    );
  }
}
