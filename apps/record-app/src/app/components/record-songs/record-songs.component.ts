import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Record } from '../../models/record';
import { Song } from '../../models/song';
import { AppState } from '../../store/app.state';
import * as RecordsActions from "../../store/records/records.actions";
import * as RecordsSelectors from "../../store/records/records.selectors";
import * as SongsActions from "../../store/songs/songs.actions";
import * as SongsSelectors from "../../store/songs/songs.selectors";

@Component({
  selector: 'angular-project-with-nest-record-songs',
  templateUrl: './record-songs.component.html',
  styleUrls: ['./record-songs.component.css']
})
export class RecordSongsComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private route:ActivatedRoute,
  ) {}

  selectedRecord: Observable<Record> = of();
  songs: Observable<Song[]> = of([]);

  ngOnInit(): void {

    const idString = this.route.snapshot.queryParamMap.get("recordID");
    const id = idString != null ? +idString : -1;

    this.store.dispatch(RecordsActions.loadRecords());
    this.store.dispatch(SongsActions.loadSongsOfRecord({recordID:id}));
    this.store.dispatch(RecordsActions.selectRecord({ recordID: id }));
    this.selectedRecord = this.store.select(RecordsSelectors.selectOneRecord);

    this.songs = this.store.select(SongsSelectors.selectAllSongs);
  }
}
