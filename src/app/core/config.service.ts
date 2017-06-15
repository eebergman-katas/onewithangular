import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public apiBase = 'http://swapi.co/api/';
  public apiPage = '?page=';
}
