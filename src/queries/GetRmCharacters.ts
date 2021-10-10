import { gql } from "@apollo/client";

export const GET_RM_CHARACTERS = gql`
  query getRMcharacters($name: String!) {
    characters(filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;
