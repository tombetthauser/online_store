import gql from "graphql-tag";

const FETCH_PRODUCTS = gql`
  {
    products {
      _id
      name
    }
  }
`;

export { FETCH_PRODUCTS };