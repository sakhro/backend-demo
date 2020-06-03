const dayjs = require("dayjs")

import { withFilter } from "graphql-yoga"
import { ResolverFn, FilterFn } from "graphql-subscriptions/dist/with-filter"

import { UPDATED_STOP_BY_DATE } from "$constants/strings"

const stopByDateResolverHandler: ResolverFn = (_, __, ctx) => {
  return ctx.pubsub.asyncIterator(UPDATED_STOP_BY_DATE)
}

const stopByDateFilterHandler: FilterFn = (payload, args) => {
  const isSameRoute = payload.routeId === args.where.route.id
  const isSameDate = dayjs(payload.departureDate)
    .isSame(args.where.departureDate)

  return isSameRoute && isSameDate
}

const stopByDate = withFilter(
  stopByDateResolverHandler,
  stopByDateFilterHandler
)

export {
  stopByDate,
}
