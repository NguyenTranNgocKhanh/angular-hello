import {Component} from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';

@Component({
    template: '<h3>This is component word</h3>',
    selector: 'app-word',
    styles : [`
        h3 {
            coler: red;
        }
    `]
})

export class WordComponent {}
