import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

export class Form {
    _id: any;
    f_name: any;
    l_name: any;
    email: any;
    mobile: any;
    address: any;
    constructor() {
}
}
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  form: any;
  FormData: any;
  Edit: any;
  _id: any;
  env = environment.apiBase;
  constructor(private http: Http, public route: ActivatedRoute, private router: Router) {
    this.form = new Form();
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
  update() {
    const url = this.env + 'form/' + this._id;
    this.form._id = this._id;
    this.http.put(url, this.form).subscribe( (res: any) => {
    console.log(res);
  this.router.navigateByUrl('/');

    this.get();
    }, error => {
      console.log(error);
    });
  }
  save() {
    const url = this.env + 'form';
    console.log(this.form);
    this.http.post(url, this.form).subscribe( (res: any) => {
      console.log(res);

    this.get();
    }, error => {
      console.log(error);
    });
  }
  get() {
     const url = this.env + 'form';
    this.http.get(url).subscribe( (res: any) => {
      this.FormData = JSON.parse(res._body);
      console.log(this.FormData);

    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

  }
