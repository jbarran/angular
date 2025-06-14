import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsService} from "./projects.service";

@Component({
  selector: 'lib-projects',
  imports: [CommonModule],
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
