class Contact{
    constructor(name,email,phone){
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
    displaydetails(){
        console.log(`Name:${this.name}`);
        console.log(`email:${this.email}`);
        console.log(`Phone:${this.phone}`);
    }
}
class ContactManager{
    constructor(){
        this.contacts=[];
    }
    addcontact(contact){
        this.contacts.push(contact);
    }
    displaycontacts(){
        this.contacts.forEach(contact=>{
            contact.displaydetails();
        });
    }
    searchbyname(name){
        const foundit=this.contacts.filter(contact=>
            contact.name.toLowerCase().includes(name.toLowerCase())
            );
            if(foundit.length>0){
                console.log(`found ${foundit.length} contacts`);
                foundit.forEach(contact=>{
                    contact.displaydetails();
                });
            }
            else{
                console.log(`no contact found`);
            }
    }
}
const contactManager = new ContactManager();

contactManager.addcontact(new Contact('John', 'john@example.com', '1234567890'));
contactManager.addcontact(new Contact('Jane', 'jane@example.com', '9876543210'));

contactManager.displaycontacts();

contactManager.searchbyname('John');

