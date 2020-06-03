import { objectType, enumType } from '@nexus/schema'

const CurrencyCode = enumType({
  name: "CurrencyCode",
  members: [
    "UAH",
    "PLN",
    "CZK",
    "EUR",
  ],
})

const Price = objectType({
  name: 'Price',
  definition(t) {
    t.model.id()
    t.model.amount()
    t.model.currency()
  },
})

export {
  Price,
  CurrencyCode
}
