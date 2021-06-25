import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { AppService } from '../app.service';
import { AppModel, AppStatus } from '../shared/appModel';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';
import { OnExecuteData } from 'ng-recaptcha';
@Component({
  selector: 'app-newjson',
  templateUrl: './newjson.component.html',
  styleUrls: ['./newjson.component.css'],
  providers: [MessageService, ReCaptchaV3Service]
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
  public todayQuote: string;
  public errors: string;
  private subscription: Subscription;
  router: Router;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true }) editorr: JsonEditorComponent;

  constructor(private recaptchaV3Service: ReCaptchaV3Service, private appService: AppService, private messageService: MessageService, private ngxService: NgxUiLoaderService, router: Router, private _clipboardService: ClipboardService, private _router: Router,) {
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
    this.getQuotes();
    this.subscription = this.recaptchaV3Service.onExecute
    .subscribe((data: OnExecuteData) => {
      console.log("DATA: ", data);
    });
  }
  public preSubmitForm(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => { 
        console.log("What do I do with this?: ", token)
      });
  }
  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  handleToken(val) {
    console.log("handleToken")
    console.log(val);
    ;

  }
  getData(event: Event) {
    this.data = this.editor.get();
    this.appService.post(this.data, 1);
  }
  showSuccess() {
    this.messageService.add({ sticky: true, severity: 'success', summary: 'Success', detail: 'Success' });
  }
  showError() {
    this.messageService.add({ sticky: true, severity: 'error', summary: 'Error', detail: 'Something went wrong.' });
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
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s

    this.appService.saveJson(userData).subscribe((res) => {

      this.ngxService.stop();
      console.log(res._id);
      this._id = res._id;
      this.url = "https://savemyjson.kumawat.co.in/myjson/" + res._id;
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
      this.showSuccess();
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
  copyLinks(val) {

    this._clipboardService.copy(val);
    window.open(val, "_blank");
  }
  copyLink(val) {
    console.log(val.replace("https://savemyjson.kumawat.co.in/", ""));

    this._clipboardService.copy(val);
    //  this._router.navigate([val.replace("https://savemyjson.kumawat.co.in/", "")]);
    window.open(val, "_blank");
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

  getQuotes() {
    this.appService.getQuotes().subscribe(

      data => {
        this.todayQuote = data[0].q;
        console.log(this.todayQuote);
      });


  }
}
