import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[appCounterOf]'
})
export class CounterDirective implements OnChanges {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>) {
    }

  // tslint:disable-next-line:no-input-rename
  @Input('appCounterOf')
  counter: number;

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter ; i++) {
      this.container.createEmbeddedView(
        this.template, new CounterDirectiveContext(i + 1)
      );
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
