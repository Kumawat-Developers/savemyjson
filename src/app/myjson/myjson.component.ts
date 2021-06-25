
import { ActivatedRoute, Params } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { AppService } from '../app.service';
import { AppModel, AppStatus } from '../shared/appModel';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-myjson',
  templateUrl: './myjson.component.html',
  styleUrls: ['./myjson.component.css'],
  providers: [MessageService]
})
export class MyjsonComponent implements OnInit {
  public data: any;
  public appData: any;
  public myJsonId;
  public json: string;
  public appModel: AppModel;
  public appStatus: AppStatus;
  public newData: any;
  public editorOptions: JsonEditorOptions;
  public editorOption: JsonEditorOptions;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true }) editorr: JsonEditorComponent;
  constructor(private route: ActivatedRoute, private ngxService: NgxUiLoaderService, private messageService: MessageService, private appService: AppService) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOption = new JsonEditorOptions();
    this.editorOption.modes = ['code', 'text', 'tree', 'view'];
  }

  ngOnInit() {


    this.route.params.subscribe((params: Params) => {
      this.ngxService.start();
      let id = params["id"];


      console.log(id);

      this.myJsonId = id;
      this.appService.findJson(id).subscribe(

        data => {
          console.log(JSON.parse(data.json));
          this.json = JSON.parse(data.json);
          this.data = JSON.parse(data.json);
          //this.appModel = data;
          console.log(JSON.stringify(data.json));
          //this.data = this.json;
          this.ngxService.stop();
        }, (error) => {
          this.ngxService.stop();
          this.showError();
        });
    });




  }
  showSuccess() {
    this.messageService.add({ sticky: true, severity: 'success', summary: 'Success', detail: 'Success' });
  }
  showError() {
    this.messageService.add({ sticky: true, severity: 'error', summary: 'Error', detail: 'Something went wrong.' });
  }
  getData(event: Event) {

    this.data = this.editor.get();
    console.log(this.data);
    this.appService.post(this.data, this.myJsonId);

  }

  postData() {

    this.newData = this.editorr.get();
    this.appService.postAdd(this.newData).toPromise().then(data => {
      this.appData = data;
      this.appStatus = this.appData;
    });
    console.log(this.newData);
  }

}
