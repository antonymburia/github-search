import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:any;

@Output() searchEmit= new EventEmitter<any>();
  constructor() { }
emitdata(){
  this.searchEmit.emit(this.search);
}


  ngOnInit(): void {
  }

}
