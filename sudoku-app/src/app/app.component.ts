import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  private sudokuURL = 'http://localhost:3000/suduko';
  public gameBoardRaw: any;

  public answers: any;
  public puzzle: any;
  public remember: number;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getGameData();
  }

  getGameData() {
    this.http.get(this.sudokuURL)
      .subscribe(
        (data: any[]) => {
          this.gameBoardRaw = data;
          this.answers = this.gameBoardRaw.answer;
          this.puzzle = this.gameBoardRaw.puzzle;
        }
      );
  }

  getChangeAnswer() {
    this.getGameData();
  }


  rememberance() {
    if (typeof this.remember !== 'undefined') {
      const test = document.getElementById(this.remember.toString());
      if (test !== null) {
        test.classList.add('red');
      }
    }
  }

  pickSquare(value) {
    this.remember = value;
    const clearme = document.querySelector('.red');
    if (clearme !== null) {
      clearme.classList.remove('red');
    }

    const test = document.getElementById(value);
    if (test !== null) {
      test.classList.add('red');
    }
  }

  ngAfterViewChecked() {
    this.rememberance();
  }

}
