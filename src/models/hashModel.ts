import { Schema, model } from 'mongoose';

interface Hash {
    key: string;
    value: string;
}

const HashSchema = new Schema<Hash>({
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: false },
});

export const Hash = model('Hash', HashSchema);
