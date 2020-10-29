import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../../shared/shared.module";
import { MatModule } from "../../mat-module";
import { MyAddonsComponent } from "../my-addons/my-addons.component";
import { OptionsComponent } from "../options/options.component";
import { GetAddonsComponent } from "../get-addons/get-addons.component";
import { AboutComponent } from "../about/about.component";
import { PotentialAddonTableColumnComponent } from "../../components/potential-addon-table-column/potential-addon-table-column.component";
import { MyAddonsAddonCellComponent } from "../../components/my-addons-addon-cell/my-addons-addon-cell.component";
import { ProgressSpinnerComponent } from "../../components/progress-spinner/progress-spinner.component";
import { DownloadCountPipe } from "../../pipes/download-count.pipe";
import { InterfaceFormatPipe } from "../../pipes/interface-format.pipe";
import { GetAddonListItemFilePropPipe } from "../../pipes/get-addon-list-item-file-prop.pipe";
import { RelativeDurationPipe } from "../../pipes/relative-duration-pipe";
import { TelemetryDialogComponent } from "../../components/telemetry-dialog/telemetry-dialog.component";
import { ConfirmDialogComponent } from "../../components/confirm-dialog/confirm-dialog.component";
import { AlertDialogComponent } from "../../components/alert-dialog/alert-dialog.component";
import { WowClientOptionsComponent } from "../../components/wow-client-options/wow-client-options.component";
import { DirectiveModule } from "../../directive.module";
import { InstallFromUrlDialogComponent } from "../../components/install-from-url-dialog/install-from-url-dialog.component";
import { AddonDetailComponent } from "../../components/addon-detail/addon-detail.component";
import { AddonProviderBadgeComponent } from "../../components/addon-provider-badge/addon-provider-badge.component";
import { AddonInstallButtonComponent } from "../../components/addon-install-button/addon-install-button.component";
import { GetAddonStatusColumnComponent } from "../../components/get-addon-status-column/get-addon-status-column.component";
import { MyAddonStatusColumnComponent } from "../../components/my-addon-status-column/my-addon-status-column.component";
import { ProgressButtonComponent } from "../../components/progress-button/progress-button.component";
import { AddonUpdateButtonComponent } from "../../components/addon-update-button/addon-update-button.component";

@NgModule({
  declarations: [
    HomeComponent,
    MyAddonsComponent,
    AboutComponent,
    GetAddonsComponent,
    OptionsComponent,
    MyAddonsAddonCellComponent,
    ProgressSpinnerComponent,
    PotentialAddonTableColumnComponent,
    DownloadCountPipe,
    InterfaceFormatPipe,
    GetAddonListItemFilePropPipe,
    RelativeDurationPipe,
    TelemetryDialogComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    WowClientOptionsComponent,
    InstallFromUrlDialogComponent,
    AddonDetailComponent,
    AddonProviderBadgeComponent,
    AddonInstallButtonComponent,
    GetAddonStatusColumnComponent,
    MyAddonStatusColumnComponent,
    ProgressButtonComponent,
    AddonUpdateButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatModule,
    DirectiveModule,
  ],
  providers: [
    DatePipe,
    GetAddonListItemFilePropPipe,
  ]
})
export class HomeModule {}
