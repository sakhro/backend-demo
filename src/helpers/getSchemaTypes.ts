import * as glob from "glob"
import { flatten, map } from "ramda";

import { APP_DIRECTORY_PATH, SOURCE_DIR } from "../config/constants";

const resolversTypesPaths = glob.sync(`${SOURCE_DIR}/**/*.types.{js,ts}`)
const resolversInputsPaths = glob.sync(`${SOURCE_DIR}/**/*.inputs.{js,ts}`)
const resolversQueriesPaths = glob.sync(`${SOURCE_DIR}/**/*.queries.{js,ts}`)
const resolversMutationsPaths = glob.sync(`${SOURCE_DIR}/**/*.mutations.{js,ts}`)
const resolversSubscriptionsPaths = glob.sync(`${SOURCE_DIR}/**/*.subscriptions.{js,ts}`)

const resolversPaths = [
  resolversTypesPaths,
  resolversInputsPaths,
  resolversQueriesPaths,
  resolversMutationsPaths,
  resolversSubscriptionsPaths,
]

function getSchemaTypes() {
  const handlePath = map((path: string) => {
    const splitedPath = path.split('/')
    splitedPath.shift()
    return require(`${APP_DIRECTORY_PATH}/${splitedPath.join('/')}`)
  })

  const schemaTypes = map(handlePath, resolversPaths)

  return flatten(schemaTypes)
}

export {
  getSchemaTypes
}
