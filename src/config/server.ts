import { GraphQLServer } from 'graphql-yoga'

import { schema } from '$config/schema'
import { getContext as context } from '$config/context'

import { getMiddlewares } from '$helpers/getMiddlewares'

const middlewares = getMiddlewares()

const server = new GraphQLServer({
  schema,
  context,
  middlewares,
})

export {
  server
}