import { TestBed, inject } from '@angular/core/testing';

import { ErrorMsgHandleServiceService } from './error-msg-handle-service.service';

describe('ErrorMsgHandleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMsgHandleServiceService]
    });
  });

  it('should ...', inject([ErrorMsgHandleServiceService], (service: ErrorMsgHandleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
