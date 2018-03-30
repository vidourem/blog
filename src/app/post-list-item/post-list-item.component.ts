import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreated_at;
  constructor() { }

  ngOnInit() {
  }

  loveIt(){
    this.postLoveIts+=1;
  }

  noLoveIt(){
    this.postLoveIts-=1;
  }

  postVert(){
    return this.postLoveIts >0;
  }

  postRouge(){
    return this.postLoveIts <0;
  }
}
