import { Injectable } from "@angular/core";

@Injectable()
export class AppConfigService {
    public readonly startPageCount = 24;
    public readonly nextPageCount = 24;
}