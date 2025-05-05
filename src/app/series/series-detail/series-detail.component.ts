import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SerieDetailComponent {
  @Input() serie: Serie | null = null;
}
