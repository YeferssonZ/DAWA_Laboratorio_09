import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

const routes: Routes = [
  { path: 'saludo', component: SaludoComponent },
  { path: 'contador', component: ContadorComponent },
  { path: 'imagenes', component: ImagenesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
