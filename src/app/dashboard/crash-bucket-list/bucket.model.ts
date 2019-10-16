import { CrashItem } from './bucket-item-expanded/crash-item.model';

export class Bucket {
  public name: string;
  public items: CrashItem[];

  constructor(name: string, items: CrashItem[]){
    this.name = name;
    this.items = items;
  }

}
