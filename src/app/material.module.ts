import { NgModule } from "@angular/core";

import { MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule,
         MatListModule,
         MatNativeDateModule,
         MatProgressSpinnerModule,
         MatSelectModule,
         MatSidenavModule,
         MatTabsModule,
         MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule, MatNativeDateModule, 
            MatDatepickerModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule,
            MatTabsModule, MatToolbarModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule, MatNativeDateModule, 
            MatDatepickerModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule,
            MatTabsModule, MatToolbarModule, MatProgressSpinnerModule]
})
export class MaterialModule {}