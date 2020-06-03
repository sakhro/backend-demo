import { RouteByDate, StopByDate, SourceByDate, Carriage } from "@prisma/client";

interface IUserIdToken {
  userId: string
}

interface ISendGridMsg {
  to: string
  from: string
  subject: string
  html: string
}

const enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED",
}

interface IUpdateRouteCarriagesPublishPayload {
  routeName: string
  companyId: string
  mutationType: MutationType
  routeCarriages: Carriage[]
}

interface IDateRoutePublishPayload {
  routeId: string
  departureDate: Date
}

interface IUpdatedRouteByDatePublishPayload extends IDateRoutePublishPayload {
  routeByDate: RouteByDate
}

interface IUpdatedStopByDatePublishPayload extends IDateRoutePublishPayload {
  stopByDate: StopByDate
}

interface IUpdatedSourceByDatePublishPayload extends IDateRoutePublishPayload {
  sourceByDate: SourceByDate
}

export {
  ISendGridMsg,
  MutationType,
  IUserIdToken,
  IUpdatedStopByDatePublishPayload,
  IUpdatedRouteByDatePublishPayload,
  IUpdatedSourceByDatePublishPayload,
  IUpdateRouteCarriagesPublishPayload,
}