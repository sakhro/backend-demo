import { enumType } from '@nexus/schema';

const MutationType = enumType({
  name: "MutationType",
  members: [
    "CREATED",
    "UPDATED",
    "DELETED",
  ],
})

export {
  MutationType
}
