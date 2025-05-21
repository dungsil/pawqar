import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { defaultNow } from '../utils/ddl'

/** 사용자 테이블 */
export const users = sqliteTable('users', {
  /** 사용자 식별자 */
  id: int('id').primaryKey({ autoIncrement: true, onConflict: 'fail' }),

  /** 사용자 계정 */
  username: text('username', { length: 20 }).notNull().unique(),

  /** 사용자 비밀번호 */
  password: text('password').notNull(),

  /** 생성일시 */
  joinedAt: int('joined_at', { mode: 'timestamp' }).notNull().default(defaultNow()),
})
