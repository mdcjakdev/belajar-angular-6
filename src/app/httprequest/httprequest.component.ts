import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HttprequestComponent implements OnInit {


  userId: number;
  id: number;
  title: string;
  body: string;
  data: any;


  constructor(private  servicePlaceHolder: JsonplaceholderService) {
  }

  ngOnInit() {
  }


  /**
   * Handling untuk proses save data ke service
   */
  saveData() {
    const p = {   // Data dari inputan user
      userId: this.userId,
      id: this.id,
      title: this.title,
      body: this.body
    };

    // response dari server (Harus di subscribe)
    this.servicePlaceHolder.postData(p).subscribe(
      // proses selesai dan tidak terjadi error
      (status) => console.log(status),

      // jika terjadi error
      (e) => console.log('gagal', e),

      // proses slesai entah error atau tidak
      () => console.log('Berhasil')
    );
  }

  /**
   * Handling untuk proses request data ke service
   */
  getData() {
    this.servicePlaceHolder.getData().subscribe(
      (v) => this.data = v,
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );


  }


}
