import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { AppService } from '../app.service';
import { AppModel, AppStatus } from '../shared/appModel';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard'
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
  public api: any;
  public url: any;
  public _id: any;

  public json: string;
  public isApiLink: boolean = false;
  public isURL: boolean = false;

  public appModel: AppModel;
  public appStatus: AppStatus;
  public appData: any;
  public existingJson = [];
  router: Router;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true }) editorr: JsonEditorComponent;

  constructor(private appService: AppService, router: Router, private _clipboardService: ClipboardService, private _router: Router,) {
    this.router = router;
    this.appModel = new AppModel();

    this.editorOption = new JsonEditorOptions();
    this.editorOption.mode = 'code';
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
    this.existingJson = [];

    var jsonValues = JSON.parse(localStorage.getItem("savemyjson") || "[]");
    this.existingJson = jsonValues;
    console.log(this.existingJson);

  }

  getData(event: Event) {
    this.data = this.editor.get();
    this.appService.post(this.data, 1);
  }

  postData() {
    this.newData = this.editorr.get();
    // this.appService.postAdd(this.newData).toPromise().then(data => {
    //   this.appData = data;
    //   this.appStatus = this.appData;
    //   this.router.navigateByUrl('myjson/' + this.appStatus.postid);
    // });
    let userData = {
      json: JSON.stringify(this.newData),
      timestamps: Date.now().toString(),
      isPro: "false",
      isActive: "true"
    }

    this.appService.saveJson(userData).subscribe((res) => {
      debugger
      console.log(res._id);
      this._id = res._id;
      this.url = "https://savemyjson.kumawat.co.in/" + res._id;
      this.api = "https://thread-frost-buffet.glitch.me/find?id=" + res._id
      this.isApiLink = true;
      this.isURL = true;
      let request = {
        "timestamp": Date.now().toString(),
        "id": res._id,
        "url": this.url,
        "api": this.api
      }
      var jsonValues = JSON.parse(localStorage.getItem("savemyjson") || "[]");
      jsonValues.push(request);
      localStorage.setItem('savemyjson', JSON.stringify(jsonValues));

    });



    console.log(this.newData);
  }

  copyUrl() {
    this._clipboardService.copy(this.url);
    this._router.navigate(['/myjson/' + this._id]);
  }
  copyAPI() {
    this._clipboardService.copy(this.api);
  }
  copyLink(val){
    this._clipboardService.copy(this.api); 
  }
  kkk() {

    var users = JSON.parse(localStorage.getItem("savemyjson") || "[]");

    let request = {
      "timestamp": Date.now().toString(),
      "id": "l",
      "url": "https://savemyjson.kumawat.co.in/",
      "api": "https://thread-frost-buffet.glitch.me/find?id="
    }
    users.push(request);
    localStorage.setItem('savemyjson', JSON.stringify(users));
  }
}
