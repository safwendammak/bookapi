import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../shared/books.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {DialogbodyComponent} from './dialogbody/dialogbody.component';
import {Book} from './book.model';

@Component({
  selector: 'adz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  books: Book[];
  book: Book;
  error: boolean;
  search: any; // Not recommanded to use any here
  filterkey: string;

  constructor(private bookservice: BooksService,
              private route: ActivatedRoute, public dialog: MatDialog,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    const isbn = this.route.snapshot.params.key;
    if (isbn == null) {
      console.log('vide !');
      this.error = true;
    } else {
      this.bookservice.SearchBooks(isbn)
        .subscribe((books) => {
          this.books = books;
          console.log(this.books);
        });
    }
  }

  getBooksFiltered(): void {
    console.log('function');
    const isbn = this.route.snapshot.params.key;
    this.bookservice.SearchByFilter(isbn, this.filterkey)
      .subscribe((books) => {
        this.books = books;
        console.log(this.books);
      });

  }

  GetbookByID(name): void {
    this.bookservice.GetbookByID(name).subscribe((book) => {
      this.book = book;
      this.openDialog();
    });

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      book: this.book
    };
    dialogConfig.minHeight = '500px';
    dialogConfig.minWidth = '500px';
    dialogConfig.height = 'auto';
    dialogConfig.width = 'auto';
    this.dialog.open(DialogbodyComponent, dialogConfig);
  }

}



