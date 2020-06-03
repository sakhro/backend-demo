import { pubsub } from "$services/pubsub"

function handlePubsubPublish<T>(triggerName: string, payload: T) {
  pubsub.publish(triggerName, payload)
}

export {
  handlePubsubPublish
}