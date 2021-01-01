import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  shouldShowInstructions: boolean = true;

  ngOnInit(): void {
  }

  onClose(): void {
    this.shouldShowInstructions = false;
  }

  onSearch($event: any): void {
    console.log($event);
  }
}
