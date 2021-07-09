import { RecordState } from "./records/records.reducer";
import { SongState } from "./songs/songs.reducer";

export interface AppState{
    records: RecordState,
    songs:SongState
}