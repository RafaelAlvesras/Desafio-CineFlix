import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assentos.component.html',
  styleUrls: ['./assentos.component.css']
})
export class AssentosComponent implements OnInit {
  sessao: any;
  selectedSeats: { id: number; name: string }[] = [];
  nome: string = '';
  cpf: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const idSessao = this.route.snapshot.paramMap.get('idSessao');
    this.http.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
      .subscribe((res: any) => {
        this.sessao = res;
      });
  }

  toggleSeat(id: number, isAvailable: boolean, name: string): void {
    if (!isAvailable) {
      alert('Esse assento não está disponível');
      return;
    }

    const index = this.selectedSeats.findIndex(seat => seat.id === id);

    if (index !== -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push({ id, name });
    }
  }


  isSelecionado(id: number): boolean {
    return this.selectedSeats.some(seat => seat.id === id);
  }

  voltarHome() {
    this.router.navigate(['/']);
  }

  reservar(): void {
    if (!this.nome || !this.cpf || this.selectedSeats.length === 0) {
      alert('Preencha todos os campos e selecione ao menos um assento.');
      return;
    }

    const body = {
      ids: this.selectedSeats.map(seat => seat.id),
      name: this.nome,
      cpf: this.cpf
    };


    this.http.post(
      'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
      body, { responseType: 'text' })
    this.router.navigate(['/sucesso'], {
      state: {
        filme: this.sessao.movie.title,
        data: this.sessao.day.date,
        horario: this.sessao.name,
        assentos: this.selectedSeats.map(seat => seat.name),
        nome: this.nome,
        cpf: this.cpf
      }
    });
  }
}
