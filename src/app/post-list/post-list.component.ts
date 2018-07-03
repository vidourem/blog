import { Component, OnInit, Input } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Subscription} from "rxjs/Subscription";
import {Post} from "../post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  title: string;
  @Input() postList;
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.title = 'Posts';
    this.postsService.getPosts();
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postList = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
