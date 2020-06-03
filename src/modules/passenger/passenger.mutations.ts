import { extendType } from '@nexus/schema'

export const PassengerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.updateOnePassenger({
      alias: "updatePassenger"
    })
  }
})
