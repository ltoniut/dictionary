import Database from '../dbConfigs';
import { Schema } from 'mongoose';
import { IHash } from '../domain/IHash';

const {
  mongo: { model },
} = Database;

const HashSchema: Schema<IHash> = new Schema<IHash>({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true },
});

const Hash = model('hash', HashSchema);
Hash.createCollection;

export default model<IHash>('hash', HashSchema);
