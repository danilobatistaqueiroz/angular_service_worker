import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogUpdateService } from './log-update.service';
import { isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  providers: [LogUpdateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workers2';
  timer = new Date();

  constructor(){
    console.log("isDevMode: "+isDevMode());
  }

  logUpdateService = inject(LogUpdateService);

  refreshTimer(){
    this.timer = new Date();
  }

  toggleCheckForUpdate(){
    if(!this.logUpdateService.intervalSubscription){
      this.logUpdateService.checkForUpdate();
    } else {
      this.logUpdateService.stopCheckForUpdate();
    }
  }
}
