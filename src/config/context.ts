import { ContextParameters } from 'graphql-yoga/dist/types'

import { getUser } from '$helpers/getUser'

import { prisma, PrismaClient } from '$services/prisma'
import { pubsub, PubSub } from '$services/pubsub'

interface IContext {
  prisma: PrismaClient
  pubsub: PubSub
  headers: ContextParameters["request"]["headers"]
  user: any // TODO: set User type
}

async function getContext(params: ContextParameters): Promise<IContext> {
  const user = await getUser(params)
  const headers = params.request?.headers

  return ({
    user,
    prisma,
    pubsub,
    headers,
  })
}

export {
  getContext,
  IContext
}