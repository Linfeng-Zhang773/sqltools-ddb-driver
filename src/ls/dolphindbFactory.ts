import { ddbConfig } from "./dolphindbTypes";//导入链接配置接口
import {DDB} from 'dolphindb'//导入API


/**
 * 创建并返回一个 DolphinDB 客户端实例
 * @param configOptions 配置选项，包括 URL、端口、用户名、密码等
 * @returns 一个 Promise，解析为 DolphinDB 客户端实例
 */
export async function createDDBClient(configOptions: ddbConfig) : Promise<DDB>{
    const urladdress = `ws://${configOptions.URL}:${configOptions.port}`;//模板字符串合并url
    const ddb = new DDB(urladdress,
        {autologin: configOptions.autolog,
        username: configOptions.username,
        password: configOptions.password,
        python: configOptions.py,
        streaming: configOptions.stream}
    );
    await ddb.connect();//建立链接
    return ddb;    
}

export const DDBqueryFactory = 