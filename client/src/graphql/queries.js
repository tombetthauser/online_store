import gql from "graphql-tag";

const FETCH_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
    }
  }
`;

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
`

export { FETCH_PRODUCTS, IS_LOGGED_IN };