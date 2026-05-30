declare function prettyPrintHsCode(code: string, showLabel?: boolean, isItem?: boolean): string;
declare function prettyPrintHsCode(code: string, options?: prettyPrintHsCode.Options): string;

declare namespace prettyPrintHsCode {
  interface Options {
    showLabel?: boolean;
    isItem?: boolean;
  }

  const prettyPrintHsCode: {
    (code: string, showLabel?: boolean, isItem?: boolean): string;
    (code: string, options?: Options): string;
  };
}

export = prettyPrintHsCode;
