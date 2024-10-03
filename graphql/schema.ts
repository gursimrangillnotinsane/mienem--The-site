import { gql } from '@apollo/client'

const typeDefs = gql`

type Query {
    entries: [Product!]!
}


type Product {
    id:ID
    title:String
    price:Int
    categoryId:Int
    image:String
  }
`

export default typeDefs