import * as fs from 'fs';

export const getAlko = () => {
  let text = fs.readFileSync('./alko.json', 'utf8');
  return JSON.parse(text);
};

