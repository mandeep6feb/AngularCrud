import { Component, Input, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 form: any;
FormData: any;
Edit: any;
_id: any;
env = 'http://localhost:3000/api/';
constructor(private http: Http, public route: ActivatedRoute, private router: Router) {
  this.route.params.subscribe(param => {
    if (param.id) {
      this.getFormData(param.id);
    }});
}
getFormData(id) {
    console.log('sdfdf');
    const url = this.env + 'formData/' + id;
    this.http.get(url).subscribe( (res: any) => {
      this.form = JSON.parse(res._body);
      this._id = this.form._id;
    }, error => {
      console.log(error);
    });
}
gotoRoute(id) {
  this.router.navigateByUrl('form/' + id);
}
get() {
	 const url = this.env + 'form';
	 this.http.get(url).subscribe( (res: any) => {
   this.FormData = JSON.parse(res._body);
   console.log(this.FormData);

  }, error => {
    console.log(error);
  });
}
getDelete(id) {
  const url = this.env + 'form/' + id;
  this.http.delete(url).subscribe( (res: any) => {
  this.get();
  }, error => {
    console.log(error);
  })
}
ngOnInit() {
  this.get();
}

}
