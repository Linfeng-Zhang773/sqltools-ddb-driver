//dolphindb自定义客户端接口
// export interface ddbClient
// {
//     connect():Promise<void>;
//     close() : Promise<void>;
//     query(query: string): Promise<any>;

// }
//dolphindb自定义链接配置接口
export interface ddbConfig
{
    URL: string,
    port:number,
    autolog : boolean,
    username : string,
    password : string,
    py : boolean,
    stream : undefined
}

