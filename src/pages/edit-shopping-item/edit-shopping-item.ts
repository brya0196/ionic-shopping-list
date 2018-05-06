import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService) {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
  }

  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
