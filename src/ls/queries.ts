import { IBaseQueries, ContextValue, NSDatabase} from '@sqltools/types';


/** write your queries here go fetch desired data. */
/** IbaseQueries interfeace:
  fetchRecords: QueryBuilder<{ limit: number; offset: number; table: NSDatabase.ITable; }, any>;
  countRecords: QueryBuilder<{ table: NSDatabase.ITable; }, { total: number; }>;
  fetchSchemas?: QueryBuilder<NSDatabase.IDatabase, NSDatabase.ISchema>;
  fetchDatabases?: QueryBuilder<never | MConnectionExplorer.IChildItem, NSDatabase.IDatabase>;
  fetchTables: QueryBuilder<NSDatabase.ISchema, NSDatabase.ITable>;
  searchTables: QueryBuilder<{ search: string, limit?: number }, NSDatabase.ITable>;
  searchColumns: QueryBuilder<{ search: string, tables: NSDatabase.ITable[], limit?: number }, NSDatabase.IColumn>;
  // old api
  describeTable: QueryBuilder<NSDatabase.ITable, any>;
  fetchColumns: QueryBuilder<NSDatabase.ITable, NSDatabase.IColumn>;
  fetchFunctions?: QueryBuilder<NSDatabase.ISchema, NSDatabase.IFunction>;
 */

const describeTable: IBaseQueries['describeTable'] = DDBqueryFactory()
{
    
}
const fetchColumns: IBaseQueries['fetchColumns'] = DDBqueryFactory()
{

}
const fetchRecords: IBaseQueries['fetchRecords'] = DDBqueryFactory()
{

}
const countRecords: IBaseQueries['countRecords'] = DDBqueryFactory()
{

}
const fetchSchemas: IBaseQueries['fetchSchemas'] = DDBqueryFactory()
{

}
const fetchDatabases: IBaseQueries['fetchDatabases'] = DDBqueryFactory()
{
  
}
const fetchTables: IBaseQueries['fetchTables'] = DDBqueryFactory()
{

}
const searchColumns:IBaseQueries['searchColumns'] = DDBqueryFactory()
{

}
const searchTables: IBaseQueries['searchTables'] = DDBqueryFactory()
{

}
const fetchFunctions: IBaseQueries['fetchFunctions'] = DDBqueryFactory()
{

}

export default
{
    describeTable,
    fetchColumns,
    fetchRecords,
    countRecords,
    fetchSchemas,
    fetchDatabases,
    fetchTables,
    searchColumns,
    searchTables,
    fetchFunctions
}