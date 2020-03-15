import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../dialog-template/dialog-template.component';
import { SharedDataService } from '../shared-data.service';

interface IInstituteDetails {
  name: string;
  contactNo: string;
  address: string;
  logo?: any;
}
@Component({
  selector: 'app-generate-id-card',
  templateUrl: './generate-id-card.component.html',
  styleUrls: ['./generate-id-card.component.scss']
})
export class GenerateIdCardComponent implements OnInit, OnDestroy {

  public instituteDetails: IInstituteDetails = {
    name: '',
    contactNo: '',
    address: ''
  };

  public showdemoTemplate: boolean = false;
  public showlogo: boolean = false;
  public selectedTemplate: string = '';
  constructor(public dialog: MatDialog, private sharedData: SharedDataService) { }

  ngOnInit() {
    this.sharedData.selectedTemplate.subscribe(s => this.selectedTemplate = s);
  }
  ngOnDestroy() {
    this.sharedData.selectedTemplate.unsubscribe();
  }
  saveTheDetails() {
    console.log(this.instituteDetails);
  }

  loadLogo(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.instituteDetails.logo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  openTemplateDialog() {
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
