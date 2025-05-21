import process from 'node:process'
import { config as defineDotenv } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

defineDotenv({
  path: './.env.dev',
})

export default defineConfig({
  schema: './database/schema/',
  out: './database/migrations/',

  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.PAWQAR_DB_URL!,
  },
})
