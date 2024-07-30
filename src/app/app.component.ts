import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishitems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
imports: [CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent]
  
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("Learn Angular"),
    new WishItem("Have a coffee", true),
    new WishItem("drink Water")
  ];

  filter: any = () => {};
  
}
