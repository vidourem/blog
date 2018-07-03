import { Component, OnInit, Input } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../post";

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
  @Input() postIndex;

  constructor(private postsService: PostsService) { }

  ngOnInit() { }

  loveIt(){
    this.postLoveIts+=1;
    this.postsService.changeLoveIts(this.postIndex,this.postLoveIts);
  }

  noLoveIt(){
    this.postLoveIts-=1;
    this.postsService.changeLoveIts(this.postIndex,this.postLoveIts);
  }

  postVert(){
    return this.postLoveIts >0;
  }

  postRouge(){
    return this.postLoveIts <0;
  }

  removePost(){
    this.postsService.removePost(this.postIndex);
  }
}
