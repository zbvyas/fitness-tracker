import { NgModule } from "@angular/core";

import { MatButtonModule,
         MatCheckboxModule,
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule,
         MatListModule,
         MatNativeDateModule,
         MatSidenavModule,
         MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatListModule, MatNativeDateModule, 
            MatDatepickerModule, MatIconModule, MatInputModule, MatSidenavModule,
            MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatListModule, MatNativeDateModule, 
            MatDatepickerModule, MatIconModule, MatInputModule, MatSidenavModule,
            MatToolbarModule]
})
export class MaterialModule {}