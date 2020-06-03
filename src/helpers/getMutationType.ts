import { MutationType } from "$types/common"

function getMutationType(action: string) {
  const [mutationType] = action.split("_")

  return mutationType as MutationType
}

export {
  getMutationType
}
