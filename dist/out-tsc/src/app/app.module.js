import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { IntegralUIModule } from '@lidorsystems/integralui-web/bin/integralui/integralui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { DemoMaterialModule } from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { SaleComponent } from './sale/sale.component';
import { SettingComponent } from './setting/setting.component';
import { HelpingComponent } from './helping/helping.component';
import { DailogpopupComponent } from './dailogpopup/dailogpopup.component';
import { CustomerService } from './customer/customer.service';
import { GridModule, PagerModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-grids';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            CustomerComponent,
            DashboardComponent,
            CategoryComponent,
            ItemComponent,
            SaleComponent,
            SettingComponent,
            HelpingComponent,
            DailogpopupComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            DemoMaterialModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            MatNativeDateModule,
            IntegralUIModule,
            GridModule, PagerModule
        ],
        entryComponents: [DailogpopupComponent],
        providers: [
            CustomerService, PageService, SortService, FilterService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map