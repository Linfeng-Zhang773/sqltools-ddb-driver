import { createDDBClient } from './dolphindbFactory';
import {DDB} from 'dolphindb'//import from dolphindb lib
import {ddbConfig } from './dolphindbTypes';
import AbstractDriver from '@sqltools/base-driver';
import { IConnection,LSIConnection } from '@sqltools/types';
import queries from './queries';
import { NSDatabase } from '@sqltools/types';
import { IConnectionDriver, MConnectionExplorer, ContextValue, Arg0 } from '@sqltools/types';
import { v4 as generateId } from 'uuid';
import keywordsCompletion from './keyword';





//dolphin db 驱动类
export default class dolphindbDriver extends AbstractDriver<DDB,ddbConfig> implements IConnectionDriver
{
   //初始化Constructor
    constructor(credentails:IConnection<ddbConfig>, getWorkspaceFolders: LSIConnection['workspace']['getWorkspaceFolders'])
    {
        super(credentails,getWorkspaceFolders);
        this.connection = null;
    }

    queries = queries;

   
   
// 打开数据库连接函数，包括错误处理逻辑
public async open() {
    // 如果已经存在连接，直接返回该连接
    if (this.connection) {
        return this.connection;
    }

    try {
        // 构建连接选项
        const connectOptions: ddbConfig = {
            URL: this.credentials.server,
            port: this.credentials.port,
            autolog: true, // 是否自动登录，应设为可选
            username: this.credentials.username,
            password: this.credentials.password,
            py: false, // 是否启用 Python，应设为可选
            stream: undefined, // 流选项，应设为可选
        };

        // 创建并返回 DolphinDB 客户端连接
        this.connection = createDDBClient(connectOptions);
        return this.connection;
    } catch (error) {
        // 连接失败时，打印错误信息并抛出错误
        console.error('Failed to open connection', error);
        throw new Error('Failed to open connection');
    }
}

// 断开数据库连接函数，包括错误处理逻辑
public async close() {
    // 如果没有连接，直接返回一个已解决的 Promise
    if (!this.connection) {
        return Promise.resolve();
    }

    try {
        // 调用断开连接方法，并返回断开连接的 Promise
        return (await this.connection).disconnect();
    } catch (error) {
        // 断开连接失败时，打印错误信息并抛出错误
        console.error('Failed to disconnect', error);
        throw new Error('Failed to disconnect');
    }
}
    
//测试数据库链接函数
    public async testConnection() 
    {
        await this.open();
        await this.query('Select 1',{});
        await this.close();
    }


    public query: (typeof AbstractDriver)['prototype']['query'] = async (query, opt = {}) => 
    {
            return 
    }

  
    public async getChildrenForItem({ item, parent }: Arg0<IConnectionDriver['getChildrenForItem']>) {}

    private async getChildrenForGroup({ parent, item }: Arg0<IConnectionDriver['getChildrenForItem']>) {}

    public async searchItems(itemType: ContextValue, search: string, _extraParams: any = {}): Promise<NSDatabase.SearchableItem[]> {}

    private completionsCache: { [w: string]: NSDatabase.IStaticCompletion } = null;
    public getStaticCompletions = async () => {}
 


}

























