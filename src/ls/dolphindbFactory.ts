import { ddbConfig } from "./dolphindbTypes";
import {DDB} from 'dolphindb';//import from dolphindb lib

export async function createDDBClient(configOptions: ddbConfig) : Promise<DDB>{
    const urladdress = `ws://${configOptions.URL}:${configOptions.port}`;
    const ddb = new DDB(urladdress,
        {autologin: configOptions.autolog,
        username: configOptions.username,
        password: configOptions.password,
        python: configOptions.py,
        streaming: configOptions.stream,}
    );
    await ddb.connect();
    return ddb;
}