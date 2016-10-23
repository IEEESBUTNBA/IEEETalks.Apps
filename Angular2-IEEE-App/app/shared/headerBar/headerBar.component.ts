import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'headerBar',
  templateUrl: "headerBar.component.html",
  host: {'(document:click)': 'handleClick($event)'}
})
export class HeaderBarComponent {
  menu: string = 'menu hide-menu';
  isOpen:boolean=false;
  clickOutside:boolean=false;
 
  constructor(private _router:Router){  
   
  }

 handleClick(e){
     if(e.target.id==='shape-menu'){
       this.clickOutside=false;
     }else{
       this.clickOutside=true;
     }
     if(this.clickOutside===false)
     {      
       this.openMenu();
     }
      if(this.clickOutside===true && this.isOpen===true)
     {        
       this.openMenu();
     }    
  }

 
  openMenu(): void {  
          if (this.menu === 'menu hide-menu') {
          this.menu = 'menu'; 
          this.isOpen=true;    
        } else {          
          this.menu = 'menu hide-menu';
          this.isOpen=false;       
        }             
  }

  goEventsList():void{
      this._router.navigate(['./events']);
      this.openMenu();
  }
}