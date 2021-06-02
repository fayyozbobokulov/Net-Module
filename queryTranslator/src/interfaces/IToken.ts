interface IToken {
  type: string;
  position: {
    line: number;
    symbol: number;
  };
  text: string;
}

export default IToken;