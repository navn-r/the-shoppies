import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  searchText: string = '';
  previousText: string = '';

  ngOnInit(): void {
  }

  onPressClear(): void {
    this.searchText = '';
  }

  handleKeyUp(e: any): void {
    if(e.keyCode === 13)
      this.onPressSearch();
  }

  onPressSearch(): void {
    if(this.searchText.trim().length && this.searchText.trim() !== this.previousText) {
      this.previousText = this.searchText.trim();
      this.onSearch.emit(this.previousText);
    }
  }

}
