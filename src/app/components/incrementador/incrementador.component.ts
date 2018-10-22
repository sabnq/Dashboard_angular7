import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda );
    // console.log('Progreso',this.progreso);
  }

  ngOnInit() {}

  onChange(newValue:number){
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    if(newValue>=100){
      this.progreso = 100;
    }else if(newValue<=0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }     
    this.txtProgress.nativeElement.value = Number(this.progreso);
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    if (this.progreso > 100) {
      this.progreso = 100;
    } else if (this.progreso < 0) {
      this.progreso = 0;
    }
    this.txtProgress.nativeElement.focus();    
  }
}
