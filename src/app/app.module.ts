import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { RidersComponent } from './dashboard/riders/riders.component';
import { ScootersComponent } from './dashboard/scooters/scooters.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { UsersAdminComponent } from './dashboard/users-admin/users-admin.component';
import { AddAdminUserComponent } from './dashboard/users-admin/add-admin-user/add-admin-user.component';
import { AdminUsersComponent } from './dashboard/users-admin/admin-users/admin-users.component';
import { AddRiderComponent } from './dashboard/riders/add-rider/add-rider.component';
import { RidersAdminComponent } from './dashboard/riders/riders-admin/riders-admin.component';
import { RidersLocationComponent } from './dashboard/riders/riders-location/riders-location.component';
import { AddScooterComponent } from './dashboard/scooters/add-scooter/add-scooter.component';
import { ScootersAdminComponent } from './dashboard/scooters/scooters-admin/scooters-admin.component';
import { ScootersLocationComponent } from './dashboard/scooters/scooters-location/scooters-location.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    RidersComponent,
    ScootersComponent,
    HeaderComponent,
    SidebarComponent,
    UsersAdminComponent,
    AddAdminUserComponent,
    AdminUsersComponent,
    AddRiderComponent,
    RidersAdminComponent,
    RidersLocationComponent,
    AddScooterComponent,
    ScootersAdminComponent,
    ScootersLocationComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
