import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  isStart = false;
  welcomeText = 'Hi 👋';
  isShowProfile = false;
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}
  ngOnInit() {
    this.welcomeText = 'Hi 👋';
    setTimeout(() => {
      this.isStart = true;
      this.welcomeText = 'Tap below to begin';
      this.cdr.detectChanges();
    }, 3000);
  }
  onStart() {
    this.isShowProfile = true;
    this.router.navigate(['/profile']);
  }
}
