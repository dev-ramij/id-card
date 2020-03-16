import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExportAsModule } from 'ngx-export-as';
import { Template1Component } from './template/template1/template1.component';
import { GenerateIdCardComponent } from './generate-id-card/generate-id-card.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoTemplate1Component } from './demo-template/demo-template1/demo-template1.component';
import { DemoTemplate2Component } from './demo-template/demo-template2/demo-template2.component';
import { DemoTemplate3Component } from './demo-template/demo-template3/demo-template3.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedDataService } from './shared-data.service';
import { CreateNewInstituteComponent } from './create-new-institute/create-new-institute.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    GenerateIdCardComponent,
    DialogTemplateComponent,
    DemoTemplate1Component,
    DemoTemplate2Component,
    DemoTemplate3Component,
    CreateNewInstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExportAsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    RouterModule
  ],
  entryComponents: [
    DialogTemplateComponent
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
