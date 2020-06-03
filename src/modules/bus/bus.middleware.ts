import { and } from "graphql-shield";

import { isAdmin } from "$rules/isAdmin";
import { isAuthenticated } from '$rules/isAuthenticated'

import { getMiddleware } from "$helpers/getMiddleware";

export const busMiddleware = getMiddleware({
  Bus: isAuthenticated,
  Mutation: {
    createBus: and(isAuthenticated, isAdmin),
    updateBus: and(isAuthenticated, isAdmin),
    deleteBus: and(isAuthenticated, isAdmin)
  }
});

