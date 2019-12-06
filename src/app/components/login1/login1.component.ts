import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.sass']
})
export class Login1Component {

  email = 'eve.holt@reqres.in';
  password = 'cityslicka';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/home');
          }
        },
        r => {
          alert(r.error.error);
        });
  }



}