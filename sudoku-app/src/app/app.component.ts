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
  }
}
