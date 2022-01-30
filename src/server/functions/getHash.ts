import { IHash } from "../domain/IHash";
import Hash from "../models/hash";

 export const getHash = async (key: string): Promise<IHash | null> => {
    return await Hash.findOne({ key });
}