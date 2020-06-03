// We need this when we generate nexsus types
import './modules';

import * as path from 'path'
import { makeSchema } from '@nexus/schema';
import { nexusPrismaPlugin } from 'nexus-prisma'

import { getSchemaTypes } from '../helpers/getSchemaTypes'

const types = getSchemaTypes()
const plugins = [nexusPrismaPlugin()]
const outputs = {
  typegen: path.join(__dirname, '../generated/nexus.ts'),
  schema: path.join(__dirname, '../generated/schema.graphql'),
}
const typegenAutoConfig = {
  contextType: 'Context.IContext',
  sources: [
    {
      source: '@prisma/client',
      alias: 'photon',
    },
    {
      source: require.resolve('./context'),
      alias: 'Context',
    },
  ],
}

const schema = makeSchema({
  types,
  plugins,
  outputs,
  typegenAutoConfig,
})

export {
  schema
}