import { FieldResolver } from '@nexus/schema';

export const updateStopsOrder: FieldResolver<
  "Mutation",
  "updateStopsOrder"
> = async (_, args, ctx) => {
  const stops = Promise.all(args.data.map(async stop =>
    ctx.prisma.stop
      .update({
        where: { id: stop.id },
        data: {
          order: stop.order
        }
      })
  ))

  return stops
}
