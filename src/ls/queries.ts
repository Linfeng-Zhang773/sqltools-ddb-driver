import { IBaseQueries, ContextValue} from '@sqltools/types';
import queryFactory from '@sqltools/base-driver/dist/lib/factory'
//名模板字符串需要完成

/** write your queries here go fetch desired data. */
/** IbaseQueries interfeaces:
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
/*
DolphinDB 为分布式表结构，如何改写模板字符串？

EX: USE catalog catalog1(this syntax is mandatory)

*/
const describeTable: IBaseQueries['describeTable'] = queryFactory
`
    SELECT * 
    FROM ${(p)=>p.database}.${(p)=>p.table||p.table.label}.schema().colDefs
`;
/*
dolphinDB数据目录：catalog->databse->table
*/
const fetchColumns: IBaseQueries['fetchColumns'] = queryFactory
`
    SELECT 
    X.name AS label,
    X.typeString AS DataType,
    X.typeInt AS DataTypeInt,
    '${ContextValue.COLUMN}' AS type,
    X.extra AS extras,
    X.comment AS comments
    FROM ${(p)=>p.database}.${(p)=>p.table||p.table.label}.schema().colDefs AS X
    ORDER BY X.dataTypeInt ASC
`;
/*syntax : SELECT * FROM C limit 1,3
1= rawoffset, 3 = rawlimit
*/
const fetchRecords: IBaseQueries['fetchRecords'] = queryFactory
`
    SELECT *
    FROM ${(p)=>p.database}.${(p)=>p.table||p.table.label}
    LIMIT ${p=>`${p.offset||0},${p.limit||50}}`}
`;
/*
计算表中总行数
*/
const countRecords: IBaseQueries['countRecords'] = queryFactory
`
    SELECT count(${(p)=>p.database}.${(p)=>p.table||p.table.label}.) AS total
`;

const fetchDatabases: IBaseQueries['fetchDatabases'] = queryFactory
`
   
`
 const fetchSchemas: IBaseQueries['fetchSchemas'] = queryFactory
`
    
`
const fetchTables: IBaseQueries['fetchTables'] = queryFactory
`
    
`;


const searchTables: IBaseQueries['searchTables'] = queryFactory
`
    SELECT T.name as label,
    T.
    FROM ... AS T
`;

const searchColumns:IBaseQueries['searchColumns'] = queryFactory
`
    SELECT 
`;

const fetchFunctions: IBaseQueries['fetchFunctions'] = queryFactory
`
    
`;
//需要完成输出的字符串模板
export default
{
    describeTable,
    fetchColumns,
    fetchRecords,
    countRecords,
    fetchDatabases,
    fetchSchemas,
    fetchTables,
    searchColumns,
    searchTables,
    fetchFunctions
}