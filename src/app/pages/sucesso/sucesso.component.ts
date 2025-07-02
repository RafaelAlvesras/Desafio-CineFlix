import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.css']
})
export class SucessoComponent {
  pedido: any;

  constructor(private router: Router) {
    this.pedido = this.router.getCurrentNavigation()?.extras?.state;
  }

  voltarHome() {
    this.router.navigate(['/']);
  }
}
