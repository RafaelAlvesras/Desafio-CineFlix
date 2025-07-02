import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-filmes',
  imports: [CommonModule],
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmes: any[] = [];

  constructor(private filmesService: FilmesService, private router: Router) {}

  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe((res) => {
      this.filmes = res;
    });
  }

  irParaSessoes(idFilme: number) {
    this.router.navigate(['/sessoes', idFilme]);
  }
}
