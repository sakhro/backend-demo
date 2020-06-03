import { FieldResolver } from '@nexus/schema'

import { handlePubsubPublish } from "$helpers/handlePubsubPublish"

import { UPDATED_STOP_BY_DATE } from "$constants/strings"

import { IUpdatedStopByDatePublishPayload } from "$types/common"

const upsertStopByDate: FieldResolver<
  "Mutation",
  "upsertStopByDate"
> = async (_, args, ctx) => {
  const upsertedStopByDate = await ctx.prisma.stopByDate
    .upsert(args)

  const stopByDate = await ctx.prisma.stopByDate
    .findOne({
      where: {
        id: args.where.id
      },
      select: {
        date: true,
        stop: true
      }
    })

  const stopId = stopByDate?.stop.id || args.create.stop.connect?.id

  const stopRoute = await ctx.prisma.stop
    .findOne({
      where: {
        id: stopId
      },
    })
    .route({
      select: {
        id: true
      }
    })

  const routeId = stopRoute?.id as string
  const departureDate = stopByDate?.date || args.create.date as Date

  handlePubsubPublish<IUpdatedStopByDatePublishPayload>(UPDATED_STOP_BY_DATE, {
    routeId,
    departureDate,
    stopByDate: upsertedStopByDate
  })

  return upsertedStopByDate
}

export {
  upsertStopByDate
}
