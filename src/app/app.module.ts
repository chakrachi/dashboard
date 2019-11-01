import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NbMomentDateModule } from "@nebular/moment";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbTooltipModule,
  NbTreeGridModule,
  NbUserModule
} from "@nebular/theme";

//Components
import { AnalyticsComponent } from "./content/analytics/analytics.component";
import { LogPostComponent } from "./content/analytics/log.component";
import { HomeComponent } from "./content/home/home.component";
import { HistoryComponent } from "./content/history/history.component";
import { SettingsComponent } from "./content/settings/settings.component";

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    LogPostComponent,
    HistoryComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    NbMomentDateModule,
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule,
    NbListModule,
    NbLayoutModule,
    NbSelectModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: "default" }),
    NbTooltipModule,
    NbTreeGridModule,
    NbUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
