import * as glob from "glob"

import { APP_DIRECTORY_PATH, SOURCE_DIR } from "$config/constants";

const middlewarePathes = glob.sync(`${SOURCE_DIR}/**/*.middleware.{js,ts}`)

export const getMiddlewares = () => {
  const modules = middlewarePathes.map((path: string) => {
    const splitedPath = path.split('/')
    splitedPath.shift()
    return require(`${APP_DIRECTORY_PATH}/${splitedPath.join('/')}`)
  })

  return modules.reduce((acc, item) => ([
    ...acc,
    ...Object.values(item)
  ]), [])
}
