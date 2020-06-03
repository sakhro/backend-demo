import { objectType } from '@nexus/schema'

const Stop = objectType({
  name: 'Stop',
  definition(t) {
    t.model.id()

    t.model.arrivalTime()
    t.model.departureTime()
    t.model.place()
    t.model.platform()
    t.model.isDisabled()
    t.model.order()

    t.model.cityId()
    t.model.routeId()

    t.model.city()
    t.model.byDates({
      filtering: true
    })
  },
})

const StopByDate = objectType({
  name: 'StopByDate',
  definition(t) {
    t.model.id()

    t.model.stopId()

    t.model.date()
    t.model.isDisabled()
    t.model.stop()
  },
})

export {
  Stop,
  StopByDate,
}