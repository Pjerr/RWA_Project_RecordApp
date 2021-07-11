import { createSelector } from '@ngrx/store';
import { Song } from '../../models/song';
import { AppState } from '../app.state';

import { SongState } from './songs.reducer';

export const selectSongsFeature = createSelector(
  (state: AppState) => state.songs,
  (songs) => songs
);

export const selectAllSongs = createSelector(
  selectSongsFeature,
  (state: SongState) =>
  {
    return Object.values(state.entities)
    .filter((song) => song != null)
    .map((song) => <Song>song);
  }
);
