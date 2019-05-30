import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  list: any;
  constructor(private http: HTTP, private platform: Platform) {
  }

  ngOnInit(): void {
    // wait for
    this.platform.ready().then(() => {
      this.getPhotos();
    });
  }
  getPhotos() {
    this.http.get(`https://jsonplaceholder.typicode.com/photos`, {}, {}).then(res => {
      console.log(JSON.parse(res.data));
      this.list = JSON.parse(res.data);
    }).catch(err => {
      console.error(err);
    });
  }
}
