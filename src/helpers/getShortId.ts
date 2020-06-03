import * as shortid from "shortid"

function getShortId() {
  return shortid.generate()
}

export {
  getShortId
}
