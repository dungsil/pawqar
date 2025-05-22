import type { DatabaseSchema } from '#database'
import type { Client as LibSQLClient } from '@libsql/core/api'
import type { LibSQLDatabase } from 'drizzle-orm/libsql'
import { schema } from '#database'
import { drizzle as createDrizzle } from 'drizzle-orm/libsql'

let drizzle: LibSQLDatabase<DatabaseSchema> | null = null

/** Drizzle 클라이언트를 반환합니다. */
export function useDrizzle (): LibSQLDatabase<DatabaseSchema> {
  if (drizzle == null) {
    const client = useDatabase() as unknown as LibSQLClient

    drizzle = createDrizzle({
      client,
      schema,
      casing: 'snake_case',
    })
  }

  return drizzle
}
