import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule]
})
export class CrudComponent {
  id: number = 0;
  pessoa: any;

  constructor(private pessoaService: PessoaService) { }

  buscarPessoa() {
    this.pessoaService.getPessoaById(this.id).subscribe(
      data => {
        this.pessoa = data;
      },
      error => {
        console.error('Erro ao buscar pessoa:', error);
      }
    );
  }
}
