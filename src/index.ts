// tslint:disable-next-line: no-var-requires
require("dotenv").config();

import './config/modules';
import './generated/nexus'
import { server } from "./config/server";

import { PORT } from './config/constants';

const options = {
  port: PORT,
}

server.start(options, ({ port }) => {
  console.log(`The server is up on http://localhost:${port}`);
})
