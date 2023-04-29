import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  str="Marvellous Infosystems";
  str1=""
  public up()
  { 
    this.str1=this.str.toLocaleUpperCase()
   
  }
  public down()
  { 
    this.str1=this.str.toLocaleLowerCase()
   
  }
}
/*In this funtion we have one common string and when user click on the button for uppercase or lower case then according 
to that method is called where we take the string and convert it to the desired string using inbuilt function and then copy it to the new variable and
display that new variable on then screen when the particular method is called  */