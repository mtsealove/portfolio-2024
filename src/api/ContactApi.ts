import { Contact } from '@/models/contact';
import instance from './instance';

export interface CreateContactDto {
    email: string;
    content: string;
}

export function createContact(dto: CreateContactDto): Promise<Contact> {
  return instance.post('/contact', dto);
}

export function getContacts() : Promise<Contact[]> {
  return instance.get('/contact');
}
