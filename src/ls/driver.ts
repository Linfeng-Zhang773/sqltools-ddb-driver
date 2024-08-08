import { createDDBClient } from './dolphindbFactory';
// import {DDB} from 'dolphindb';//import from dolphindb lib
import {ddbConfig } from './dolphindbTypes';
import AbstractDriver from '@sqltools/base-driver';
import { IConnection,LSIConnection } from '@sqltools/types';
import queries from './queries';
import { NSDatabase } from '@sqltools/types';
import { IConnectionDriver, MConnectionExplorer, ContextValue, Arg0 } from '@sqltools/types';
import { v4 as generateId } from 'uuid';
import keywordsCompletion from './keyword';
import { promises } from 'fs';




//dolphindb Driver class
export default class dolphindbDriver extends AbstractDriver<any,ddbConfig> implements IConnectionDriver
{
   //初始化链接Constructor
    constructor(credentails:IConnection<ddbConfig>, getWorkspaceFolders: LSIConnection['workspace']['getWorkspaceFolders'])
    {
        super(credentails,getWorkspaceFolders);
        this.connection = null;
    }

    queries = queries;

   
   
//open函数逻辑，包括error handling
    public async open() 
    {
       if(this.connection)
        {
            return this.connection;
        }
        try {
            const connectOptions: ddbConfig = {
                URL: this.credentials.server,
                port: this.credentials.port,
                autolog: true,//改为可选
                username: this.credentials.username,
                password: this.credentials.password,
                py: false,//改为可选
                stream: undefined,//改为可选
              };
              this.connection = createDDBClient(connectOptions);
              return this.connection;
        } catch (error) {
            console.error('Failed to connect,please double check',error);
            throw new error('Failed to open');
        }
    }

    public async close(){}

    public query: (typeof AbstractDriver)['prototype']['query'] = async (queries, opt = {}) => {}

    public async testConnection() {}

    public async getChildrenForItem({ item, parent }: Arg0<IConnectionDriver['getChildrenForItem']>) {}

    private async getChildrenForGroup({ parent, item }: Arg0<IConnectionDriver['getChildrenForItem']>) {}

    public async searchItems(itemType: ContextValue, search: string, _extraParams: any = {}): Promise<NSDatabase.SearchableItem[]> {}

    private completionsCache: { [w: string]: NSDatabase.IStaticCompletion } = null;
    public getStaticCompletions = async () => {}



}

























