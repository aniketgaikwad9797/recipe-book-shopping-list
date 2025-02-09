import { NgModule } from "@angular/core";
import { DropdownDirectiveRevision } from "./dropdown-dir-revision.directive";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[DropdownDirective, DropdownDirectiveRevision],
    imports:[CommonModule],
    exports:[DropdownDirectiveRevision, DropdownDirective,CommonModule]
})
export class SharedModule{}