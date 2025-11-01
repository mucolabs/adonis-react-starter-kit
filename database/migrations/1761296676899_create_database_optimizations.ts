import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  static disableTransactions = true

  async up() {
    await this.db.rawQuery('PRAGMA page_size = 32768;')
    await this.db.rawQuery('PRAGMA auto_vacuum = incremental;')
    await this.db.rawQuery('VACUUM;')
    await this.db.rawQuery('PRAGMA journal_mode = WAL;')
  }
}
