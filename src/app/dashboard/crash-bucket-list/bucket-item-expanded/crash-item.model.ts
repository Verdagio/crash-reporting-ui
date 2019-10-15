export class CrashItem {
  constructor(
    public crashId: string,
    public crashText: string,
    public appName: string,
    public operatingSystem: string,
    public timeOfCrash: Date
  ){
    this.crashId = crashId;
    this.crashText = crashText;
    this.appName = appName;
    this.operatingSystem = operatingSystem;
    this.timeOfCrash = timeOfCrash;
  }
}
