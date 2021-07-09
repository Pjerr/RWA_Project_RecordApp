import { createAction, props } from '@ngrx/store';
import { Song } from '../../models/song';

export const loadSongsSuccess = createAction(
  'Load all songs success',
  props<{
    songs: Song[];
  }>()
);

export const loadSongs = createAction('Load all songs');

export const loadSongsOfRecord = createAction(
  'Load songs of record',
  props<{
    recordID: number;
  }>()
);

export const selectSong = createAction(
  'Select song to play',
  props<{ songID: number }>()
);
