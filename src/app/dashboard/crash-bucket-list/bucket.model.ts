export class Bucket {
  public name: string;
  public size: number;

  constructor(name: string, size?: number){
    this.name = name;
    this.size = size;
  }

}
