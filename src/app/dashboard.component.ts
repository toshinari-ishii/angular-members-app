import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { MemberService } from './member.service';
// import { CdkDragDropSortingExample } from './drag-and-drop.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getMembers()
      .then(members  this.members = members);
  }
}
