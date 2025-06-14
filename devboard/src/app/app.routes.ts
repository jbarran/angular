import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('@devboard/auth').then((m) => m.AUTH_ROUTES),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('@devboard/projects').then((m) => m.PROJECTS_ROUTES),
    },
    {
        path: 'metrics',
        loadChildren: () =>
            import('@devboard/metrics').then((m) => m.METRICS_ROUTES),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('@devboard/settings').then((m) => m.SETTINGS_ROUTES),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('@devboard/admin').then((m) => m.ADMIN_ROUTES),
    },
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full',
    },
];