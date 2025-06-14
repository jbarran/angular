import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsService} from "./projects.service";
import {MatButton, } from '@angular/material/button';
import {MatList, MatListItem, } from '@angular/material/list';
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'lib-projects',
  imports: [CommonModule, MatListItem, MatButton, MatLine, MatList],

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private svc = inject(ProjectsService);
  readonly active = this.svc.activeProjects;
  readonly archived = this.svc.archivedProjects;
  readonly projects = this.svc.projects;

  showArchived = false;

  toggleArchived(): void {
    this.showArchived = !this.showArchived;
  }

  archive(id: string): void {
    this.svc.archive(id);
  }
}
