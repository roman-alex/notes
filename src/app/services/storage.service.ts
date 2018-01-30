import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class StorageService {
    private notesCollection: AngularFirestoreCollection<any>;
    notes: Observable<any[]>;

    constructor(private afs: AngularFirestore) {
        this.notesCollection = afs.collection<any>('notes');
        this.notes = this.notesCollection.valueChanges();
    }

    addNote(note) {
        const date = new Date().getTime();
        this.notesCollection.doc( date.toString() ).set(note);
    }

}
