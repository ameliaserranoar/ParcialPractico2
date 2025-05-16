import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  standalone: false,
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected: boolean = false;
  animes: Anime[] = [];
  promedioRating: number = 0;
  constructor(private animeService: AnimeService,  private router: Router) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.calcularPromedio();
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  calcularPromedio(): number {
    const total = this.animes.reduce((acc, anime) => acc + anime.Rating, 0);
    this.promedioRating = total / this.animes.length;
    return total / this.animes.length
  }

  ngOnInit() {
    this.getAnimes();
  }

  seleccionarAnime(anime: Anime): void {
    this.router.navigate(['/animes', anime.id]);
  }

}






