import { HttpResponse } from "@angular/common/http";
import { Observable, of as observableOf } from 'rxjs';

export class HttpClientFake {
    public static RESPONSE: Response = new Response();
    public static RESPONSE_OPTIONS: HttpResponse<any> = new HttpResponse();

    public get(url: string, options?: HttpResponse<any>): Observable<Response> {
        return observableOf(HttpClientFake.RESPONSE);
    }
}