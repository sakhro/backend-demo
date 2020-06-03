import { rule } from 'graphql-shield'

export const isAuthenticated = rule({ cache: "strict" })((_, __, ctx) => {
  if (!ctx.user) {
    return new Error("You need to be authenticated")
  }

  return true
})
