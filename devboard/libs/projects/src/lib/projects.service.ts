import { Injectable, computed, signal } from '@angular/core';
import { Project } from '../../../shared/models/src/lib/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    private _projects = signal<Project[]>([
        { id: '1', name: 'Portfolio Website', status: 'active' },
        { id: '2', name: 'Angular DevBoard', status: 'active' },
        { id: '3', name: 'Archived Test App', status: 'archived' },
    ]);

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