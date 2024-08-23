"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("@sqltools/types");
var factory_1 = require("@sqltools/base-driver/dist/lib/factory");
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
var describeTable = (0, factory_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    SELECT * \n    FROM ", ".", ".schema().colDefs\n"], ["\n    SELECT * \n    FROM ", ".", ".schema().colDefs\n"])), function (p) { return p.database; }, function (p) { return p.table || p.table.label; });
/*
dolphinDB数据目录：catalog->databse->table
*/
var fetchColumns = (0, factory_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    SELECT \n    X.name AS label,\n    X.typeString AS DataType,\n    X.typeInt AS DataTypeInt,\n    '", "' AS type,\n    X.extra AS extras,\n    X.comment AS comments\n    FROM ", ".", ".schema().colDefs AS X\n    ORDER BY X.dataTypeInt ASC\n"], ["\n    SELECT \n    X.name AS label,\n    X.typeString AS DataType,\n    X.typeInt AS DataTypeInt,\n    '", "' AS type,\n    X.extra AS extras,\n    X.comment AS comments\n    FROM ", ".", ".schema().colDefs AS X\n    ORDER BY X.dataTypeInt ASC\n"])), types_1.ContextValue.COLUMN, function (p) { return p.database; }, function (p) { return p.table || p.table.label; });
/*syntax : SELECT * FROM C limit 1,3
1= rawoffset, 3 = rawlimit
暂时先这样写*/
var fetchRecords = (0, factory_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    SELECT *\n    FROM ", ".", "\n    LIMIT ", "\n"], ["\n    SELECT *\n    FROM ", ".", "\n    LIMIT ", "\n"])), function (p) { return p.database; }, function (p) { return p.table || p.table.label; }, function (p) { return "".concat(p.offset || 0, ",").concat(p.limit || 50, "}"); });
/*
计算表中总行数
*/
var countRecords = (0, factory_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    SELECT count(", ".", ".) AS total\n"], ["\n    SELECT count(", ".", ".) AS total\n"])), function (p) { return p.database; }, function (p) { return p.table || p.table.label; });
/*
getClusterDFSDatabases()返回database的路径，怎么extract成只有名字，暂定这样写
*/
var fetchDatabases = (0, factory_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    D = table(getClusterDFSDatabases() AS name)\n    SELECT\n    D.name AS label,\n    D.name AS database,\n    '", "' AS type,\n    'database' AS detail\n    FROM D\n    ORDER BY D.name;\n"], ["\n    D = table(getClusterDFSDatabases() AS name)\n    SELECT\n    D.name AS label,\n    D.name AS database,\n    '", "' AS type,\n    'database' AS detail\n    FROM D\n    ORDER BY D.name;\n"])), types_1.ContextValue.DATABASE);
// const fetchSchemas: IBaseQueries['fetchSchemas'] = queryFactory
// `
// `;
/*
not done yet, logics may wrong, also two extract functions need to be implemented
 */
var fetchTables = (0, factory_1.default)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    T = table(extractTable(getClusterDFSDatabases()) AS name, extractDatabases(getClusterDFSDatabases()) AS database)\n    SELECT \n    T.name AS label,\n    T.database AS database,\n    '", "' AS type,\n    FROM T\n    ORDER BY T.name\n"], ["\n    T = table(extractTable(getClusterDFSDatabases()) AS name, extractDatabases(getClusterDFSDatabases()) AS database)\n    SELECT \n    T.name AS label,\n    T.database AS database,\n    '", "' AS type,\n    FROM T\n    ORDER BY T.name\n"])), types_1.ContextValue.TABLE);
var searchTables = (0, factory_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    \n"], ["\n    \n"])));
var searchColumns = (0, factory_1.default)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var fetchFunctions = (0, factory_1.default)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.default = {
    describeTable: describeTable,
    fetchColumns: fetchColumns,
    fetchRecords: fetchRecords,
    countRecords: countRecords,
    fetchDatabases: fetchDatabases,
    //fetchSchemas,
    fetchTables: fetchTables,
    searchColumns: searchColumns,
    searchTables: searchTables,
    fetchFunctions: fetchFunctions
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
