import IToken from '../interfaces/IToken';
import Cursor from './Cursor';
declare class Parser {
    private query;
    symbol: string;
    constructor(query: string);
    cursor: Cursor;
    currentToken: IToken;
    regexNaS: RegExp;
    getNextToken(): void;
    isWhiteSpace(symbol: string): boolean;
    isWord(symbol: string): boolean;
    parsedWord(): string;
}
export default Parser;
