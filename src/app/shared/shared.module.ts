import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';


@NgModule({
  imports:[RouterModule, CommonModule],
  declarations: [HeaderComponent, SidebarComponent, BreadcrumsComponent,NotpagefoundComponent],
  exports: [HeaderComponent, SidebarComponent, BreadcrumsComponent, NotpagefoundComponent]
})
export class SharedModule {}
