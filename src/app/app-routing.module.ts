import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UserDataComponent } from './user-data/user-data.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'user-data', component: UserDataComponent},
  { path: 'repo-list', component: ReposComponent},
  { path: '', redirectTo:"/user-data", pathMatch:"full"},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
