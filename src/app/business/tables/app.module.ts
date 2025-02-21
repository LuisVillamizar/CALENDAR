import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
    IgxCalendarModule,
    IgxDialogModule
 } from "igniteui-angular";
import { TablesComponent } from "./tables.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TablesComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxCalendarModule,
    IgxDialogModule
],
  providers: [],
  schemas: []
})
export class AppModule {}