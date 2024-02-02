import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APIService } from 'src/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginCheck: any = '';

  AddData = new FormGroup({
    Email: new FormControl("", [Validators.required]),
    Password: new FormControl("", [Validators.required])
  })

  constructor(private apiservice: APIService) { }

  ngOnInit() {

  }

  SaveData() {
    debugger
    this.LoginCheck = this.AddData.value;
  }
}
