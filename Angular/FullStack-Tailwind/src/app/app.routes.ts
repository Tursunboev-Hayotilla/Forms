import { Routes } from '@angular/router';
import { GetallComponent } from './components/getall/getall.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { GetbyidComponent } from './components/getbyid/getbyid.component';

export const routes: Routes = [
  {path :'',redirectTo:'getall',pathMatch:'full'},
  { path: 'getall', component: GetallComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'getbyid', component: GetbyidComponent }
];
