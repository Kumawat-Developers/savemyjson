import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { AppService } from './app.service';
import { appModel } from './shared/appModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public editorOptions: JsonEditorOptions;
  public editorOption: JsonEditorOptions;
  public data: any;
  public newData: any;
  
  public json:string; 
  
  public appModel:appModel;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  @ViewChild(JsonEditorComponent, { static: true }) editorr: JsonEditorComponent;
  
  title = 'Angularcall';

  constructor(private appService:AppService) { 
    
    this.appModel=new appModel();
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOption = new JsonEditorOptions()
    this.editorOption.modes = ['code', 'text', 'tree', 'view'];
    this.appService.get(1).subscribe(
    
      data=>{
    
        console.log(data);
        this.json=data;
        this.appModel=data;
        console.log(this.appModel.flashlight);
        this.data=this.json;
      }    );  
    // set all allowed modes
    //this.options.mode = 'code'; //set only one mode
      //this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
     
  }
  getData(event:Event){
    this.data= this.editor.get();
console.log(this.data);
this.appService.post(this.data,1);

  }
  postData()
  {
    debugger
    this.newData= this.editorr.get();
    this.appService.postAdd(this.newData).toPromise().then(data=>{
      var stringify=JSON.stringify(data, ["post_id"]);
      console.log("kamlshkns"+stringify);
      alert(stringify);
      
    });
    console.log( this.newData);
  }
  
}
