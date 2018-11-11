import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ExternalLoginComponent } from './components/external-login/external-login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Authenticated Routes
  { path: 'home', canActivate: [AuthGuardService], component: HomeComponent },
  // Open Routes
  { path: 'login', component: LoginComponent },
  { path: 'external-login', component: ExternalLoginComponent },
  { path: 'error', component: ErrorComponent },

  // Otherwise redirect to home (should redirect to a 'Page not Found' component or similar
  { path: '**', redirectTo: '/error#error=NOT_FOUND' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
