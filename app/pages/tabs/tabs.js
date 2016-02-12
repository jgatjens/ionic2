import {Page} from 'ionic/ionic';
import {NotificationPage} from '../notification/notification';
import {HomePage} from '../home/home';
import {Page3} from '../page3/page3';
import {SettingsPage} from '../settings/settings';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tabHomeRoot = HomePage;
    this.tabNotificationRoot = NotificationPage;
    this.tab3Root = Page3;
    this.tabSettingsRoot = SettingsPage;
  }
}
