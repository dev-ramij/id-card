import { Component, OnInit } from '@angular/core';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementId: 'myTableElementId', // the id of html/table element
  }
  constructor(private exportAsService: ExportAsService) { }

  ngOnInit() {
  }

  public photo: any;
  public logo: any;

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR

  }

  loadPhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.photo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  loadLogo(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.logo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
