import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {SearchService} from "../../services/search.service";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [SearchService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input search', () => {
    const el = fixture.debugElement.query(By.css('#searchInput'));
    expect(el).toBeTruthy();
  });

  it('should have a table', () => {
    const el = fixture.debugElement.query(By.css('#listTable'))
    expect(el).toBeTruthy();
  });

  it('should bind the search data to its FormControl', () => {
    const el = fixture.debugElement.query(By.css('#searchInput'));
    const ctrl = component.form.get('search');

    const dummyValue = 'sirangelo';
    ctrl?.setValue(dummyValue);
    fixture.detectChanges();

    expect(el.nativeElement.value).toEqual(dummyValue);
    expect((el.nativeElement as HTMLInputElement).value).toEqual(dummyValue);
  });

  it('should mark search as INVALID when it has no value', () => {
    const ctrl = component.form.get('search');
    ctrl?.setValue(null);
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('should mark search as VALID when it has value', () => {
    const ctrl = component.form.get('search');
    ctrl?.setValue('a');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should call the submitForm when the firm is submitted', () => {
    spyOn(component, 'isValid').and.returnValue(true);
    const ctrl = component.form.get('search');
    const dummyValue = 'sirangelo';
    ctrl?.setValue(dummyValue);
    fixture.detectChanges();
    component.onSubmit();
  });

});
