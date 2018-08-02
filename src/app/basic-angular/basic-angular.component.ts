import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-angular',
  templateUrl: './basic-angular.component.html',
  styleUrls: ['./basic-angular.component.css']
})
export class BasicAngularComponent implements OnInit {


  isDisable = false;
  nama = '';


  daftarSiswa = [

    {nama: 'HERI'},
    {nama: 'ASKO'},
    {nama: 'ALBERT'}

  ];


  onClickThisButton() {
    this.isDisable = !this.isDisable;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
