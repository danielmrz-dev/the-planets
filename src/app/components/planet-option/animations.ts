import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const stag = trigger('staggingPlanets', [
    transition('* <=> *', [
        style({ opacity: 0 }),
        query('.planets__option', [
            stagger(100, [
                animate(500, style({ opacity: 1 }))
            ])
        ])
    ])
])