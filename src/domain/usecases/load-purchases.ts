import { PurchaseModel } from '@/domain/models'

export interface LoadPurchases {
  loadAll: () => Promise<Array<LoadPurchases.Result>>
}

export module LoadPurchases {
  export type Result = PurchaseModel
}
