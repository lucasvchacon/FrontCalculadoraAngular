import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  sexo: number;
  dataNascimento: number;
  ano: number;
  dias: number;
  diasAverbado: number;
  diasLicencaPremio: number;
  homem: number;
  mulher: number;


  transferir() {
    console.log('Solicitada adicionar valores a tabela de extrato');
    const valorEmitir = {
    dataNascimento: this.dataNascimento,
    ano: this.ano, dias: this.dias,
    diasAverbado: this.diasAverbado,
    diasLicencaPremio: this.diasLicencaPremio,
    homem: this.homem, mulher: this.mulher,
    estado: 'leitura'
    };

    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
    }

  limparCampos(){
    this.dataNascimento = null;
    this.ano = null;
    this.dias = null;
    this.diasAverbado = null;
    this.diasLicencaPremio = null;
    this.homem = null;
    this.mulher = null;

  }
}
