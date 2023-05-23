import { ElementRef } from '@angular/core';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  let el: ElementRef;
  it('should create an instance', () => {
    const directive = new TarefaConcluidaDirective(el);
    expect(directive).toBeTruthy();
  });
});
