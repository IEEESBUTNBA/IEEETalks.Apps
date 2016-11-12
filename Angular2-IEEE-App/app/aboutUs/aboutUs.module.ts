import { NgModule }      from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {AboutUsRoutingModule} from './aboutUs-routes/aboutUs-routing.module';
import {AboutUs} from './aboutUs/aboutUs.component';
import {AboutService} from './aboutUs-service/aboutUs.service';

@NgModule({
    imports:[SharedModule,AboutUsRoutingModule],
    declarations:[AboutUs],
    providers:[AboutService]
})
export class AboutUsModule{

}