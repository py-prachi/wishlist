import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from '../shared/models/wishitems';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent  implements OnInit {
 @Input() wishes: WishItem[]  =[];
 @Output() delete:EventEmitter<WishItem> = new EventEmitter();

 constructor(){}

 ngOnInit(): void {
   
 }

 toggleItem(item:WishItem){
  item.isComplete = !item.isComplete
  console.log(item)
}

onDelete(item:WishItem){
  console.log('on delete has been triggered');
  this.delete.emit(item)
}

}
