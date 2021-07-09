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

export const selectSongID = createSelector(
  selectSongsFeature,
  (state:SongState) => state.selectedSongID
);

export const selectSong = createSelector(
  selectAllSongs,
  selectSongID,
  (allSongs, songID)=> allSongs[songID] ?? null
)
