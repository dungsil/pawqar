import * as users from './schema/user'

export const schema = {
  ...users,
}

export type DatabaseSchema = typeof schema
