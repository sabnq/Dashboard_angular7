import { NgModule } from "@angular/core";

//Routes
import { PagesRoutes } from "./pages.routes";

//Modulos
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [SharedModule, PagesRoutes]
})
export class PagesModules {}
