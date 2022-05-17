import { Directive } from '@angular/core';
import { BaseConfigService } from './base-config.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private baseuser:BaseConfigService) { 
   let url= baseuser.url;
   console.log(url);
  }
   
}
