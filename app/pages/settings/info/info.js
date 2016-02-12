import {Page, NavController} from 'ionic/ionic';
import {BlankPage} from '../../blank/blank';

@Page({
  templateUrl: 'build/pages/profile/info/info.html'
})
export class Profile {
  constructor(nav: NavController) {
    debugger;
    this.nav = nav;
    this.blankPage = BlankPage;
  }

  openPage() {
    this.nav.push(BlankPage);
  }
}
