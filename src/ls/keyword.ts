import { NSDatabase } from "@sqltools/types";

const keywordsArray = 
[
   'ADD',
   'ALL',
   'ALTER',
   'AND',
   'ANY',
   'AS',
   'ASC',
   'BETWEEN',
   'BY',
   'CASE',
   'CAST',
   'CONVERT',
   'COALESCE',
   'COLUMN',
   'COUNT',
   'CREATE',
   'CROSS',
   'DELETE',
   'DESC',
   'DISTINCT',
   'DROP',
   'ELSE',
   'END',
   'EXISTS',
   'FALSE',
   'FROM',
   'FULL',
   'GROUP',
   'HAVING',
   'IF',
   'IN',
   'INNER',
   'INSERT',
   'IS',
   'JOIN',
   'LEFT',
   'LIKE',
   'LOWER',
   'MAX',
   'MIN',
   'NOT',
   'NULL',
   'NULLIF',
   'ON',
   'OR',
   'ORDER',
   'REPEAT',
   'RIGHT',
   'SELECT',
   'SET',
   'SUBSTRING',
   'SUM',
   'TABLE',
   'TEMPORARY',
   'THEN',
   'TRIM',
   'TRUE',
   'UNION',
   'UPDATE',
   'UPPER',
   'VALUES',
   'WHEN',
   'WHERE',
   'WITH',
   'CHARACTER_LENGTH',
   'FETCH',
   'FIRST',
   'TRANSACTION',
   'WHILE',
];

const keywordsCompletion: { [w: string]: NSDatabase.IStaticCompletion } = keywordsArray.reduce((agg, word) => {
    agg[word] = {
      label: word,
      detail: word,
      filterText: word,
      sortText: (['SELECT', 'CREATE', 'UPDATE', 'DELETE'].includes(word) ? '2:' : '') + word,
      documentation: {
        value: `\`\`\`yaml\nWORD: ${word}\n\`\`\``,
        kind: 'markdown'
      }
    };
    return agg;
  }, {});
  
  export default keywordsCompletion;