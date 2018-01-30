import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesListComponent} from './pages/notes-list/notes-list.component';
import {NotesDetailComponent} from './pages/notes-detail/notes-detail.component';

const routes: Routes = [
    {
        path: '',
        component: NotesListComponent
    },
    {
        path: 'detail',
        component: NotesDetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
