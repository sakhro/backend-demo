function getSubscriptionResolver(prop: string): any {
  return (payload: any) => {
    return payload[prop]
  }
}

export {
  getSubscriptionResolver
}
