export class Post {
  public title: string;
  public content: string;
  public loveIts: number;
  public created_at: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.created_at = new Date().toISOString();
  }
}
