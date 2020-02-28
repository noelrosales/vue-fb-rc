import * as firebase from 'firebase/app'
import 'firebase/remote-config'

export default async function (config) {
  indexedDB.deleteDatabase('firebase_remote_config')
  const remoteConfig = firebase.remoteConfig()

  await remoteConfig.fetchAndActivate()

  const collection = remoteConfig.getValue(config)
  return JSON.parse(collection._value)[config]
}
