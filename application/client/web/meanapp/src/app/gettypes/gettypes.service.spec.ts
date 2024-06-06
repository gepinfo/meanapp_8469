import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GettypesService } from './gettypes.service';
import { SharedService } from '../../shared/shared.service';

describe('gettypesService', () => {
  let service: GettypesService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ GettypesService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(GettypesService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  // get all types
  it('should retrieve all values getallseverity from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      name: 'name 1'
      description: 'description 1'
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${sharedService.WEB_API}/types?jwt_token=${jwtToken}`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });




  
});
