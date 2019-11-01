import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./content/home/home.component";
import { AnalyticsComponent } from "./content/analytics/analytics.component";
import { HistoryComponent } from "./content/history/history.component";
import { SettingsComponent } from "./content/settings/settings.component";

const routes: Routes = [
  { path: "", redirectTo: "/analytics", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "analytics", component: AnalyticsComponent },
  { path: "history", component: HistoryComponent },
  { path: "settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
