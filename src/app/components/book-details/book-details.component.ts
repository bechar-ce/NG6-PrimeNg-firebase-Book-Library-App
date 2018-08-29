import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookDetails } from '../../models/viewModels';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  getBooksFirebase: () => void;
  public iBooksdatas: Array<IBookDetails> = [];

  ngOnInit() {
    this.getBooksFirebase();
  }

  constructor(private bookService: BookService) {

    this.getBooksFirebase = () => {
      this.bookService.getBooksFromFirebase().subscribe(value => {
        this.iBooksdatas = value;
      });
    };
  }
}
