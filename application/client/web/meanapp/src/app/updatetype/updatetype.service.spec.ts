import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UpdatetypeService } from './updatetype.service';
import { SharedService } from '../../shared/shared.service';

describe('updatetypeService', () => {
  let service: UpdatetypeService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ UpdatetypeService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(UpdatetypeService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });



  // gp update the test case
  it('should send a PUT request to the server', () => {
    const types = { 
      _id: '12dsadsa', 
      name: 'name 1'
      description: 'description 1'
    };
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.Update(types).subscribe(response => {
      expect(response).toEqual(types);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/types?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(types);

    // Flush the mocked response
    req.flush(types);
  });





  
});
