export interface CacheStore {
  delete: (key: string) => void
  insert: (ley: string, value: any) => void
}
