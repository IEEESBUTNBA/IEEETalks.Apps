import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";

import{IContributor} from '../aboutUs-entities/Contributor';
import {AboutService } from '../aboutUs-service/aboutUs.service';



@Component({
    moduleId:module.id,
    templateUrl: "aboutUs.component.html",
    selector:"list"   
})
export class AboutUs implements OnInit{
    
    contributorsList:IContributor[];

    constructor(private _aboutUsService:AboutService){
      
      
    }
    
    ngOnInit():void{
        this.getContributor();
       
    }

    getContributor(){
        this._aboutUsService.getContributors()
        .subscribe(data=>this.contributorsList=data); 
       }
   
}

