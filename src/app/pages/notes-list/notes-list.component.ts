import {Component, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
    @ViewChild('fileInput') fileInput: any;
    noteForm: FormGroup;

    constructor(private storageService: StorageService, private formBuilder: FormBuilder) {
        this.noteForm = formBuilder.group({
            name : ['', [Validators.required, Validators.pattern(/[А-Я-A-Z]/)] ],
            content : ['', [ Validators.required]],
            file: []
        });
    }

    onFileChange($event) {
        let file = $event.target.files[0];
        if ( file.size > 2000000) {
            alert('Файл превышает 2МБ');
            this.fileInput.nativeElement.value = '';
            file = '';
        } else {
            this.noteForm.controls['file'].setValue(file ? file : null);
        }
    }

    submit() {
        if (this.noteForm.valid) {
            console.log(this.noteForm);
            // const note = {};
            // this.storageService.addNote(note);
        } else {
            console.log('Форма не валидна');
        }
    }

    ngOnInit() {
    }

}
