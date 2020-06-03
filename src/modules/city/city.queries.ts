import { extendType } from '@nexus/schema'

export const CityQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cities()
  },
})
