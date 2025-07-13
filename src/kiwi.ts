import type { TReceipt } from './shared/types/TReceipt'

type TReceiptData = {
  date: string
  receipt: TReceipt
}

export default class Kiwi {
  private static readonly stage = 'https://kiwi-live.ngrok.app/'
  private static readonly live = 'https://kiwi-live.ngrok.app/'

  public static async getReceipt(id: number, env: string): Promise<TReceiptData | null> {
    const url = `${env === 'stage' ? this.stage : this.live}api/receipt?id=${id}`

    return fetch(url).then((res) => {
      if (res.ok) return res.json()
      return null
    })
  }
}
