import {Page} from 'ionic/ionic';

var fakeData = [
  {
    username: {
      fullname: 'Jairo Gätjens',
      picture: 'https://avatars3.githubusercontent.com/u/1598461?v=3&s=460'
    },
    product: {
      date: 'November 5, 2015',
      timeago: '11h ago',
      price: '$36',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      picture: 'https://images-na.ssl-images-amazon.com/images/I/71ewySR5fvL._UL1500_.jpg',
      remerch: 15,
      likes: 10,
      bookmark: 25
    }
  },
  {
    username: {
      fullname: 'Jairo Gätjens',
      picture: 'https://avatars2.githubusercontent.com/u/1964040?v=3&s=460'
    },
    product: {
      date: 'Andres Gätjens',
      timeago: '11h ago',
      price: '$46',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      picture: 'http://ionicframework.com/dist/preview-app/www/img/nin-live.png',
      remerch: 10,
      likes: 39,
      bookmark: 14
    }
  },
  {
    username: {
      fullname: 'Hangar',
      picture: 'https://avatars3.githubusercontent.com/u/3650101?v=3&s=200'
    },
    product: {
      date: 'Andres Gätjens',
      timeago: '11h ago',
      price: '$46',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      picture: 'http://ecx.images-amazon.com/images/I/41RQ1qL8dqL._SY300_.jpg',
      remerch: 5,
      likes: 30,
      bookmark: 20
    }
  },
];

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    this.hash = 'my';
    this.items = fakeData;
  }

  getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min, 10);
  }

  doRefresh(refresher) {
    console.debug('Refreshing!', refresher);

    setTimeout(() => {
      console.debug('Pull to refresh complete!', refresher);
      refresher.complete();
      // const number = this.getRandomArbitrary(1, this.items.length);
      // this.items.unshift(this.items[number]);

    })
  }

  doPulling(amt) {
    console.debug('You have pulled', amt);

    if (amt > 50) {

    }
  }
}
