import { Component, Input } from '@angular/core'; 

@Component({
    moduleId: module.id, // pra conseguir usar a pasta relativa.
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent {

    // permite esse parametro estar disponivel no componente
    @Input() titulo: string; // a tipagem é opcional. Tipa se quiser.
}