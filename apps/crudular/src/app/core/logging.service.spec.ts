import { TestBed } from '@angular/core/testing';

import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  let service: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log', () => {
    service.log('test');
  });

  it('should warn', () => {
    service.warn('test');
  });

  it('should error', () => {
    service.error('test');
  });

  it('should write', () => {
    const p = new Uint8Array(0);
    const [n, err] = service.write(p);
    expect(n).toBe(0);
    expect(err).toBeNull();
  });
});
