import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  // @Input() item:BudgetItem;
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem) { }

  ngOnInit() {
  }

  onSubmitted(updateditem:BudgetItem){
    this.dialogRef.close(updateditem);
  }

}
