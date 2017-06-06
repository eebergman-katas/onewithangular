import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from 'app/characters/characters.component';
import { CharactersListComponent } from 'app/characters/characters-list/characters-list.component';
import { CharactersDetailComponent } from 'app/characters/characters-detail/characters-detail.component';

const routes: Routes = [
    { path: '', component: CharactersComponent, children: [

            { path: '', component: CharactersListComponent, children: [
                    { path: '', component: CharactersDetailComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule { }
