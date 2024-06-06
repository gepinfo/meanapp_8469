import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallseverityComponent } from './getallseverity.component';
import { GetallseverityService } from './getallseverity.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallseverityComponent } from './getallseverity.component';
import { AgGridModule } from 'ag-grid-angular';


describe('GetallseverityComponent', () => {
  let component: GetallseverityComponent;
  let fixture: ComponentFixture<GetallseverityComponent>;
  let service: GetallseverityService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        AgGridModule,
      ],
      declarations: [ GetallseverityComponent ],
      providers: [ GetallseverityService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallseverityComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GetallseverityService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.severity.created_by).toEqual(mockEmail);

  });
  


  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData = [{ 
      _id: 1, 
      name: 'severity 1',
      description: 'severity 1',
    }];
    spyOn(service, 'GetAllValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllValues).toHaveBeenCalled();
    expect(component.rowData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });








});