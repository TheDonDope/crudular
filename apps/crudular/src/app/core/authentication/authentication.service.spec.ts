import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the current user', () => {
    expect(service.getCurrentUser()).toBeNull();
  });

  it('should return if there is a user currently logged in', () => {
    expect(service.isUserLoggedIn()).toBeFalsy();
  });

  it('should authorise the given credentials', () => {
    expect(service.login('', '')).toBeTruthy();
  });

  it('should logout', () => {
    service.logout();
  });
});
