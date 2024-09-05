import { IBaseQueries, ContextValue} from '@sqltools/types';
import queryFactory from '@sqltools/base-driver/dist/lib/factory'


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
暂时先这样写*/
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
/*
getClusterDFSDatabases()返回database的路径，怎么extract成只有名字，暂定这样写
*/
const fetchDatabases: IBaseQueries['fetchDatabases'] = queryFactory
`
    D = table(getClusterDFSDatabases() AS name)
    SELECT
    D.name AS label,
    D.name AS database,
    '${ContextValue.DATABASE}' AS type,
    'database' AS detail
    FROM D
    ORDER BY D.name;
`;

// const fetchSchemas: IBaseQueries['fetchSchemas'] = queryFactory
// `
    
// `;
/*
not done yet, logics may wrong, also two extract functions need to be implemented
 */
const fetchTables: IBaseQueries['fetchTables'] = queryFactory
`
    T = table(extractTable(getClusterDFSDatabases()) AS name, extractDatabases(getClusterDFSDatabases()) AS database)
    SELECT 
    T.name AS label,
    T.database AS database,
    '${ContextValue.TABLE}' AS type,
    FROM T
    ORDER BY T.name
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

export default
{
    describeTable,
    fetchColumns,
    fetchRecords,
    countRecords,
    fetchDatabases,
    //fetchSchemas,
    fetchTables,
    searchColumns,
    searchTables,
    fetchFunctions
}