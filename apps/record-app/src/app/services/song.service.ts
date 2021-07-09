import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) {}

  loadAllSongs() {
    return this.httpClient.get<Song[]>(`${environment.apiURL}songs`);
  }

  loadSongsOfRecord(recordID: number) {
    return this.httpClient.get<Song[]>(
      `${environment.apiURL}songs/?recordID=${recordID}`
    );
  }
}
