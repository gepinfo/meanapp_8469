import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateseverityComponent } from './createseverity.component';
import { CreateseverityService } from './createseverity.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateseverityComponent } from './createseverity.component';


describe('CreateseverityComponent', () => {
  let component: CreateseverityComponent;
  let fixture: ComponentFixture<CreateseverityComponent>;
  let service: CreateseverityService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ CreateseverityComponent ],
      providers: [ CreateseverityService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateseverityComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CreateseverityService);
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
  

  // Create test case file
  it('should call Create and reset  properties', () => {

    // Create a spy for the Create method of the service
    spyOn(service, 'Create').and.returnValue(of({}));
    
    // Set values for severity properties
    component.severity.name = 'Test name';
    component.severity.description = 'Test description';


    // Call the Create method
    component.Create();


    // Expect the Create method to have been called with the tickets object
    expect(service.Create).toHaveBeenCalledWith(component.severity);

    // Expect the severity properties to be reset
    expect(component.severity.name).toBe('');
    expect(component.severity.description).toBe('');
  });
  it('should log error on update Create failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'Create').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });









});