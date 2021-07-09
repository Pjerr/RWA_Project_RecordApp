import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { RecordSongsComponent } from './components/record-songs/record-songs.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SearchFilterRecordPipe } from './pipes/search-filter-record.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { recordReducer } from './store/records/records.reducer';
import { songReducer } from './store/songs/songs.reducer';
import { RecordsEffect } from './store/records/records.effects';
import { SongsEffect } from './store/songs/songs.effects';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorPageComponent,
    NavBarComponent,
    RecordListComponent,
    RecordSongsComponent,
    SearchFilterRecordPipe,
    RecordDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
    {
      records:recordReducer,
      songs:songReducer
    },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([RecordsEffect, SongsEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
