class Employee{
    constructor(name,email,address)
    {
        this.name=name;
        this.email=email;
        this.address=address;
    }
    diplayInfo (){
        console.log(`${this.name},${this.email},${this.address}`);

    }
    setBasicSalary(salary)
    {
        this.salary=salary;
    }
    getBasicSalary()
    {
        console.log(`Salary is ${this.salary}`);
    }
    calculateNetSalary(bonus)
    {
        let net_salary=this.salary+bonus;
        console.log(`Net salary is ${net_salary}`)
    }
}
let emp1=new Employee("Zeyar","zeyar@gmail.com","MDY");
emp1.diplayInfo();
emp1.setBasicSalary(3000000);
emp1.getBasicSalary();
emp1.calculateNetSalary(500000);

class bankAccount{
    constructor(balance,owner)
    {
        this.balance=balance;
        this.owner=owner;
    }
    displayInfo ()
    {
        console.log(`${this.balance}`);
    }
    deposit(amount)
    {
        this.balance+=amount;
    }
    withdraw(amount){
        if(amount<this.balance)
        {
            this.balance-=amount;
        }
        else{
            console.log("Not sufficient balance")
        }
    }
    getBalance()
    {
        
        console.log(`Balance is ${this.balance}`);
    }
    transfer(amount,account)
    {
        if(amount<this.balance)
        {
            this.balance-=amount;
            account.balance+=amount;
        }
    }
}
class Customer{
    constructor(name,email,address)
    {
        this.name=name;
        this.email=email;
        this.address=address;
    }
    diplayInfo()
    {
        console.log(`${this.name},${this.email},${this.address}`)
    }
}
customer1=new Customer("Zeyar","zeyar@gmail.com","MDY")

bk1=new bankAccount(500000,customer1);
bk1.getBalance();
bk1.withdraw(20000);
bk1.getBalance();

bk2=new bankAccount(120000);
bk2.getBalance();

bk1.transfer(10000,bk2);
bk2.getBalance();
bk1.getBalance();

date=new Date()
console.log(date)
console.log(Date.now())

dob=new Date('10/08/2002');
console.log(dob.getTime())