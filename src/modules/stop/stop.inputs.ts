import { inputObjectType } from '@nexus/schema'

const StopOrderDataInput = inputObjectType({
  name: 'StopOrderDataInput',
  definition(t) {
    t.string("id", { required: true })
    t.int("order", { required: true })
  }
})

export {
  StopOrderDataInput,
}
