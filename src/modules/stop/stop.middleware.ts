import { and, or } from "graphql-shield";

import { isAdmin } from "$rules/isAdmin";
import { isDispatcher } from "$rules/isDispatcher";
import { isAuthenticated } from '$rules/isAuthenticated'

import { getMiddleware } from "$helpers/getMiddleware";

export const stopPermissions = getMiddleware({
  Stop: {
    isDisabled: isAuthenticated,
    order: isAuthenticated,
    byDates: isAuthenticated,
  },
  Mutation: {
    createStop: and(isAuthenticated, isAdmin),
    updateStop: and(isAuthenticated, isAdmin),
    updateStopsOrder: and(isAuthenticated, isAdmin),
    upsertStopByDate: and(isAuthenticated, or(isAdmin, isDispatcher)),
  }
});
