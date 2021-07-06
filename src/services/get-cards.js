import { gql, useQuery } from '@apollo/client';

export const GET_CARDS = gql`
    query GetCards($pipe_id: ID!, $first: Int, $after: String) {
        cards(
            pipe_id: $pipe_id, 
            first: $first, 
            after: $after
        ) {
            edges {
                node {
                    id,
                    title
                }
            },
            pageInfo {
                endCursor,
                hasNextPage,
                hasPreviousPage,
                startCursor
            }
        }
    }
`;