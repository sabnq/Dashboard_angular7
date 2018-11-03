import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService, SettingsService, SidebarService, UsuarioService, LoginGuardGuard} from "./service.index";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[SharedService, SettingsService, SidebarService, UsuarioService, LoginGuardGuard],
  declarations: []
})
export class ServiceModule { }
