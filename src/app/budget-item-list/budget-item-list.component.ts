import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material';
import { BudgetItem } from '../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BudgetItem){
    this.delete.emit(item);
  }
  onCardClicked(item: BudgetItem){
    //show the edit modal

    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data:item
    });

    dialogRef.afterClosed().subscribe(result =>{
      //Check if result has a value
      //Result is the update budget Item
      if(result){
        //Replace the item with the updated/submitted item from the form

        // this.budgetItems[this.budgetItems.indexOf(item)] = result;
        this.update.emit({
          old:item,
          new:result
        });
      }
    })
  }
}
export interface UpdateEvent{
  old: BudgetItem;
  new:BudgetItem;
}
