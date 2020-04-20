import { ConfirmDialogModel,ConfirmationdialogComponent } from './../confirmationdialog/confirmationdialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
  result: string = '';
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  register(regForm:any){
    debugger;
    let firstname=regForm.controls.firstname.value;
    let lastname=regForm.controls.lastname.value;
    let email=regForm.controls.email.value;
    console.log(regForm);
  }
  confirmDialog(): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }
}
