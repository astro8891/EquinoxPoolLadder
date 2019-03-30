import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Equinox Pool Ladder';
  repData;
  valButton = 'save';
  errorMessage: String;

  constructor(private newService: CommonService) { }

  ngOnInit(): void {

    this.newService.getUser().subscribe(data => this.repData = data);
  }

  onSave(user: any, isValid: boolean) {

    user.mode = this.valButton;

    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data); this.ngOnInit();
      },
        error => this.errorMessage = error);
  }

  edit = function (kk) {

    this.id = kk._id;
    this.name = kk._name;
    this.address = kk._address;
    this.valButton = 'Update';
  };

  delete(id: any) {

    this.newService.deleteUser(id).subscribe(
      data => {
        alert(data.data); this.ngOnInit();
      },
      error => this.errorMessage = error);
  }
}
