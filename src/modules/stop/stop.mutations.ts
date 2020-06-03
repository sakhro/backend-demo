import { arg, extendType } from '@nexus/schema'

import { deleteStop } from './resolvers/deleteStop.resolver'
import { upsertStopByDate } from './resolvers/upsertStopByDate.resolver'
import { updateStopsOrder } from './resolvers/updateStopsOrder.resolver'

export const StopMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneStop({
      alias: "createStop"
    })
    t.crud.updateOneStop({
      alias: "updateStop"
    })

    t.field("deleteStop", {
      type: "Stop",
      args: {
        where: arg({
          type: "StopWhereUniqueInput",
          required: true
        }),
      },
      resolve: deleteStop
    })

    // Don't know if it's ok, but to get create/update input types we need to do this
    t.crud.upsertOneStopByDate({
      alias: "upsertStopByDate"
    })
    t.field("upsertStopByDate", {
      type: "StopByDate",
      args: {
        where: arg({
          type: "StopByDateWhereUniqueInput",
          required: true
        }),
        create: arg({
          type: "StopByDateCreateInput",
          required: true
        }),
        update: arg({
          type: "StopByDateUpdateInput",
          required: true
        }),
      },
      resolve: upsertStopByDate
    })

    t.field("updateStopsOrder", {
      type: "Stop",
      list: true,
      args: {
        data: arg({
          type: "StopOrderDataInput",
          list: true,
          required: true
        }),
      },
      resolve: updateStopsOrder
    })
  }
})
