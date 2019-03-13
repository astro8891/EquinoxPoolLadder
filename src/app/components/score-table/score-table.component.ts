import { Component, OnInit } from '@angular/core';

import { RestService } from '../../services/rest.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  users: User[];

  constructor(private restService: RestService) { }

  ngOnInit() {

    this.getUsers();
  }

  getUsers(): void {

    this.restService.getUser()
      .subscribe(result => (console.log(result), this.users = result));
  }

}
