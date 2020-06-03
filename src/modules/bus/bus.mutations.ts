import { extendType } from '@nexus/schema'

export const BusMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneBus({
      alias: "createBus"
    })
    t.crud.updateOneBus({
      alias: "updateBus"
    })
    t.crud.deleteOneBus({
      alias: "deleteBus"
    })
  }
})
