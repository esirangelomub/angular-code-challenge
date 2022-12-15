import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Search} from "../../shared/search";
import {SearchService} from "../../services/search.service";
import {NzTableQueryParams} from "ng-zorro-antd/table";

export interface Data {
  avatar_url: string;
  login: number;
  type: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  loading = false;
  listOfData: Data[] = [];
  total = 0;
  pageSize = 39;
  pageIndex = 1;

  hasError = false;
  errorTitle = 'Error!';
  errorDescription = ''

  constructor(private service: SearchService) {
  }

  ngOnInit() {
    this.createForm(new Search());
  }

  createForm(search: Search) {
    this.form = new FormGroup({
      search: new FormControl(search.search, Validators.required)
    })
  }

  onSubmit() {
    if (!this.isValid()) {
      return;
    }
    this.loadDataFromServer();
  }

  isValid() {
    return this.form.valid;
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    if (!this.isValid()) {
      return;
    }
    this.pageIndex = params.pageIndex;
    this.loadDataFromServer();
  }

  loadDataFromServer() {
    this.loading = true;
    this.service.search(this.form.get('search')?.value, this.pageSize, this.pageIndex).subscribe(
      response => {
        this.listOfData = response.items;
        this.total = response.total_count;
        this.loading = false;
      },
      error => {
        this.hasError = true;
        this.loading = false;
        this.listOfData = [];
        this.errorDescription = error?.error?.message ?? 'Internal server error!';
      });

  }

  closeError() {
    this.hasError = false;
    this.pageIndex = 1;
    this.errorTitle = this.errorDescription = '';
  }

}
