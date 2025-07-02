import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessoes.component.html',
  styleUrls: ['./sessoes.component.css'],
})
export class SessoesComponent implements OnInit {
  filme: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const idFilme = this.route.snapshot.paramMap.get('idFilme');

    this.http.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
      .subscribe((res: any) => {
        this.filme = res;
      });
  }

  irParaAssentos(idSessao: number) {
    this.router.navigate(['/assentos', idSessao]);
  }
}
