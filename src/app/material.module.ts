import { NgModule } from "@angular/core";

import { MatButtonModule,
         MatCheckboxModule,
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule,
         MatNativeDateModule,
         MatSidenavModule,
         MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule, 
            MatDatepickerModule, MatIconModule, MatInputModule, MatSidenavModule,
            MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule, 
            MatDatepickerModule, MatIconModule, MatInputModule, MatSidenavModule,
            MatToolbarModule]
})
export class MaterialModule {}