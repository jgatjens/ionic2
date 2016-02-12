import {Page} from 'ionic/ionic';

var card = `
  <ion-card>
    <ion-item>
      <ion-avatar item-left>
        <img src="https://avatars3.githubusercontent.com/u/1598461?v=3&s=460">
      </ion-avatar>
      <h2>Jairo Gätjens</h2>
      <p>November 5, 2015</p>
      <ion-badge item-right>$36</ion-badge>
    </ion-item>

    <img src="https://images-na.ssl-images-amazon.com/images/I/71ewySR5fvL._UL1500_.jpg">

    <ion-card-content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
    </ion-card-content>

    <ion-item>
      <button primary clear item-left>
        <ion-icon name="ionic"></ion-icon>
        <div>10</div>
      </button>
      <button primary clear item-left>
        <ion-icon name="ios-heart"></ion-icon>
        <div>35</div>
      </button>
      <button primary clear item-left>
        <ion-icon name="bookmark"></ion-icon>
        <div>35</div>
      </button>
      <ion-note item-right>
        11h ago
      </ion-note>
    </ion-item>
  </ion-card>
`;

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    this.hash = 'my';
  }

  doRefresh(refresher) {
    console.debug('Refreshing!', refresher);

    setTimeout(() => {
      console.debug('Pull to refresh complete!', refresher);
      refresher.complete();
    })
  }

  doStarting() {
    console.debug('Pull started!');
  }

  doPulling(amt) {
    console.debug('You have pulled', amt);
  }
}
