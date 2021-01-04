import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Movie } from 'src/app/models/api.model';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.css'],
})
export class NominationsComponent implements OnInit {
  constructor(private clipboardService: ClipboardService) {}

  @Input()
  nominations!: Movie[];

  @Output()
  onRemoveNomination: EventEmitter<string> = new EventEmitter();

  @Output()
  onClear: EventEmitter<any> = new EventEmitter();

  isExpanded = true;
  infoMessage = '';

  ngOnInit(): void {}

  onRemove($event: Movie): void {
    this.onRemoveNomination.emit($event.imdbID);
  }

  onToggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  onClearNominations(): void {
    this.onClear.emit();
  }

  showMessage(message: string): void {
    this.infoMessage = message;
    setTimeout(() => {
      this.infoMessage = '';
    }, 3000);
  }

  onPressShare(): void {
    if (
      this.clipboardService.copyFromContent(
        `${location.origin}/the-shoppies/nominate/?n=${this.nominations
          .map((n) => n.imdbID)
          .join('&n=')}`
      )
    ) {
      this.showMessage('link copied to clipboard');
    }
  }
}
