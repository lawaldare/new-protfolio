import { db } from './../../db/db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }






  getProjects() {
    return db;
  }
}
