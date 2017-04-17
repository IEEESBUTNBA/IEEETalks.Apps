import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { ErrorMsgHandleServiceService } from '../error-msg-handle-service/error-msg-handle-service.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MdDialogModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MdDialogModule
  ],
  declarations: [],
  providers: [ErrorMsgHandleServiceService]
})
export class SharedModule { }
