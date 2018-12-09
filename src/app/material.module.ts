import { NgModule } from "@angular/core";

import { MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatDialogModule,
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule,
         MatListModule,
         MatNativeDateModule,
         MatPaginatorModule,
         MatProgressSpinnerModule,
         MatSelectModule,
         MatSidenavModule,
         MatSortModule,
         MatTabsModule,
         MatTableModule,
         MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule, MatNativeDateModule, 
            MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule,
            MatTabsModule, MatToolbarModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule, MatNativeDateModule, 
            MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule,
            MatTabsModule, MatToolbarModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule]
})
export class MaterialModule {}