import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishitems';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] 
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("Learn Angular"),
    new WishItem("Have a coffee", true),
    new WishItem("drink Water")
  ];

  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
  
  title = 'wishlist';
}
