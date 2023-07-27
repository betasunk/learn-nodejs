import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
const { createGzip } = zlib;
const gzip = createGzip();
const source = createReadStream('input.txt');

const target = createWriteStream('input.txt.gz');




