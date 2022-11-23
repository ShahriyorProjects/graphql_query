import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`

    query{
        characters {
            results {
                id
                name
                image
            }
        }
    }
`



export default function useCharakters() {

    const { data, loading, error} = useQuery(GET_CHARACTERS);
    

  return {
    error,
    data,
    loading
  }
}
