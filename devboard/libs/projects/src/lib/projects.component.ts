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
  readonly projects = this.svc.projects;
}
