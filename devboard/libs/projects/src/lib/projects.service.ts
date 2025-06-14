import { Injectable, computed, signal } from '@angular/core';
import { Project } from '@devboard/models';
import {MOCK_PROJECTS} from "./mock-projects";

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    private _projects = signal<Project[]>(MOCK_PROJECTS);
    readonly projects = this._projects.asReadonly();

    readonly activeProjects = computed(() =>
        this._projects().filter((p) => p.status === 'active')
    );

    readonly archivedProjects = computed(() =>
        this._projects().filter((p) => p.status === 'archived')
    );

    add(project: Project) {
        this._projects.update((prev) => [...prev, project]);
    }

    archive(id: string) {
        this._projects.update((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, status: 'archived' } : p
            )
        );
    }
}