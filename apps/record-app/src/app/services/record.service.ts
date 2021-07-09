import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Record } from '../models/record';
import { RecordFavourite } from '../models/recordFavourite';
import { RecordVote } from '../models/recordVote';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private httpClient:HttpClient) { }

  getAllRecords(){
    return this.httpClient.get<Record[]>(`${environment.apiURL}records`);
  }

  voteForRecord(recordVote:RecordVote){
    return this.httpClient.patch<Record>(`${environment.apiURL}records/${recordVote.id}`,{id:recordVote.id, votes:recordVote.votes});
  }

  changeRecordFavourite(recordFavourite:RecordFavourite){
    return this.httpClient.patch<Record>(`${environment.apiURL}records/${recordFavourite.id}`,{id:recordFavourite.id, favourite:recordFavourite.favourite})
  }

  searchRecordsByTitle(title:string){
    return this.httpClient.get<Record[]>(`${environment.apiURL}records/?title=${title}`)
  }
}
