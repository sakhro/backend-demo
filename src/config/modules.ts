import * as moduleAlias from 'module-alias'

import { APP_DIRECTORY_PATH } from './constants'

moduleAlias.addAliases({
  "$services": `${APP_DIRECTORY_PATH}/services`,
  "$config": `${APP_DIRECTORY_PATH}/config`,
  "$constants": `${APP_DIRECTORY_PATH}/constants`,
  "$generated": `${APP_DIRECTORY_PATH}/generated`,
  "$helpers": `${APP_DIRECTORY_PATH}/helpers`,
  "$modules": `${APP_DIRECTORY_PATH}/modules`,
  "$rules": `${APP_DIRECTORY_PATH}/rules`,
  "$types": `${APP_DIRECTORY_PATH}/types`,
})
