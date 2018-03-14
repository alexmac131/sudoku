import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private sudokuURL = 'http://localhost:3000/suduko';
  public gameBoardRaw: any;

  public answers: any;
  public puzzle: any;
  public position: number = 1;

  public remember: number;

  public count: number = 1;

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
          console.log(data);
          // console.log(this.quakes.features.length);
        }
      );


  }

  getChangeAnswer() {
    this.getGameData();
    this.pickSquare(this.remember);
  }

  pickSquare(value) {

    console.log ('value %s remember %s', value, this.remember);
    this.remember = value;


    let clearme = document.querySelector('.red');
    if (clearme !== null) {
      clearme.classList.remove('red');
    }

    let test = document.getElementById(value);
    test.classList.add('red');
    clearme = document.querySelector('.red');
    console.log ('clear me %s\n\n', clearme);
  }
}
