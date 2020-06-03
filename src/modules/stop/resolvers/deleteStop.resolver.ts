import { FieldResolver } from '@nexus/schema';

import { prisma } from '$services/prisma';

import { equalsTo } from '$helpers/equalsTo';

const deleteStop: FieldResolver<
  "Mutation",
  "deleteStop"
> = async (_, args) => {
  if (!args.where.id) {
    throw new Error("Please provide stop id to delete")
  }

  await deletePrices(args.where.id)
  await deleteSegments(args.where.id)

  return handleStopDelete(args.where.id)
}

async function deletePrices(stopId: string) {
  return prisma.price
    .deleteMany({
      where: {
        segment: {
          OR: [
            { arrivalStopId: equalsTo(stopId) },
            { departureStopId: equalsTo(stopId) },
          ]
        }
      }
    })
}

async function deleteSegments(stopId: string) {
  return prisma.segment
    .deleteMany({
      where: {
        OR: [
          { arrivalStopId: equalsTo(stopId) },
          { departureStopId: equalsTo(stopId) },
        ]
      }
    })
}

async function handleStopDelete(stopId: string) {
  return prisma.stop
    .delete({
      where: {
        id: stopId
      }
    })
}

export {
  deleteStop
}