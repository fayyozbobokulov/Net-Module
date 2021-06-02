import Parser from './class/Parser';

const sqlQuery = 'select';

const parser = new Parser(sqlQuery);

parser.getNextToken();
