import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NotesDetailComponent } from './pages/notes-detail/notes-detail.component';
import {StorageService} from './services/storage.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        NotesListComponent,
        NotesDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
