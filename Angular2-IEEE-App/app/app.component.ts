import { Component , OnInit} from '@angular/core';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app',
templateUrl:"app/app.component.html"
})
export class AppComponent implements OnInit  { 

    pageTitle: string = "IEEEtalks";

    ngOnInit():void{
             
    }
}