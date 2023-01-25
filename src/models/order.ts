export class Order {
  title: string;
  quantity: number;
  dateCommande: Date;
  contactMail: string;

  constructor(
    title: string,
    quantity: number,
    dateCommande: Date,
    contactMail: string
  ) {
    this.title = title;
    this.quantity = quantity;
    this.dateCommande = dateCommande;
    this.contactMail = contactMail;
  }
}
