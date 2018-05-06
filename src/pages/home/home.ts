import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from '@firebase/util';
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppinglist$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    this.shoppinglist$ = this.shopping
      .getShoppinglist() // db list
      .snapshotChanges() //key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

}
