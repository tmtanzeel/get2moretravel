import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get2moretravel';

  checkboxes;

  constructor(private http: HttpClient) {

  }

  onSubmit(contactForm: NgForm) {
    console.log("called");
    if (contactForm.valid) {
      console.log("valid");
      const email = contactForm.value;
      console.log(email.email);
      console.log(email.experience);
      console.log(email.hear);
      console.log(email.hotels);

      console.log(email.cars);
      console.log(email.meals);
      console.log(email.sightseeing);
      console.log(email.again);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/asdlf7asdf',
        {
          replyto: email.email,
          experience: email.experience,
          heardFrom: email.hear,
          hotelAccomodation: email.hotels
        },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
    else {
      console.log("form invalid");
      
    }
  }
}
