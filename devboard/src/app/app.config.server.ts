import {
    mergeApplicationConfig,
    ApplicationConfig,
    provideZonelessChangeDetection,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";

const serverConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideBrowserGlobalErrorListeners(),
        provideServerRendering(withRoutes(serverRoutes)),
        provideClientHydration(withIncrementalHydration()),
    ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);