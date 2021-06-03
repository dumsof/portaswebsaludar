import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from '@/admin/admin.component';
import { SharedModule } from '@/core/shared/shared.module';
import { AdminRountingModule } from '@/admin/admin-rounting.module';
import { SaludarComponent } from '@/admin/saludar/saludar.component';

@NgModule({
  declarations: [AdminComponent, SaludarComponent],
  imports: [

    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminRountingModule,
  ],
})
export class AdminModule {}
