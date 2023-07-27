import { contactIcons, db, jobs } from './../../db/db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects() {
    return db;
  }

  getJobs() {
    return jobs;
  }

  getContactIcons() {
    return contactIcons;
  }
}
