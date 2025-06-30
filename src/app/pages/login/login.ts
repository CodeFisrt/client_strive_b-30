import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/services/user';
import { Router } from '@angular/router';
import { UserLogin } from '../../core/models/class/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj: UserLogin = new UserLogin();
  
  userService =  inject(User); //16 _auth agurd + inteceptor as arrow fun

  router = inject(Router);

  onLogin() {
     debugger;
    this.userService.onLogin(this.loginObj).subscribe({
      next:(response:any) => {
        debugger;
        const data =  response.data.data;
        const strData =  JSON.stringify(data);
        localStorage.setItem("clinetStriveUser",strData);
        this.router.navigateByUrl('/client-list')
      },
      error:(error:any)=>{
        debugger;
      }
    })
  }

}
