import Database from "../dbConfigs";
import { Schema } from "mongoose";
import { IHash } from "../domain/IHash";

const {
  mongo: { model },
} = Database;

const HashSchema: Schema<IHash> = new Schema<IHash>({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

export default model<IHash>("Hash", HashSchema);
