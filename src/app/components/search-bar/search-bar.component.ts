import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter();

  @Output()
  onClear: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') input: any;

  constructor() {
    this.modelChange.pipe(debounceTime(500)).subscribe(() => this.onSearch.emit(this.searchText));
   }

  searchText: string = '';
  modelChange = new Subject<string>();

  ngOnInit(): void {
  }

  onPressClear(): void {
    this.searchText = '';
    this.onClear.emit();
  }

  onChange(): void {
    this.modelChange.next();
  }
}
