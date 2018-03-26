export class Post {

  public loveIts: number;

  public dontLoveIts: number;

  public created_at: number;

  constructor(public title: string, public content: string) {
    this.loveIts = 0;
    this.dontLoveIts = 0;
    let now = new Date();
    this.created_at = now.getTime();
  }
}
