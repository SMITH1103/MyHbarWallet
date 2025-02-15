import axios from "axios";

import { useStore } from "../../../../store";
import { CryptoTransfer } from "../../../../domain/CryptoTransfer";

export async function getAccountRecords(): Promise<CryptoTransfer[] | undefined>{
    const store = useStore();

    const resp = await axios.get(`https://v2.api.${store.network}.kabuto.sh/transaction?filter[entityId]=${store.accountId}`)
        .then(({ data }) => data)
        .catch((error: Error)=>{
            throw error;
        });
    
    return resp.data as CryptoTransfer[];
}