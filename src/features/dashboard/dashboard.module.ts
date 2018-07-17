import { NgModule, ModuleWithProviders } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HistoryService } from "./services/history.service";
import { dashboardReducer } from "./store/dashboard.reducer";
import { DashboardEffects } from "./store/dashboard.effects";
import { ConnectionsModule } from "../connections/connections.module";
import { SharedModule } from "../../shared/shared.module";
import { IonicModule } from "ionic-angular";
import { DashboardPageModule } from "./pages/dashboard/dashboard.component.module";
import { SelectProjectComponent } from "../connections/pages/select-project/select-project.component";
import { SelectTaskListComponent } from "../connections/pages/select-task-list/select-task-list.component";
import { ProjectListComponent } from "../connections/components/project-list/project-list.component";

@NgModule({
  imports: [
    DashboardRoutingModule,
    IonicModule,
    StoreModule.forFeature("dashboard", dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
    DashboardPageModule,
    SharedModule,
    ConnectionsModule
  ],
  declarations: [],
  entryComponents: [
    DashboardComponent,
    SelectProjectComponent,
    SelectTaskListComponent
  ]
})
export class DashboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [HistoryService, DashboardEffects]
    };
  }
}