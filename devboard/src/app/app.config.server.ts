import {
    mergeApplicationConfig,
    ApplicationConfig,
    provideZonelessChangeDetection,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideBrowserGlobalErrorListeners(),
        provideServerRendering(withRoutes(serverRoutes)),
    ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);