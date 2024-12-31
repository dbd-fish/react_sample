import { setupWorker } from 'msw/browser';
// NOTE: ↓このimport文の書き方で./handlers/index.tsを自動で読み込んでhandlersを見つけてくれる。
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);