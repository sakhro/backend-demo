import { shield, IRules } from "graphql-shield";
import { IOptionsConstructor } from "graphql-shield/dist/types";

export function getMiddleware(ruleTree: IRules, options?: IOptionsConstructor) {
  return shield(ruleTree, {
    allowExternalErrors: true,
    ...options
  });
}