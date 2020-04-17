import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appModifyDash]',
})
export class ModifyDashDirective implements OnInit {
  @Input() dashArray: string;
  @Input() dashOffset: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.el.nativeElement.style.strokeDasharray = this.dashArray;
      this.el.nativeElement.style.strokeDashoffset = this.dashOffset;
    }, 100);
  }
}
