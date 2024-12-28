import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService, Contact } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contact: Contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContacts().subscribe((data: Contact[]) => {
        const contact = data.find((c) => c.id === +id);
        if (contact) {
          this.contact = contact;
        }
      });
    }
  }

  saveContact(): void {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact.id, this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    } else {
      this.contactService.createContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
