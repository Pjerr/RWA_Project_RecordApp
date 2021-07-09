/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Record } from '../../models/record';
import { RecordFavourite } from '../../models/recordFavourite';
import { RecordVote } from '../../models/recordVote';


@Component({
  selector: 'angular-project-with-nest-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {
  @Input() record: Record | undefined;
  @Output() setVotes = new EventEmitter<RecordVote>();

  @Output() selectedRecord = new EventEmitter<Record>();

  @Output() changeFavouriteStateForRecord = new EventEmitter<RecordFavourite>();

  constructor() {}

  ngOnInit(): void {}

  vote(outcome: number) {
    if (this.record) {
      let votes = this.record.votes;
      const id = this.record.id;
      outcome === 1 ? votes++ : votes--;
      const recordVote = {
        id,
        votes,
      };
      this.setVotes.emit(recordVote);
    }
  }

  selectThisRecord() {
    if (this.record) {
      this.selectedRecord.emit(this.record);
    }
  }

  changeFavouriteState(state:string){
    if(this.record)
    {
      const id = this.record.id;
      const favourite = state;
      const recordFavourite = {
        id,
        favourite
      }
      this.changeFavouriteStateForRecord.emit(recordFavourite);
    }
  }

  iconChangeTo:string | undefined = "no";
  changeIconAppearance(state:string){
    if(state==='yes') this.iconChangeTo = 'yes'
    else this.iconChangeTo = 'no'
  }

}
