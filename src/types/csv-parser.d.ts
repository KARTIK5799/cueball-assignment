declare module 'csv-parser' {
  import { Readable } from 'stream';

  interface CsvParserOptions {
    separator?: string;
    strict?: boolean;
    headers?: boolean | string[];
    mapHeaders?: (args: { header: string; index: number }) => string | null;
    mapValues?: (args: { header: string; index: number; value: string }) => any;
    skipLines?: number;
    skipComments?: string | RegExp;
  }

  function csvParser(options?: CsvParserOptions): Readable;

  export = csvParser;
}
