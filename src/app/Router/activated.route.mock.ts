import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

export class ActivatedRouteMock {

    public snapshot: ActivatedRouteSnapshot = jasmine.createSpyObj<ActivatedRouteSnapshot>('ActivatedRouteSnapshot', [
        'toString',
    ]);

    public get paramMap(): any {
        return of({
            get(): any {
                return '1';
            },
        });
    }
}