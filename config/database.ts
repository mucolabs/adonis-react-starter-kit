import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

import env from '#start/env'

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: app.makePath(env.get('DB_FILENAME')),
      },
      pool: {
        afterCreate(conn, done) {
          conn.pragma('busy_timeout = 5000;')
          conn.pragma('cache_size = -20000;')
          conn.pragma('foreign_keys = ON;')
          conn.pragma('incremental_vacuum;')
          conn.pragma('mmap_size = 2147483648;')
          conn.pragma('temp_store = MEMORY;')
          conn.pragma('synchronous = NORMAL;')

          done()
        },
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
