import { gql, useQuery } from '@apollo/client';

export const GET_PIPES = gql`
    query GetPipes($id: ID!) {
        organization(id: $id) {
            id,
            pipes {
                id,
                name
            }
        }
    }
`;