import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

//rxjs
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs'
declare var jquery: any;
declare var $: any;
import swal from 'sweetalert2'


import { EOService } from '../../../../services/eo.service';

@Component({
  selector: 'app-eo-form',
  templateUrl: './eo-form.component.html',
  styleUrls: ['./eo-form.component.css']
})
export class EoFormComponent implements OnInit {

  private eoFile: any;
  constructor(private db: EOService, private _fb: FormBuilder) { }

  ngOnInit() {
  }

  public prepareFileToUpload(event): void {
    this.eoFile = (<HTMLInputElement>event.target).files
  }

  formAddEOInsurer = this._fb.group({
    insurer: this._fb.control('', [Validators.required]),
    apoliceNumber: this._fb.control('', [Validators.required]),
    validity: this._fb.control('', [Validators.required]),
    accession: this._fb.control('', [Validators.required]),
    classification: this._fb.control('', [Validators.required]),
    input: this._fb.control('', ),
    value: this._fb.control('', ),
    totalOfPortions: this._fb.control('', ),
    paymentForm: this._fb.control('', ),
    portion: this._fb.control('', ),
    date: this._fb.control('', ),
    portionValue: this._fb.control('', ),
    cpf: this._fb.control('', [Validators.required]),
    name: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required]),
    birth: this._fb.control('', [Validators.required]),
    taker: this._fb.control('', [Validators.required]),
    cnpj: this._fb.control('', [Validators.required]),
    coverageArray: this._fb.array([]),

  });

  addConverageOfEOInsurer() {
    let co = this.formAddEOInsurer.get('coverageArray') as FormArray;
    co.push(this.createCoverageOfEOInsurerInput())
  }

  createCoverageOfEOInsurerInput(): FormGroup {
    return this._fb.group({
      coverage: this._fb.control('', ),
      value: this._fb.control('', ),
      franchise: this._fb.control('', ),
    })
  }

  public create() {
    this.db.create(this.formAddEOInsurer.value).subscribe(success => {
      swal(
        'Sucesso',
        'Seguro cadastrado com sucesso',
        'success'
      );
      $('#modal-add-civl-and-professional-responsors').modal('hide')
    }, error => {
      swal(
        'ERRO',
        'Erro ao cadastrar seguro',
        'error'
      );
    })
  }

  get formData() {
    return <FormArray>this.formAddEOInsurer.get('coverageArray');
  }

}
