import { Draft, produce } from 'immer'
import mpx from '@mpxjs/core'

export const $Update = <T>(instance: T, updater: (draft: Draft<T>) => void) => {
  return (instance = produce(instance, updater))
}

export const $UpdateListItem = <T>(list: T[], index: number, updater: (draft: Draft<T>) => void) => {
  const newItem = produce(list[index], updater)
  mpx.set(list, index, newItem)
  return newItem
}
