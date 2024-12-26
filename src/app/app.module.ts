import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { customInterceptor } from './interceptor/custom.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OnlyNumberDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      
  ],
  providers: [provideHttpClient(withInterceptors([customInterceptor])), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
