import { Friend } from './../../models/team.models';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TeamListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html',
})
export class TeamListPage {

  friends:Friend;
  picture:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.picture=this.navParams.get("category");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamListPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
