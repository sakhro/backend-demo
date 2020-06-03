import { extendType } from '@nexus/schema'

export const PassengerQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.passenger()
    t.crud.passengers({
      filtering: true
    })
  }
})
