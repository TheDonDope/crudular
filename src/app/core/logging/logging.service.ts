import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  log(msg: string) {
    console.log(msg);
  }

  error(msg: string) {
    console.error(msg);
  }

}
