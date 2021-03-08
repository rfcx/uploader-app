import { createRxDatabase, addRxPlugin } from 'rxdb'
import * as adapter from 'pouchdb-adapter-idb'
import collections from './collections'

addRxPlugin(adapter)

export default async function () {
  const db = await createRxDatabase({
    name: 'db',
    adapter: 'idb'
  })
  db.addCollections(collections)
  return db
}
