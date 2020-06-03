import { objectType } from '@nexus/schema'

export const Passenger = objectType({
  name: 'Passenger',
  definition(t) {
    t.model.id()

    t.model.lastName()
    t.model.firstName()
    t.model.phone()
    t.model.email()

    t.model.orders()
    t.model.inBlacklist({
      filtering: true
    })
    t.model.companies({
      filtering: true
    })
  },
})
