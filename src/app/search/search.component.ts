import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'adz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchkeyword: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    const newvalue = this.searchkeyword.replace(/ /g, '+'); // replace Spaces with +
    this.router.navigate(['/result/', newvalue]); // Redirect to result page

  }
}
