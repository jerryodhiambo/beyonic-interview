import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss'],
})
export class PostLoginComponent implements OnInit {
  mobileQuery!: MediaQueryList;
  private mobileQueryListener!: () => void;
  loading: boolean = false;
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private mediaMatcher: MediaMatcher
  ) {
    this.getMobileQuery();
    this.mobileQueryListener = (): void => cdr.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {}

  getMobileQuery(): void {
    const currentUrl = this.router.url;
    if (currentUrl.includes('verify')) {
      this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1024px)');
    } else {
      this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 970px)');
    }
  }
}
