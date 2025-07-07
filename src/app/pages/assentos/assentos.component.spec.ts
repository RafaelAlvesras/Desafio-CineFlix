import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssentosComponent } from './assentos.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from '../../Router/activated.route.mock';
import { HttpClient } from '@angular/common/http';
import { HttpClientFake } from '../../generics/httpClient.mock';

describe('AssentosComponent', () => {
  let component: AssentosComponent;
  let fixture: ComponentFixture<AssentosComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssentosComponent],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: HttpClient, useClass: HttpClientFake }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssentosComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.callFake(() => '1');
    expect(component).toBeTruthy();
  });
});