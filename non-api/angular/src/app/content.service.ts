import { Injectable } from '@angular/core';
import data from "../assets/data.json";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {}

  getContent(page: string): string{
    return data[page];
  }

}
