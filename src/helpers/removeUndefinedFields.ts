export const removeUndefinedFields = (obj: any) => {
  const newObj = { ...obj }

  Object.keys(newObj).forEach(key => newObj[key] === undefined && delete newObj[key])

  return newObj
}
