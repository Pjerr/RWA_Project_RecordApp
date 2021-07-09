import { Pipe, PipeTransform } from '@angular/core';
import { Record } from '../models/record';

@Pipe({
  name: 'searchFilterRecord'
})
export class SearchFilterRecordPipe implements PipeTransform {

  transform(records: Record[], title: string): Record[] {
    if (!records || !title) return records;

    return records.filter((record) =>
      record.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    );
  }

}
