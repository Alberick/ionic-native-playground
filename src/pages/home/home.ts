import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

import Plugins from '../../plugins';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plugins = Plugins;

  constructor(
    private navCtrl: NavController
  ) {}

  show(plugin: any) {
    this.navCtrl.push(plugin.component, plugin.params);
  }

}

