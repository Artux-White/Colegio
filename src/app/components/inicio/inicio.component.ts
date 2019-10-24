import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as M from 'materialize-css';
import swal from'sweetalert2';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private contactService : ContactService) { }

  contactForm:FormGroup;
  
  ngOnInit() {

    
    document.addEventListener('DOMContentLoaded', function () {
      var subject = document.getElementById('subject')
      M.CharacterCounter.init(subject);
      var body = document.getElementById('body')
      M.CharacterCounter.init(body);
    });
    

    var scrollspy = document.querySelectorAll('.scrollspy');
    var instancesScrollspy = M.ScrollSpy.init(scrollspy);
    var parallax = document.querySelectorAll('.parallax');
    var instancesParallax = M.Parallax.init(parallax);

    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.minLength(10)]),
      body: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])
    })
  }

  onSubmit(){
    this.contactService.sendEmail(this.contactForm.value).subscribe(() => 
    this.showAlertSuccess(),
     error => this.showAlertError(error));
  }

  showAlertSuccess(){
    swal.fire('contact', 'enviado', 'success');
    this.contactForm.reset();
  }

  showAlertError(error){
    swal.fire('Opss', 'error', 'error');
  }

 

}
