import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';
import { SerieDetailComponent } from '../series-detail/series-detail.component';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule, SerieDetailComponent],
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  avgSeasons: number = 0;
  selectedSerie: Serie | null = null;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.calculateAvgSeasons();
    });
  }

  calculateAvgSeasons(): void {
    if (this.series.length > 0) {
      const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.avgSeasons = total / this.series.length;
    }
  }

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}

