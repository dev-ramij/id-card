import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss']
})
export class DialogTemplateComponent implements OnInit {

  constructor(private shareData: SharedDataService, public dialogRef: MatDialogRef<DialogTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // @Output() public selectedTemplate = new EventEmitter();
  ngOnInit() {
  }

  chooseAsTemplate(value: string) {
    // this.selectedTemplate.emit(value);
    this.shareData.selectedTemplate.next(value);
    this.dialogRef.close();
  }


}
