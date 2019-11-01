import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";

const TOTAL_PAGES = 7;

export class LogPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable()
export class LogService {
  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<LogPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http.get<LogPost[]>("assets/logs.json").pipe(
      map(logs => logs.splice(startIndex, pageSize)),
      delay(1500)
    );
  }
}
