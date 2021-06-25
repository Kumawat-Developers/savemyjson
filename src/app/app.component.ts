import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { MessageService } from 'primeng/api';
import { AppService } from './app.service';
import { AppModel, AppStatus } from './shared/appModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {

  public editorOptions: JsonEditorOptions;
  public editorOption: JsonEditorOptions;
  public data: any;
  public newData: any;
  public json: string;
  public appModel: AppModel;
  public appStatus: AppStatus;
  public appData: any;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true }) editorr: JsonEditorComponent;

  title = 'Angularcall gfgfd';

  constructor(private appService: AppService,private messageService: MessageService) {

    this.appModel = new AppModel();
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOption = new JsonEditorOptions();
    this.editorOption.modes = ['code', 'text', 'tree', 'view'];
    this.appService.get(1).subscribe(

      data => {
        this.json = data;
        this.appModel = data;
        this.data = this.json;
      });

      setTimeout(() => {
        console.log("dasdas");
        
        this.messageService.add({
          severity: "success",
          summary: "Success Message",
          detail: "Order submitted"
        });
      }, 1000);

  }
  getData(event: Event) {
    this.data = this.editor.get();
    this.appService.post(this.data, 1);

  }
  postData() {
    this.newData = this.editorr.get();
    this.appService.postAdd(this.newData).toPromise().then(data => {
      this.appData = data;
      this.appStatus = this.appData;
    });

  }

}
