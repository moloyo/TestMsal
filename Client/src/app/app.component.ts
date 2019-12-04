import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientTestMsal';
  values: any[];
  loggedIn: boolean;

  constructor(private http: HttpClient, private authService: MsalService) {
    if (this.authService.getUser()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  ngOnInit() {
    this.http.get(`${environment.api}/values`).subscribe({
      next: (result: any[]) => {
        this.values = result;
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('Finallized')
    })
  }

  login() {
    this.authService.loginRedirect();
  }

  logout() {
    this.authService.logout();
  }
}
