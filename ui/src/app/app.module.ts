import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './core/shared/navbar/navbar.module';
import { FooterModule } from './core/shared/footer/footer.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from "ngx-toastr";
import {ErrorInterceptor} from "./core/services/error-interceptor";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
