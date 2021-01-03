import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/api.model';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.css']
})
export class NominationsComponent implements OnInit {

  constructor() { }

  @Input()
  nominations!: Movie[];

  @Output()
  onRemoveNomination: EventEmitter<string> = new EventEmitter();

  isExpanded: boolean = true;

  ngOnInit(): void {
  }

  onRemove($event: Movie): void {
    this.onRemoveNomination.emit($event.imdbID);
  }

  onToggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
