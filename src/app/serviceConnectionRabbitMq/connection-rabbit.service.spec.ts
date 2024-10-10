import { TestBed } from '@angular/core/testing';

import { ConnectionRabbitService } from './connection-rabbit.service';

describe('ConnectionRabbitService', () => {
  let service: ConnectionRabbitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionRabbitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
