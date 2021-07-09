import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { SongService } from "../../services/song.service";
import * as SongActions from "./songs.actions"

@Injectable()
export class SongsEffect {
  constructor(
    private songService: SongService,
    private actions$: Actions
  ) {}

  loadSelectedSongs$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SongActions.loadSongsOfRecord),
    mergeMap((action) =>
      this.songService.loadSongsOfRecord(action.recordID).pipe(
        map((songs) => SongActions.loadSongsSuccess({ songs })),
        catchError(() => of({ type: 'load songs error' }))
      )
    )
  )
);
}