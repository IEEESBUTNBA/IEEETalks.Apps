import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import { InlineSVGModule } from 'ng2-inline-svg';

import {ErrorMsgHandleService} from "./errorMsgHandle.service";


@NgModule({
  imports:       [CommonModule],
  exports:       [CommonModule,
                 HttpModule,
                 FormsModule,
                 ReactiveFormsModule,
                 InfiniteScrollModule,
                 InlineSVGModule],               
  declarations: [ ],
  providers:[ErrorMsgHandleService] 
})
export class SharedModule { }