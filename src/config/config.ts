import dotenv from 'dotenv'
const envFound = dotenv.config()
if (envFound.error !== undefined) throw new Error("⚠️  Couldn't find .env file  ⚠️")
export const port = process.env.PORT ?? ''
export const environment = process.env.NODE_ENVI ?? ''
export const name = process.env.NAME_API ?? ''
