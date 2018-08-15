import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  numberOfLikes = 0;

   likeButtonClick() {
    this.numberOfLikes++;
   }

   disLikeButtonClick() {
    this.numberOfLikes--;
   }
  constructor() { }

  ngOnInit() {
  }

}
