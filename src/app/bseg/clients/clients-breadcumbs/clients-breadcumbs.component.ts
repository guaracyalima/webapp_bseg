import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-breadcumbs',
  templateUrl: './clients-breadcumbs.component.html',
  styleUrls: ['./clients-breadcumbs.component.css']
})
export class ClientsBreadcumbsComponent implements OnInit {

  public pagedescription: string = 'Clientes e leads';
  constructor() { }

  ngOnInit() {
  }

}
