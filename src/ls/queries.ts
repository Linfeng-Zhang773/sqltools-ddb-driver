import { IBaseQueries, ContextValue} from '@sqltools/types';
import queryFactory from '@sqltools/base-driver/dist/lib/factory';

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

const describeTable: IBaseQueries['describeTable'] = queryFactory` 
    t.schema().colDefs
`;

const fetchColumns: IBaseQueries['fetchColumns'] = queryFactory`


`;

const fetchRecords: IBaseQueries['fetchRecords'] = queryFactory`


`;

const countRecords: IBaseQueries['countRecords'] = queryFactory`


`;

const fetchSchemas: IBaseQueries['fetchSchemas'] = queryFactory`



`;

const fetchDatabases: IBaseQueries['fetchDatabases'] = queryFactory`


`;


const fetchTables: IBaseQueries['fetchTables'] = queryFactory`



`;


const searchColumns:IBaseQueries['searchColumns'] = queryFactory`



`;

const searchTables: IBaseQueries['searchTables'] = queryFactory`



`;

const fetchFunctions: IBaseQueries['fetchFunctions'] = queryFactory`

`;


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