import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((x) => (this.transferencias = x));
  }
  apaga(index) {
    this.transferencias.splice(index, 1);
  }
  edicao(idTransferencia) {
    this.transferencias.forEach((t) => {
      if (t.id === idTransferencia) {
        t.estado = 'escrita';
      }
    });
  }
  salvar() {
    this.transferencias.forEach((t) => {
      this.service.salvar(t).subscribe((x) => console.log(x));
    });
  }
}
