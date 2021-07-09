import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Record } from '../../models/record';
import { RecordFavourite } from '../../models/recordFavourite';
import { RecordVote } from '../../models/recordVote';
import { AppState } from '../../store/app.state';
import * as RecordsActions from "../../store/records/records.actions";
import { sortByFavourites } from '../../store/records/records.selectors';
import * as SongsActions from "../../store/songs/songs.actions";

@Component({
  selector: 'angular-project-with-nest-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) {}

  records: Observable<Record[]> = of([]); //readonly
  selectedRecord: Observable<Record> = of();
  searchValue:string | undefined;

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(){
    this.store.dispatch(RecordsActions.loadRecords());
    this.records = this.store.select(sortByFavourites);
  }
  selectThisRecord(record: Record) {
    if (record) {
      this.store.dispatch(RecordsActions.selectRecord({ recordID: record.id }));
      this.store.dispatch(SongsActions.loadSongsOfRecord({recordID:record.id}));
      this.router.navigate(['/songs/'], {
        queryParams: { recordID: record.id },
      });
    }
  }

  voteForRecord(recordVote: RecordVote) {
    this.store.dispatch(
      RecordsActions.vote({
        recordID: recordVote.id,
        voteOutcome: recordVote.votes,
      })
    );
  }
  changeFavouriteState(recordFavourite: RecordFavourite) {
    this.store.dispatch(
      RecordsActions.favourite({
        recordID: recordFavourite.id,
        favouriteState: recordFavourite.favourite,
      })
    );
  }
}
