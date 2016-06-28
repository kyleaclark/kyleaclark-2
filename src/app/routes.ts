import { provideRouter, RouterConfig } from '@angular/router';
import { Home } from 'components/routes/home/home';

export const routes: RouterConfig = [
  { path: '', component: Home }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
