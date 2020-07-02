import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: []
})

export class AppComponent {
  posts: Post[];
  comments: Comment[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {this.posts = response; });
    this.httpClient
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(response => {this.comments = response; });
    // console.log(this.comments)
  }
  // gdt(){
  //   if (this.posts && this.comments){
  //     for (const post of this.posts){
  //       for (const comment of this.comments){
  //         if (post.id === comment.postId){
  //           post.cm = comment.body;
  //           console.log(post.cm);
  //         }
  //       }
  //     }
  //   }
  // }
  // setComments(){
  //   if (this.posts && this.comments){
  //     for (const post of this.posts){
  //       for (const comment of this.comments){
  //         if (post.id === comment.postId){
  //           post.cm = comment.body;
  //         }
  //       }
  //     }
  //   }
  // }
}
