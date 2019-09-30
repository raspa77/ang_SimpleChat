export class User {
 
    constructor(
      public username: string,
      public password: string,
      public myBirthday: Date,
      public firstname?: string,
      public lastname?: string
    ){
   
    }
   
    get birthday(): string {
      return this.myBirthday.toISOString().split('T')[0];
    }
   
    set birthday(v: string) {
      const [year, month, day] = v.split('/');
      this.myBirthday = new Date(`${year}-${month}-${day}`);
    }

    get fullname() {
      return `${this.firstname} ${this.lastname}`
    }
   
    get description() {
      return this.asJson();
    }
   
    asJson(): string {
      return JSON.stringify(this);
    }
  }