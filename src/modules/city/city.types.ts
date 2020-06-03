import { objectType, enumType } from '@nexus/schema'

const CountryCode = enumType({
  name: "CountryCode",
  members: [
    "UA",
    "PL",
    "CZ",
    "IT"
  ],
})

const City = objectType({
  name: 'City',
  definition(t) {
    t.model.id()

    t.model.name()
    t.model.country()
  },
})

export {
  City,
  CountryCode
}
