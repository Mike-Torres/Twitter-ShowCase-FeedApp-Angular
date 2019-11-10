import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
}) 
export class SearchComponent implements OnInit {
  tweets: any 
  searchTerm: string = ''

    constructor(private tweetService: TweetService) {}
  
  ngOnInit() {
    this.tweetService.getTweets().subscribe((data) => {
      this.tweets = data;
    })
  }
  
  getTweets(searchTerm){
   this.tweetService.getTweets().subscribe(
    (response) => this.getTweets(response.json()),
    (error) => this.getTweets(error.json()),
    () => this.getTweets(searchTerm)
  );
}
   
  }

  