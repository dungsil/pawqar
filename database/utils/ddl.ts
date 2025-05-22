import { sql } from 'drizzle-orm'

/** 현재 시각을 리턴하는 SQL 표현식 */
export const defaultNow = () => sql`(CURRENT_TIMESTAMP)`
