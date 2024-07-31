import { Component, OnInit } from '@angular/core';
import { WishItem } from './shared/models/wishitems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];
  localItem: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem('items');
      if (this.localItem == null) {
        this.items = [];
      } else {
        this.items = JSON.parse(this.localItem) as WishItem[];
      }
    }
  }

  filter: any = () => {};
  ngOnInit(): void {}

  addItem(item: WishItem) {
    this.items.push(item);
    this.saveItems();
  }

  deleteItem(item: WishItem) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.saveItems();
  }

  saveItems() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
}
