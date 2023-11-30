import type { TReceipt } from "./shared/types/TReceipt";

type TReceiptData = {
    date: string;
    receipt: TReceipt
}

export default class Kiwi {
    private static readonly API = 'https://kiwi-live-ff816c7efb64.herokuapp.com/api/';

    public static async getReceipt(id: number): Promise<TReceiptData | null> {
        return fetch(this.API + 'receipt?id=' + id)
                .then(res => {
                    if (res.ok) return res.json();
                    return null;
                });
    }
}