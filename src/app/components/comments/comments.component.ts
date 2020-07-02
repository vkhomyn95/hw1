import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comment: Comment;

  constructor() { }
  getComments():void {
    this.getComments()
  }

  ngOnInit(): void {
  }

}
