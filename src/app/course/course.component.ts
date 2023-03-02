import { Component } from "@angular/core"

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: []
})
export class CourseComponent{
    titre = "Formation angular"

    getDescription():string
    {
        return "Description de la formation"
    }
}