import {Document} from "mongoose";

export interface IHash extends Document{
    key: string;
    value: string;
}
