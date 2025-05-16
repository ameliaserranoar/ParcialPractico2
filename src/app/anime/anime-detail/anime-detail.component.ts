import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';


@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  animeDetail!: Anime;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.getAnime(id).subscribe((anime) => {
    this.animeDetail = anime;
    });
  }


}
