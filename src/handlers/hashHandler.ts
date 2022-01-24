import { Hash } from '../models/hashModel';

export const GetHash = async (key: string) => {
    const response = await Hash.findOne({ key });
    if (!response) {
        throw new Error(`Data for key ${ key } not found`);
    }
    return response.value;
}

export const SaveHash = async (key: string, value: string) => {
    const hash = new Hash({key, value});
    hash.save();
}
