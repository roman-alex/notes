import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

    noteForm: FormGroup;

    constructor(private storageService: StorageService, private formBuilder: FormBuilder) {
        this.noteForm = formBuilder.group({
            name : ['', [Validators.required]],
            content : ['', [ Validators.required]],
            file: [null]
        });
    }

    onFileChange($event) {
        const file = $event.target.files[0];
        this.noteForm.controls['file'].setValue(file ? file : null);
    }

    submit() {
        console.log(this.noteForm);
        // const note = {};
        // this.storageService.addNote(note);
    }

    ngOnInit() {
    }

}
