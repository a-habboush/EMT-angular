import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';
import { VacationRequests2Component } from './vacation-requests-2/vacation-requests-2.component';
import { VacationRequests3Component } from './vacation-requests-3/vacation-requests-3.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'Profile', component:ProfileComponent},
    {'path': 'VacationRequests', component:VacationRequestsComponent},
    {'path': 'VacationRequests2', component:VacationRequests2Component},
    {'path': 'VacationRequests3', component:VacationRequests3Component}
];
