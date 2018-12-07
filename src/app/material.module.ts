import { NgModule } from "@angular/core";

import { MatButtonModule,
         MatCheckboxModule,
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule,
         MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatIconModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatIconModule, MatInputModule]
})
export class MaterialModule {}