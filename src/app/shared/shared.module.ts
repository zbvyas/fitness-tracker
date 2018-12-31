import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule,
            FlexLayoutModule,
            FormsModule,
            MaterialModule,
            ReactiveFormsModule],
  exports: [CommonModule,
            FlexLayoutModule,
            FormsModule,
            MaterialModule,
            ReactiveFormsModule]
})
export class SharedModule {

}
