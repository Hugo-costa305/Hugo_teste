import{Component, EventEmitter, Output} from '@angular/core';
@Component ({
selector: 'app-nova-transferencia',
templateUrl:'./nova-transferencia.component.html',
styleUrls:['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent{


  @Output() aoTransferir = new EventEmitter<any>();

  valor: number=12 ;
  destino: number=222 ;

  transferir(){
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.limparcampos();

   }

   limparcampos(){
     this.valor = 0;
     this.destino = 0;
   }

}