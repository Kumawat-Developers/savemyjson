import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { AppService } from '../app.service';
import { AppModel, AppStatus } from '../shared/appModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newjson',
  templateUrl: './newjson.component.html',
  styleUrls: ['./newjson.component.css']
})
export class NewjsonComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public editorOption: JsonEditorOptions;
  public data: any;
  public newData: any;

  public json: string;

  public appModel: AppModel;
  public appStatus: AppStatus;
  public appData: any;
  router: Router;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true }) editorr: JsonEditorComponent;

  constructor(private appService: AppService, router: Router) {
    this.router = router;
    this.appModel = new AppModel();
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOption = new JsonEditorOptions();
    this.editorOption.modes = ['code', 'text', 'tree', 'view'];
    this.appService.get(1).subscribe(

      data => {

        console.log(data);
        this.json = data;
        this.appModel = data;
        console.log(this.appModel.flashlight);
        this.data = this.json;
      });
  }

  ngOnInit() {
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
      this.router.navigateByUrl('myjson/' + this.appStatus.postid);
    });
    console.log(this.newData);
  }
}
