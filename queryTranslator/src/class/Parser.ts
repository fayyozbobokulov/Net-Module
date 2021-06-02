/* eslint-disable no-constant-condition */
import IToken from '../interfaces/IToken';
import Cursor from './Cursor';

class Parser {

  symbol = '';

  constructor(private query:string){
    this.cursor = new Cursor(this.query);
  }

  cursor: Cursor;
  currentToken!: IToken;

  regexNaS = /a-zA-Z0-9/;

  getNextToken() {

    while (true) {
      
      console.log(this.symbol);

      if(this.isWhiteSpace(this.symbol)) {
        continue;
      }

      if(this.isWord(this.symbol)) {
        token.push(this.parsedWord());
      }

      console.log(token);
    }
  }

  isWhiteSpace(symbol: string): boolean {
    return RegExp('\\s', 'i').test(symbol);
  }

  isWord(symbol: string): boolean {
    // eslint-disable-next-line no-useless-escape
    return this.regexNaS.test(symbol);
  }

  parsedWord(): string {
    let word = '';

    while(this.isWord(this.symbol)) {
      word += this.symbol;
      this.symbol = this.cursor.getNextCursor();
      console.log(this.symbol);
    }
    // console.log()
    return word;  
  }
} 

export default Parser;