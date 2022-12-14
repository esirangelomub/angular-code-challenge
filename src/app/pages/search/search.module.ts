import {NgModule} from '@angular/core';

import {SearchRoutingModule} from './search-routing.module';

import {SearchComponent} from './search.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzListModule} from "ng-zorro-antd/list";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzAlertModule} from "ng-zorro-antd/alert";


@NgModule({
    imports: [
        SearchRoutingModule,
        ReactiveFormsModule,
        NzInputModule,
        NzListModule,
        NzButtonModule,
        CommonModule,
        NzTableModule,
        NzAvatarModule,
        NzAlertModule
    ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {
}
