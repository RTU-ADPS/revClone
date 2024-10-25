import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-friend-history',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './friend-history.component.html',
  styleUrl: './friend-history.component.css'
})
export class FriendHistoryComponent implements OnInit {
  friendId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.friendId = this.route.snapshot.paramMap.get('id');
  }
}
