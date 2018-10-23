import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Routes
import { APP_ROUTES } from "./app.routes";

//Modulos
import { PagesModules } from "./pages/pages.module";

//Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { FormsModule } from "@angular/forms";

//Services
import { ServiceModule } from "./services/service.module";



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTES, PagesModules, FormsModule,ServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
