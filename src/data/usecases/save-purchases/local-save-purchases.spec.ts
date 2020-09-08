import { mockPurchases, CacheStoreSpy } from '@/data/tests'
import { LocalSavePurchases } from '@/data/usecases'

type SutTypes = {
  sut: LocalSavePurchases
  cacheStore: CacheStoreSpy
}

const makeSut = (): SutTypes => {
  const cacheStore = new CacheStoreSpy()
  const sut = new LocalSavePurchases(cacheStore)
  return {
    sut,
    cacheStore
  }
}

describe('LocalSavePurchases', () => {
  test('Should not delete or insert cache on sut.init', () => {
    const { cacheStore } = makeSut()
    expect(cacheStore.messages).toEqual([])
  })

  test('Should not insert new Cache delete fails', async () => {
    const { sut, cacheStore } = makeSut()
    cacheStore.simulateDeleteError()
    const promise = sut.save(mockPurchases())
    expect(cacheStore.messages).toEqual([ CacheStoreSpy.Message.delete ])
    await expect(promise).rejects.toThrow()
  })

  test('Should insert new Cache if delete succeeds', async () => {
    const { sut, cacheStore } = makeSut()
    const purchases = mockPurchases()
    await sut.save(purchases)
    expect(cacheStore.messages).toEqual([ CacheStoreSpy.Message.delete, CacheStoreSpy.Message.insert ])
    expect(cacheStore.deleteKey).toBe('purchases')
    expect(cacheStore.insertKey).toBe('purchases')
    expect(cacheStore.insertValues).toEqual(purchases)
  })

  test('Should throw if insert throws', async () => {
    const { sut, cacheStore } = makeSut()
    cacheStore.simulateInsertError()
    const promise = sut.save(mockPurchases())
    expect(cacheStore.messages).toEqual([ CacheStoreSpy.Message.delete, CacheStoreSpy.Message.insert ])
    await expect(promise).rejects.toThrow()
  })
})
