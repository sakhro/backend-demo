import { objectType } from '@nexus/schema'

const Bus = objectType({
  name: 'Bus',
  definition(t) {
    t.model.id()

    t.model.companyId()

    t.model.seatsQty()
    t.model.registrationNumber()
    t.model.brand()
    t.model.company()
    t.model.model()
  },
})

export {
  Bus,
}