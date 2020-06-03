import { subscriptionField, arg } from '@nexus/schema'

import * as Subscribers from './stop.subscribers'

import { STOP_BY_DATE } from "$constants/strings"

import { getSubscriptionResolver } from "$helpers/getSubscriptionResolver"

const StopByDateSubscription = subscriptionField(STOP_BY_DATE, {
  type: "StopByDate",
  args: {
    where: arg({
      type: "DateRouteSubscriptionWhereInput",
      required: true
    })
  },
  subscribe: Subscribers.stopByDate,
  resolve: getSubscriptionResolver(STOP_BY_DATE),
})

export {
  StopByDateSubscription,
}