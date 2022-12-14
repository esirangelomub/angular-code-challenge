import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';


@NgModule({
  imports: [SearchRoutingModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
