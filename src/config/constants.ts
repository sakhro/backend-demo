import * as fs from 'fs';
import * as path from 'path';

const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_DEV = process.env.NODE_ENV === 'development'

export const SOURCE_DIR = IS_PROD ? "build" : "src"
export const APP_DIRECTORY_PATH = path.resolve(fs.realpathSync(process.cwd()), SOURCE_DIR);

export const PORT = process.env.PORT || 4000
