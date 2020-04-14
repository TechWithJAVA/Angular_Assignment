import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [

    { "id": 1, "name": "Spring" },
    { "id": 2, "name": "Hibernet" },
    { "id": 3, "name": "Junit" },
    { "id": 4, "name": "Html" },
    { "id": 5, "name": "CSS" }

  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(course) {
    this.router.navigate(['/course-list', course.id]);
  }

}
