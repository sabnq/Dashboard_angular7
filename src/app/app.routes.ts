import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { UsersAdminComponent } from './dashboard/users-admin/users-admin.component';
import { RidersComponent } from './dashboard/riders/riders.component';
import { ScootersComponent } from './dashboard/scooters/scooters.component';
import { RidersAdminComponent } from './dashboard/riders/riders-admin/riders-admin.component';
import { AddRiderComponent } from './dashboard/riders/add-rider/add-rider.component';
import { RidersLocationComponent } from './dashboard/riders/riders-location/riders-location.component';
import { ScootersAdminComponent } from './dashboard/scooters/scooters-admin/scooters-admin.component';
import { AdminUsersComponent } from './dashboard/users-admin/admin-users/admin-users.component';
import { AddAdminUserComponent } from './dashboard/users-admin/add-admin-user/add-admin-user.component';
import { AddScooterComponent } from './dashboard/scooters/add-scooter/add-scooter.component';
import { ScootersLocationComponent } from './dashboard/scooters/scooters-location/scooters-location.component';

// const routes: Routes = [
//     { path:'', component: DashboardComponent},
//     { path:'login', component: LoginComponent}
// ];
const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'user_admin',
                component: UsersAdminComponent,
                children: [
                    {
                        path: '',
                        component: AdminUsersComponent
                    },
                    {
                        path: 'add_admin_user',
                        component: AddAdminUserComponent,
                    }
                ]
            },
            {
                path: 'riders',
                component: RidersComponent,
                children: [
                    {
                        path: '',
                        component: RidersAdminComponent
                    },
                    {
                        path: 'add_rider',
                        component: AddRiderComponent
                    },
                    {
                        path: 'riders_location',
                        component: RidersLocationComponent
                    },
                ]
            },
            {
                path: 'scooters',
                component: ScootersComponent,
                children: [
                    {
                        path: '',
                        component: ScootersAdminComponent
                    },
                    {
                        path: 'add_scooter',
                        component: AddScooterComponent
                    },
                    {
                        path: 'scooters_location',
                        component: ScootersLocationComponent
                    }

                ]
            },

        ]
    },
    // {path:'**',pathMatch: 'full',redirectTo: ''},
];


export const Routing = RouterModule.forRoot(routes);