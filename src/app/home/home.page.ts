import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    requestObject:any = null;
    constructor(private http: HTTP) {}

    getRequest(){
      this.http.get('https://jsonplaceholder.typicode.com/todos/1', {}, {})
  .then(res =>this.requestObject =res.data)
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
    }

  public catagories = [
    'Food',
    'Travel',
    'Clothing',
    'Mobiles',
    'Recharges',
    'Electronice',
    'Footwear',
    'Bus',
    'Laptops',
    'Pharmacy',
    'Furniture',
    'Hotels'
  ];

}
