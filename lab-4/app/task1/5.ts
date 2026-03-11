import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  @if(isServerRunning){
    <p>yes seerver is running</p>
  }
  @else{
  <p>server is not running</p>
  }`,
  
})
export class App {
  isServerRunning=true;
  // add the boolean property here
}
