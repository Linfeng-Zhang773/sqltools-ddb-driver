import {DDB} from 'dolphindb';
import AbstractDriver from '@sqltools/base-driver';
import queries from './queries';
import { IConnectionDriver, MConnectionExplorer, NSDatabase, ContextValue, Arg0 } from '@sqltools/types';
import { v4 as generateId } from 'uuid';
import keywordsCompletion from './keyword';

/*two type arguments for abstractDriver is not determined yet, need to be edited
and errors need to be fixed later
*/
export default class dolphindbDriver extends AbstractDriver<any,0> implements IConnectionDriver
{
    queries = queries;

    public async open() 
    {
        
    }
    public async close(){}

    public query: (typeof AbstractDriver)['prototype']['query'] = async (queries, opt = {}) => {}

    public async testConnection() {}

    public async getChildrenForItem({ item, parent }: Arg0<IConnectionDriver['getChildrenForItem']>) {}

    private async getChildrenForGroup({ parent, item }: Arg0<IConnectionDriver['getChildrenForItem']>) {}

    public async searchItems(itemType: ContextValue, search: string, _extraParams: any = {}): Promise<NSDatabase.SearchableItem[]> {}

    public getStaticCompletions: IConnectionDriver['getStaticCompletions'] = async () => {}


}

























