import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'createticket', loadChildren: () => import('./createticket/createticket.module').then(m => m.CreateticketModule), canActivate: [AuthGuard] } , 
{ path : 'ticketupdate', loadChildren: () => import('./ticketupdate/ticketupdate.module').then(m => m.TicketupdateModule), canActivate: [AuthGuard] } , 
{ path : 'ticketsgetall', loadChildren: () => import('./ticketsgetall/ticketsgetall.module').then(m => m.TicketsgetallModule), canActivate: [AuthGuard] } , 
{ path : 'createtypes', loadChildren: () => import('./createtypes/createtypes.module').then(m => m.CreatetypesModule), canActivate: [AuthGuard] } , 
{ path : 'updatetype', loadChildren: () => import('./updatetype/updatetype.module').then(m => m.UpdatetypeModule), canActivate: [AuthGuard] } , 
{ path : 'gettypes', loadChildren: () => import('./gettypes/gettypes.module').then(m => m.GettypesModule), canActivate: [AuthGuard] } , 
{ path : 'createseverity', loadChildren: () => import('./createseverity/createseverity.module').then(m => m.CreateseverityModule), canActivate: [AuthGuard] } , 
{ path : 'updateseverirty', loadChildren: () => import('./updateseverirty/updateseverirty.module').then(m => m.UpdateseverirtyModule), canActivate: [AuthGuard] } , 
{ path : 'getallseverity', loadChildren: () => import('./getallseverity/getallseverity.module').then(m => m.GetallseverityModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
