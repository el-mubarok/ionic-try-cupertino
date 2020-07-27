import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CupertinoPane, CupertinoSettings } from 'cupertino-pane';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myPane: any
  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit(){
    let a = document.getElementsByClassName('cupertino-pane')
    console.log(a);
    this.myPane = new CupertinoPane('.cupertino-pane');
    this.myPane.present();
  }

  openNow(){
    this.myPane.present();
  }

}
