import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EchartsComponent} from './echarts.component'
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [EchartsComponent],
  exports:[
    EchartsComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule

  ]
})
export class EchartsModule { }
