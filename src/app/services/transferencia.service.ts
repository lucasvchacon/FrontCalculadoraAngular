import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia) {

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  salvar(transferencia: Transferencia){
    return this.httpClient.put<Transferencia>(this.url, transferencia);
  }

}



