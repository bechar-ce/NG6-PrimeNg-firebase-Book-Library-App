import { IBookDetails, IResponse } from '../models/viewModels';
import { Observable } from 'rxjs';

export interface IBookService {
    getBooksFromFirebase: () => Observable<IBookDetails[]>;
}

