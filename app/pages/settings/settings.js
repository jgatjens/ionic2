import {Page, NavController} from 'ionic/ionic';
import {ProfilePage} from './profile/profile';
import {BlankPage} from '../blank/blank';

@Page({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  openProfile() {
    this.nav.push(ProfilePage);
  }

  openPage() {
    this.nav.push(BlankPage);
  }
}
