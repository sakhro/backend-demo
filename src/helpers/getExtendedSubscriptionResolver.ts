function getExtendedSubscriptionResolver(prop: string): any {
  return (payload: any) => {
    return ({
      mutationType: payload.mutationType,
      payload: payload[prop]
    })
  }
}

export {
  getExtendedSubscriptionResolver
}
