import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { StopTrainingComponent } from './current-training/stop-training.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [TrainingComponent, 
                 CurrentTrainingComponent,
                 NewTrainingComponent, 
                 PastTrainingComponent,
                 StopTrainingComponent],
  imports: [CommonModule,
            FlexLayoutModule,
            FormsModule,
            MaterialModule,
            ReactiveFormsModule],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {

}