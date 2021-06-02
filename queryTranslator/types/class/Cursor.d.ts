declare class Cursor {
    private query;
    line: number;
    index: number;
    symbol: string;
    constructor(query: string);
    getNextCursor(): string;
}
export default Cursor;
