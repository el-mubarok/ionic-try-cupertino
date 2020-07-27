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
    let setting = {
      darkMode: true
    }
    console.log(a);
    this.myPane = new CupertinoPane('.cupertino-pane', setting);
    this.myPane.present({animate: true});
  }

  openNow(){
    this.myPane.present({animate: true});
  }

}
