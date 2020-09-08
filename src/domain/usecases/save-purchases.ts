import { PurchaseModel } from '@/domain/models'

export interface SavePurchases {
  save: (purchases: SavePurchases.Params[]) => Promise<void>
}

export module SavePurchases {
  export type Params = PurchaseModel
}
