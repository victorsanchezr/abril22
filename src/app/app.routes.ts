import { Routes } from '@angular/router';
import { InmuebleListaComponent } from './inmueble-lista/inmueble-lista.component';
import { InmuebleDetComponent } from './inmueble-det/inmueble-det.component';
import { CiberBlogComponent } from './ciber-blog/ciber-blog.component';
import { CiberDetalleComponent } from './ciber-detalle/ciber-detalle.component';

export const routes: Routes = [
    { path: 'inmuebleslista', component: InmuebleListaComponent },
    { path: 'inmuebleslista/:id', component: InmuebleDetComponent },

    { path: 'ciberblog', component: CiberBlogComponent },
    { path: 'ciberblog/:id', component: CiberDetalleComponent },
   

];
