import { Query } from "react-apollo";
import { IS_LOGGED_IN } from "../graphql/queries";
import { ApolloConsumer } from "react-apollo";
import { Link, Redirect } from "react-router-dom";
import React from "react";
import { browserHistory } from 'react-router';

const Nav = props => {
  return (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            if (data.isLoggedIn) {
              return (
                <button
                  onClick={e => {
                    e.preventDefault();
                    localStorage.removeItem("auth-token");
                    client.writeData({ data: { isLoggedIn: false } });
                    props.history.push("/");
                  }}
                >
                  Logout
                </button>
              );
            } else {
              return (
                <div>
                  <Link to="/login">Login</Link>
                </div>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  );
};

export default Nav;
// export default withRouter(Nav);