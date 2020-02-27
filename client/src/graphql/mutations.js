import gql from "graphql-tag";

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

const REGISTER_USER = gql`
  mutation RegisterUser($name: String, $email: String, $password: String) {
    register(name: $name, email: $email, password: $password) {
      token
      loggedIn
    }
  }
`;

export { LOGIN_USER, VERIFY_USER, REGISTER_USER };