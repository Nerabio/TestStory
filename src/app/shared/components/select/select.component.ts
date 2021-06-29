import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SelectOption } from '../../interfaces/select-option.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

   @Input() public isOpen = false;

   @Input() public currentValue: any;
 
   @Output() public onClickItemOption = new EventEmitter<any>();
 
   @Input() public placeholder = '';
 
   @Input() public options: SelectOption[];
 
   constructor(private eRef: ElementRef) {
   }

   ngOnInit() {}
    
   public get label(): string {
     const option = this.options?.find(o => o.value === this.currentValue);
     return (option) ? option.label : this.placeholder;
   }
 
   public onSelectOption(value): void {
     this.currentValue = value;
     this.onClickItemOption.emit(value);
   }
 
   @HostListener('document:click', ['$event'])
   public onClickDocument(event): void {
     if (this.eRef.nativeElement.contains(event.target)) {
       this.isOpen = !this.isOpen;
       return;
     }
     this.isOpen = false;
   }
}
