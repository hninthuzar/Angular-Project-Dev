import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';

export interface DialogData {
  customerData ;
  saleData;
}

@Component({
  selector: 'app-dailogsalepopup',
  templateUrl: './dailogsalepopup.component.html',
  styleUrls: ['./dailogsalepopup.component.css']
})
export class DailogsalepopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DailogsalepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  rowSelectedCust(args: RowSelectEventArgs) {
    this.data.customerData = args.data;
  }

  rowSelectedSale(args: RowSelectEventArgs) {
    this.data.saleData = args.data;
  }

}


