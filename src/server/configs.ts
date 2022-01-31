import {IConfigs} from './domain/IConfigs';
import * as config from '../../config/config';

export const configs: IConfigs = {
    mongodb: {
        url: config.DATABASE_URL,
        port: config.PORT,
        username: config.USERNAME,
        password: config.PASSWORD,
        collection: config.COLLECTION,
    }
}
