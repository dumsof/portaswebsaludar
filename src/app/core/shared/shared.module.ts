import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*DUM: poder llamar este paquete desde cualquier parte
  sera disponible cuando se importe y core module y
  despues el core module en app module, con esto queda
  visible para toda la aplicación.
*/
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from '@/core/shared/components/not-found/not-found.component';
import { NavbarComponent } from '@/core/shared/components/navbar/navbar.component';
import { AppMaterialModule } from '@/app-material.module';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [NotFoundComponent, NavbarComponent, LoaderComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, AppMaterialModule],
  exports: [HttpClientModule, RouterModule, NotFoundComponent, NavbarComponent, AppMaterialModule, LoaderComponent],
})
export class SharedModule {}
