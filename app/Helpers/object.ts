type Key = string | number | symbol

type ObjectType <T> = Record<Key, T[keyof T]>

export const getObjectKeys = <T extends ObjectType<T>> (obj: T): Array<keyof T> => {
  return Object.keys(obj)
}

export const getObjectEntries = <T extends ObjectType<T>> (obj: T): Array<[keyof T, T[keyof T]]> => {
  return Object.entries(obj)
}
