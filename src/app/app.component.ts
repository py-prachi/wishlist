import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishitems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
imports:[CommonModule , FormsModule]
  
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("Learn Angular"),
    new WishItem("Have a coffee", true),
    new WishItem("drink Water")
  ];
  newWishText = '';
  filterOption = '0';

  addNewWish(){
    console.log(this.newWishText);
    this.items.push(new WishItem(this.newWishText, false ))
    this.newWishText = '' 
  }

  
  get visibleItems(): WishItem[]{
    let value = this.filterOption;
    if (value === '0'){
      return(this.items)
    }else if(value === '1'){
     return this.items.filter(item => item.isComplete)
    }else{
      return this.items.filter(item => !item.isComplete)
    }
  }
  
  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
  
  title = 'wishlist';
}
