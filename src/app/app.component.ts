import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomSentence = "";
  userInput = "";
  successMsgHidden = true;
  comparisonArray;
  constructor() { 
    this.randomSentence = lorem.sentence();
    this.comparisonArray =[...this.randomSentence.split("")]
  }
  
  ngOnInit() { }
  
  handleUserInput(event: any) {
    this.userInput = event.target.value;
    console.log(this.comparisonArray);
  }

  compareLetters(letter: string, userInputLetter: string) {
    return !userInputLetter ? "pending" : letter === userInputLetter ? "match" : "noMatch"
  }
}
