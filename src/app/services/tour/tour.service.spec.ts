import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TourService } from './tour.service';

describe('TourService', () => {
  let service: TourService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TourService]
    });

    service = TestBed.get(TourService);
    httpMock = TestBed.get(HttpTestingController);
  });


  afterEach(() =>{
    httpMock.verify();
  }
)

  it('should get tour data from JSON ', () => {
    const dummyTours = [
      {
        Name: 'Euro Tour',
        Id: 1,
        ArtistName: 'Tom & Jerry',
        DateStart: '2018-01-01T00:00:00',
        DateEnd: '2019-01-01T00:00:00',
        Host: 'Fred Quimby'
      },
      {
        Name: 'Asia Tour',
        Id: 2,
        ArtistName: 'Geronimo',
        DateStart: '2019-01-06T00:00:00',
        DateEnd: '2019-01-20T00:00:00',
        Host: 'Linek Garry'
      }
    ]
    service.getAll().subscribe(tours => {

      expect(tours.length).toBe(2);
      expect(tours).toEqual(dummyTours);

    });

    const request = httpMock.expectOne(`${service.str}/tours`);
    expect (request.request.method).toBe('get');
    request.flush(dummyTours);

  });
});
