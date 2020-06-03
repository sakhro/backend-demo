import { rule } from 'graphql-shield'

import { UserRole } from '@prisma/client';

export const isAdmin = rule({ cache: "contextual" })(async (_, __, ctx) => {
  const isAdmin = ctx.user?.role === UserRole.Admin || ctx.user?.role === UserRole.Developer;

  if (!isAdmin) {
    return new Error("Only admin have an access")
  }

  return true
});
