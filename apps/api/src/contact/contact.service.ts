import { Injectable } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { Contact } from './contact.model'

@Injectable()
export class ContactService {
  private contacts: Contact[] = []
  private nextId = 1

  create(dto: CreateContactDto): Contact {
    const contact: Contact = {
      id: this.nextId++,
      ...dto,
      createdAt: new Date().toISOString(),
    }
    this.contacts.push(contact)
    return contact
  }
}
