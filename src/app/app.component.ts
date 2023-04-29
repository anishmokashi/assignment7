import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7';
  str="Marvellous Infosystems"
  
  public fun()
  { 

   this.str="Educating for better tomorrow";
  }
}
//function call on event (click)