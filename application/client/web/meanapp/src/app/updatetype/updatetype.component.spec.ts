import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetypeComponent } from './updatetype.component';
import { UpdatetypeService } from './updatetype.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatetypeComponent } from './updatetype.component';


describe('UpdatetypeComponent', () => {
  let component: UpdatetypeComponent;
  let fixture: ComponentFixture<UpdatetypeComponent>;
  let service: UpdatetypeService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ UpdatetypeComponent ],
      providers: [ UpdatetypeService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetypeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UpdatetypeService);
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
    spyOn(component, 'GetEntityById');
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.types.created_by).toEqual(mockEmail);

    expect(component.GetEntityById).toHaveBeenCalled();
  });
  




   //update test case files
  it('should clear Component types properties on successful update', () => {
    spyOn(service, 'Update').and.returnValue(of({}));

    component.Update();

    // Expect the types properties to be reset
    expect(component.types.name).toBe('');
    expect(component.types.description).toBe('');
  });

  it('should log error on Update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Update').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });







  // get noun by id
  it('should update tickets when types Component service returns data', () => {
    const mockData = { 
      _id: '323', 
      name: 'name 1',
      description: 'description 1',
    };
    spyOn(service, 'GetEntityById').and.returnValue(of(mockData));

    component.GetEntityById();

    expect(service.GetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(component.types).toEqual(mockData);
  });

  it('should log error when service throws an error', () => {
    const mockError = new Error('Mock error');
    spyOn(service, 'GetEntityById').and.returnValue(throwError(() => {
      return mockError;
    }));
    spyOn(console, 'log');

    component.GetEntityById();

    expect(service.GetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(console.log).toHaveBeenCalledWith('Error', mockError);
  });







});