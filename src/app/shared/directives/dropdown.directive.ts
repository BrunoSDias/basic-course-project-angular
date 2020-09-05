import { 
  Directive, 
  OnInit, 
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[bdDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') openClass = false
  
  constructor(){}
  ngOnInit() {

  }

  @HostListener('click') onToggle(eventData: Event) {
    this.openClass = !this.openClass
  }
}