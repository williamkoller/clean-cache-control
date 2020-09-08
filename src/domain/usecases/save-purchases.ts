export interface SavePurchases {
  save: (purchases: SavePurchases.Params[]) => Promise<void>
}

export module SavePurchases {
  export type Params = {
    id: string
    date: Date
    value: number
  }
}
