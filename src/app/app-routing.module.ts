import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@/core/shared/components/not-found/not-found.component';

/*DUM: Lazy loady para cargar las ruta de PublicComponent
 useHash: true: permite hacer recargas en producción para un
 buen funcionamiento.
 por eso se utiliza el loadChildren con el fin de realizar el lazy loading
*/
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
