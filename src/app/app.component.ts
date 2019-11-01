import { Component } from "@angular/core";

import { NbThemeService } from "@nebular/theme";
import { NbIconComponent } from "@nebular/theme";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dashboard";
  theme: Boolean = false;
  navList = ["home", "analytics", "log", "settings"];
  navAction: Boolean = true;
  constructor(private themeService: NbThemeService) {}

  toggleTheme() {
    this.theme = !this.theme;
    this.theme
      ? this.themeService.changeTheme("default")
      : this.themeService.changeTheme("dark");
  }
}
