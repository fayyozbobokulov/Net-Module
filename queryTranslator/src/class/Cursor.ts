class Cursor {
  line = 0;
  index = -1;
  symbol = '';

  constructor(private query: string){}

  getNextCursor(): string {
    this.index++;
    this.symbol = this.query[this.index];

    if(this.symbol === '\n'){
      this.line++;
    }

    return this.symbol;
  }
}

export default Cursor;