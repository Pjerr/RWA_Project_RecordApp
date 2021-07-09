import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Record } from '../../models/record';
import * as RecordActions from './records.actions';

export interface RecordState extends EntityState<Record> {
  selectedRecordID: number;
}

const adapter = createEntityAdapter<Record>();

const initialState: RecordState = adapter.getInitialState({
  selectedRecordID: -1,
});

export const recordReducer = createReducer(
  initialState,
  on(RecordActions.vote, (state, { recordID, voteOutcome }) => {
    const targetRecord = state.entities[recordID];
    return targetRecord
      ? adapter.setOne({ ...targetRecord, votes: voteOutcome }, state)
      : state;
  }),
  on(RecordActions.voteForRecordSuccess, (state, record)=>{
    return adapter.setOne(record, state);
  }),
  on(RecordActions.loadRecordsSuccess, (state, { records }) =>{
    return adapter.setAll(records, state)
  }),
  on(RecordActions.selectRecord, (state, { recordID }) => ({
    ...state,
    selectedRecordID: recordID,
  })),
  on(RecordActions.favourite, (state, {recordID, favouriteState})=>{
    const targetRecord = state.entities[recordID];
    return targetRecord ? adapter.setOne({...targetRecord, favourite: favouriteState}, state) : state;
  })
);
