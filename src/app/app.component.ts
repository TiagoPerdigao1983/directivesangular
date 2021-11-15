import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c=',
    },
    {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/winter-in-the-sequoias-picture-id1292624259?b=1&k=20&m=1292624259&s=170667a&w=0&h=WscmgT6QsmwxKfPhlOGbHQMSU8TFPakxQW7TNioKNSc=',
    },
    {
      title: 'At the City',
      url: 'https://media.istockphoto.com/photos/modern-office-building-close-up-in-sunlight-picture-id1269677040?b=1&k=20&m=1269677040&s=170667a&w=0&h=p1Eq57auomnSAB09BsNdgi1KWOKwHIYCqOq-ZGBmUiw=',
    },
    {
      title: 'At the Snow',
      url: 'https://media.istockphoto.com/photos/pine-tree-background-for-christmas-decoration-with-snow-and-defocused-picture-id1270970178?b=1&k=20&m=1270970178&s=170667a&w=0&h=gR2_RBhjTY54-XRUqk7cU71Kgs_dcqL6j-i78daefDc=',
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c=',
    },
    {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/winter-in-the-sequoias-picture-id1292624259?b=1&k=20&m=1292624259&s=170667a&w=0&h=WscmgT6QsmwxKfPhlOGbHQMSU8TFPakxQW7TNioKNSc=',
    },
    {
      title: 'At the City',
      url: 'https://media.istockphoto.com/photos/modern-office-building-close-up-in-sunlight-picture-id1269677040?b=1&k=20&m=1269677040&s=170667a&w=0&h=p1Eq57auomnSAB09BsNdgi1KWOKwHIYCqOq-ZGBmUiw=',
    },
    {
      title: 'At the Snow',
      url: 'https://media.istockphoto.com/photos/pine-tree-background-for-christmas-decoration-with-snow-and-defocused-picture-id1270970178?b=1&k=20&m=1270970178&s=170667a&w=0&h=gR2_RBhjTY54-XRUqk7cU71Kgs_dcqL6j-i78daefDc=',
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c=',
    },
    {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/winter-in-the-sequoias-picture-id1292624259?b=1&k=20&m=1292624259&s=170667a&w=0&h=WscmgT6QsmwxKfPhlOGbHQMSU8TFPakxQW7TNioKNSc=',
    },
    {
      title: 'At the City',
      url: 'https://media.istockphoto.com/photos/modern-office-building-close-up-in-sunlight-picture-id1269677040?b=1&k=20&m=1269677040&s=170667a&w=0&h=p1Eq57auomnSAB09BsNdgi1KWOKwHIYCqOq-ZGBmUiw=',
    },
    {
      title: 'At the Snow',
      url: 'https://media.istockphoto.com/photos/pine-tree-background-for-christmas-decoration-with-snow-and-defocused-picture-id1270970178?b=1&k=20&m=1270970178&s=170667a&w=0&h=gR2_RBhjTY54-XRUqk7cU71Kgs_dcqL6j-i78daefDc=',
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c=',
    },
    {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/winter-in-the-sequoias-picture-id1292624259?b=1&k=20&m=1292624259&s=170667a&w=0&h=WscmgT6QsmwxKfPhlOGbHQMSU8TFPakxQW7TNioKNSc=',
    },
    {
      title: 'At the City',
      url: 'https://media.istockphoto.com/photos/modern-office-building-close-up-in-sunlight-picture-id1269677040?b=1&k=20&m=1269677040&s=170667a&w=0&h=p1Eq57auomnSAB09BsNdgi1KWOKwHIYCqOq-ZGBmUiw=',
    },
    {
      title: 'At the Snow',
      url: 'https://media.istockphoto.com/photos/pine-tree-background-for-christmas-decoration-with-snow-and-defocused-picture-id1270970178?b=1&k=20&m=1270970178&s=170667a&w=0&h=gR2_RBhjTY54-XRUqk7cU71Kgs_dcqL6j-i78daefDc=',
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c=',
    },
    {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/winter-in-the-sequoias-picture-id1292624259?b=1&k=20&m=1292624259&s=170667a&w=0&h=WscmgT6QsmwxKfPhlOGbHQMSU8TFPakxQW7TNioKNSc=',
    },
    {
      title: 'At the City',
      url: 'https://media.istockphoto.com/photos/modern-office-building-close-up-in-sunlight-picture-id1269677040?b=1&k=20&m=1269677040&s=170667a&w=0&h=p1Eq57auomnSAB09BsNdgi1KWOKwHIYCqOq-ZGBmUiw=',
    },
    {
      title: 'At the Snow',
      url: 'https://media.istockphoto.com/photos/pine-tree-background-for-christmas-decoration-with-snow-and-defocused-picture-id1270970178?b=1&k=20&m=1270970178&s=170667a&w=0&h=gR2_RBhjTY54-XRUqk7cU71Kgs_dcqL6j-i78daefDc=',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
