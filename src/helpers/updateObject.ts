export const updateObject = <T, K>(
  obj: T,
  newProps: K
) => ({
  ...obj,
  ...newProps
})
