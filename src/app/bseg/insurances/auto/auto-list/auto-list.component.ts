import {Component, OnInit} from '@angular/core';
import {AutoService} from '../../../../services/auto.service';
import swal from 'sweetalert2'
import {ExtractorService} from "../../../../services/extractor.service";

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  public autoInsurances: any;
  public insurer: any;

  constructor(private db: AutoService, private _extractor: ExtractorService) {
  }

  ngOnInit() {
    this.getAll()
  }

  public getAll(): void {
    this.db
      .index()
      .subscribe(data => this.autoInsurances = data, error => console.log('erro ao trazer dados da apolice', error))
  }

  public show(id: any): void {
    this.db
      .show(id)
      .subscribe(success => this.insurer = success, error => swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não foi possivel encontrar o seguro'
      }))

  }

  public destroy(id: any): void {
    this.db
      .destroy(id)
      .subscribe(success => {
        this.getAll();
        swal(
          'Sucesso',
          'Seguro removido com sucesso',
          'success'
        )
      }, error => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Não foi possivel remover o seguro'
        })
      })
  }

  public extract(){
    console.log('clicou nessa buxita aqui')
    this._extractor.index();
  }

}
