import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  providers: [LogUpdateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workers2';
  timer = new Date();

  logUpdateService = inject(LogUpdateService);

  refreshTimer(){
    this.timer = new Date();
  }
}
