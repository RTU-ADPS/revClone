import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
