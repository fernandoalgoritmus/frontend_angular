import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User("","")

  onSubmit() {
    // console.log(this.userModel)
    this.loginService.login(this.userModel).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }
}
