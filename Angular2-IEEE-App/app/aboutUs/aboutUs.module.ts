import { NgModule }      from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {AboutUsRoutingModule} from './aboutUs-routes/aboutUs-routing.module';
import {AboutUs} from './aboutUs/aboutUs.component';

@NgModule({
    imports:[SharedModule,AboutUsRoutingModule],
    declarations:[AboutUs]
})
export class AboutUsModule{

}