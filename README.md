### Scaffold project

```bash
npx create-nx-workspace@latest . --preset=angular-standalone --appName=dashboard --style=scss --routing --strict --standaloneConfig
```

This will scaffold:
- apps/dashboard: your main Angular 20 app
- Signal-enabled, routing-enabled, SCSS-styled, standalone component setup


NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Which bundler would you like to use? · esbuild
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · Yes
✔ Which unit test runner would you like to use? · jest
✔ Test runner to use for end to end (E2E) tests · playwright
✔ Which CI provider would you like to use? · github

```shell
# === AUTH ===
mkdir auth && cd auth
npx nx g @nx/angular:library --name=auth --standalone --style=scss --flat --directory=.

mv src/lib/auth.ts src/lib/auth.component.ts
mv src/lib/auth.html src/lib/auth.component.html
mv src/lib/auth.scss src/lib/auth.component.scss
mv src/lib/auth.spec.ts src/lib/auth.component.spec.ts
sed -i '' 's/export class .*/export class AuthComponent {}/' src/lib/auth.component.ts

cat > src/lib/auth.routes.ts <<EOF
import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];
EOF

echo "export * from './lib/auth.component';" > src/index.ts
echo "export * from './lib/auth.routes';" >> src/index.ts
cd ..

# === PROJECTS ===
mkdir projects && cd projects
npx nx g @nx/angular:library --name=projects --standalone --style=scss --flat --directory=.

mv src/lib/projects.ts src/lib/projects.component.ts
mv src/lib/projects.html src/lib/projects.component.html
mv src/lib/projects.scss src/lib/projects.component.scss
mv src/lib/projects.spec.ts src/lib/projects.component.spec.ts
sed -i '' 's/export class .*/export class ProjectsComponent {}/' src/lib/projects.component.ts

cat > src/lib/projects.routes.ts <<EOF
import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
];
EOF

echo "export * from './lib/projects.component';" > src/index.ts
echo "export * from './lib/projects.routes';" >> src/index.ts
cd ..

# === METRICS ===
mkdir metrics && cd metrics
npx nx g @nx/angular:library --name=metrics --standalone --style=scss --flat --directory=.

mv src/lib/metrics.ts src/lib/metrics.component.ts
mv src/lib/metrics.html src/lib/metrics.component.html
mv src/lib/metrics.scss src/lib/metrics.component.scss
mv src/lib/metrics.spec.ts src/lib/metrics.component.spec.ts
sed -i '' 's/export class .*/export class MetricsComponent {}/' src/lib/metrics.component.ts

cat > src/lib/metrics.routes.ts <<EOF
import { Routes } from '@angular/router';
import { MetricsComponent } from './metrics.component';

export const METRICS_ROUTES: Routes = [
  {
    path: '',
    component: MetricsComponent,
  },
];
EOF

echo "export * from './lib/metrics.component';" > src/index.ts
echo "export * from './lib/metrics.routes';" >> src/index.ts
cd ..

# === SETTINGS ===
mkdir settings && cd settings
npx nx g @nx/angular:library --name=settings --standalone --style=scss --flat --directory=.

mv src/lib/settings.ts src/lib/settings.component.ts
mv src/lib/settings.html src/lib/settings.component.html
mv src/lib/settings.scss src/lib/settings.component.scss
mv src/lib/settings.spec.ts src/lib/settings.component.spec.ts
sed -i '' 's/export class .*/export class SettingsComponent {}/' src/lib/settings.component.ts

cat > src/lib/settings.routes.ts <<EOF
import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];
EOF

echo "export * from './lib/settings.component';" > src/index.ts
echo "export * from './lib/settings.routes';" >> src/index.ts
cd ..

# === ADMIN ===
mkdir admin && cd admin
npx nx g @nx/angular:library --name=admin --standalone --style=scss --flat --directory=.

mv src/lib/admin.ts src/lib/admin.component.ts
mv src/lib/admin.html src/lib/admin.component.html
mv src/lib/admin.scss src/lib/admin.component.scss
mv src/lib/admin.spec.ts src/lib/admin.component.spec.ts
sed -i '' 's/export class .*/export class AdminComponent {}/' src/lib/admin.component.ts

cat > src/lib/admin.routes.ts <<EOF
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];
EOF

echo "export * from './lib/admin.component';" > src/index.ts
echo "export * from './lib/admin.routes';" >> src/index.ts
cd ..
```



