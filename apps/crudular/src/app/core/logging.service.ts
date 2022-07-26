import { Injectable } from '@angular/core';

import { Writer } from './io/writer';

@Injectable({
  providedIn: 'root',
})
export class LoggingService implements Writer {
  write(p: Uint8Array): [n: number, err: Error | null] {
    this.log(p.toString());
    const n = p.length;
    const err = null;
    return [n, err];
  }
  log(msg: string): void {
    console.log(msg);
  }

  error(msg: string): void {
    console.error(msg);
  }

  warn(msg: string): void {
    console.warn(msg);
  }
}
