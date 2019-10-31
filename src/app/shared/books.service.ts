import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../result/book.model';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookapiUrl = 'https://www.googleapis.com/books/v1/';  // API URL

  constructor(private http: HttpClient) {
  }

  SearchBooks(search: string): Observable<Book[]> { // Search all books
    if (search === '') {
      return of([]);
    }
    const url = encodeURI(this.bookapiUrl + 'volumes?q=' + search + '&maxResults=40');
    return this.http.get<Book[]>(url).pipe(
      map((res: any) => res.items as Book[]),
      catchError(this.handleError<Book[]>('getBooks'))
    );
  }

  GetbookByID(isbn): Observable<Book> { // Search Single Book
    const url = encodeURI(this.bookapiUrl + 'volumes?q=id:' + isbn + '&maxResults=1');
    return this.http.get<Book>(url).pipe(
      map((res: any) => res.items[0] as Book),
      catchError(this.handleError<Book>('getBook with isbn = ${isbn}'))
    );
  }

  SearchByFilter(search, filter): Observable<Book[]> { // Search Books Filtered
    const url = encodeURI(this.bookapiUrl + 'volumes?q= ' + search + '&filter=' + filter + '&maxResults=40');
    return this.http.get<Book[]>(url).pipe(
      map((res: any) => res.items as Book[]),
      catchError(this.handleError<Book[]>('getBooksFiltered'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
