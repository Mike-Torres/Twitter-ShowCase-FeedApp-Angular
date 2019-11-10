import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'] 
})
export class LandingPageComponent implements OnInit {
  whatContentIsVisible: boolean = false;
  whyContentIsVisible: boolean = false;

  ngOnInit() {
  }

toggleWhatContent(){
  this.whatContentIsVisible = !this.whatContentIsVisible;
  this.whyContentIsVisible = !this.whatContentIsVisible;

  console.log("whyContentVisbility:", this.whyContentIsVisible);
  console.log("whatContentVisbility:", this.whatContentIsVisible);
}

toggleWhyContent(){
  this.whyContentIsVisible = !this.whyContentIsVisible;
  this.whatContentIsVisible = !this.whyContentIsVisible;
  console.log("whyContentVisbility:", this.whyContentIsVisible);
  console.log("whatContentVisbility:", this.whatContentIsVisible);
  }
}


