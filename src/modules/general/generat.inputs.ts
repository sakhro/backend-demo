import { inputObjectType } from '@nexus/schema'

const DateRouteSubscriptionWhereInput = inputObjectType({
  name: "DateRouteSubscriptionWhereInput",
  definition(t) {
    t.field("departureDate", {
      type: "DateTime",
      required: true
    })
    t.field("route", {
      type: "RouteWhereUniqueInput",
      required: true
    })
  }
})

export {
  DateRouteSubscriptionWhereInput
}