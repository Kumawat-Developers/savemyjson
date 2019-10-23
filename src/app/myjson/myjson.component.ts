
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { AppService } from '../app.service';
import { AppModel, AppStatus } from '../shared/appModel';
@Component({
  selector: 'app-myjson',
  templateUrl: './myjson.component.html',
  styleUrls: ['./myjson.component.css']
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
  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOption = new JsonEditorOptions();
    this.editorOption.modes = ['code', 'text', 'tree', 'view'];
  }

  ngOnInit() {

    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.myJsonId = id;
    this.appService.get(id).subscribe(

      data => {
        console.log(data);
        this.json = data;
        this.appModel = data;
        console.log(this.appModel.flashlight);
        this.data = this.json;
      });
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
