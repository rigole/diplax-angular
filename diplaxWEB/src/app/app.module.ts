import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule, MatIconModule, MatInputModule, MatSlideToggleModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SchoolComponent } from './school/school.component';
import { BottomComponent } from './bottom/bottom.component';
import {MatSortModule} from '@angular/material/sort';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule}  from '@angular/material/grid-list';
import { SidenavComponent } from './sidenav/sidenav.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MenuComponent,
    SchoolComponent,
    BottomComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    NgbModule,
    MatSortModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
