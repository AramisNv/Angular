import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MicroserviceComponent } from './microservice.component';

@NgModule({
  declarations: [
    MicroserviceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MicroserviceComponent
  ]
})
export class MicroserviceModule { }
