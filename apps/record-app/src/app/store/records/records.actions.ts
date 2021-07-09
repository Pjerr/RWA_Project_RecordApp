import { createAction, props } from '@ngrx/store';
import { Record } from '../../models/record';

export const vote = createAction(
  'Vote For Record',
  props<{
    recordID: number;
    voteOutcome: number;
  }>()
);
export const voteForRecordSuccess = createAction(
  'Vote for record success',
  props<Record>()
);

export const loadRecords = createAction('Load All Records');
export const loadRecordsSuccess = createAction(
  'Load All Records Success',
  props<{
    records: Record[];
  }>()
);


export const selectRecord = createAction(
  'Select Record',
  props<{
    recordID: number;
  }>()
);

export const favourite = createAction(
  'Change favourite state for record',
  props<{
    recordID: number;
    favouriteState: string;
  }>()
);

export const favouriteForRecordSuccess = createAction(
  'Change favourite state success',
  props<Record>()
);

export const searchForRecord = createAction(
  'Search for record',
  props<{ title: string }>()
);

export const searchForRecordSuccess = createAction(
  'Search for record success',
  props<{ records: Record[] }>()
);
