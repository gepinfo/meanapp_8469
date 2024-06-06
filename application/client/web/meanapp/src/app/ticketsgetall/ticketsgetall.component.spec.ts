import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsgetallComponent } from './ticketsgetall.component';
import { TicketsgetallService } from './ticketsgetall.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketsgetallComponent } from './ticketsgetall.component';
import { AgGridModule } from 'ag-grid-angular';


describe('TicketsgetallComponent', () => {
  let component: TicketsgetallComponent;
  let fixture: ComponentFixture<TicketsgetallComponent>;
  let service: TicketsgetallService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        AgGridModule,
      ],
      declarations: [ TicketsgetallComponent ],
      providers: [ TicketsgetallService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsgetallComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TicketsgetallService);
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
    expect(component.tickets.created_by).toEqual(mockEmail);

  });
  


  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData = [{ 
      _id: 1, 
      name: 'tickets 1',
      description: 'tickets 1',
      types: 'tickets 1',
      severity: 'tickets 1',
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