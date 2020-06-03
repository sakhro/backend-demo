import { and, or } from "graphql-shield";

import { isAuthenticated } from '$rules/isAuthenticated'
import { isDispatcher } from "$rules/isDispatcher";
import { isAdmin } from "$rules/isAdmin";

import { getMiddleware } from "$helpers/getMiddleware";

export const passengerPermissions = getMiddleware({
  Passenger: isAuthenticated,
  Mutation: {
    updatePassenger: and(isAuthenticated, or(isAdmin, isDispatcher)),
  }
});
