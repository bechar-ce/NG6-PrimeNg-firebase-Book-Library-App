import { Injectable } from '@angular/core';
import { IBookService } from '../interfaces/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBookDetails } from '../models/viewModels';

@Injectable({ providedIn: 'root' })
export class BookService implements IBookService {
    getBooksFromFirebase: () => Observable<IBookDetails[]>;
    constructor(private db: AngularFireDatabase, private httpc: HttpClient) {
        this.getBooksFromFirebase = () => {
            return this.db.list<IBookDetails>('books').valueChanges();
        };
    }
}
