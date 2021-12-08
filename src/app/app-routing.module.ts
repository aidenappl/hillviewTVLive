import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/watch',
    pathMatch: 'full'
  },
  {
    path: 'watch',
    loadChildren: () =>
      import('./public/watch/watch.module').then((m) => m.WatchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
