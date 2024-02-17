/*
    class just beahve like the constructor functio we made in the 
                                
                        ==>e-commerce objects javascript 7.js<==

    and constructor in the class is the parameter acceptor in the class which accepts the paameter
    for te given class:

    Why we use class instead of the functions is just due to this property of the class

    +++++++> setter by set.variable() ======> you can set the value in the class and assign value to it
    +++++++> getter by set.variable=========> you can get the value from he class when ever you need

*/


class Product {
    constructor(firstName, lastName, age, education) {
        this.firstName = prompt("Enter your First name : ", "David");
        this.lastName = prompt("Enter your Last name : ", "Mandena");
        this.age = Number(prompt("Enter your Age : ", "9 or any other"));
        this.education = prompt("Enter your First name : ", "B.Sc,M.Sc,Phd");
        this.voteCastingcenter;

        console.log(`Here you are sir: ${this.firstName} ${this.lastName} , age ${this.age} and qualification of${this.education}.`)
        // ${firstName}will result in undefined
        // ${lastName}will result in undefined
        // ${this.firtName}will result in actual value
        // ${this.lastName}will result in actual value
        this.validification = function () {
            if (this.age >= 18) {
                console.log(`As your age is ${this.age}, so you are eligible to vote`);
            }

            else if (this.age < 18) {
                console.log(`As you are of just ${this.age},so you are too young to vote`);
            }

        }

    /*
        wrong syntax is given below

        set.voteCastingcenter)(value)
        {
            console.log("this is the set.voteCastingcenter()")
            return value*this.age;
        }
        get.voteCastingcenter()
        {
            console.log("This is the get.voteCastingcenter()")
        }

        corrected syntax is tried to be wrtten belw:

        
        seteducation(additional_diploma)
        {
            verifcation = this.education +additional_diploma;
            console.log(`The additional education beside the ${this.education} is ${additional_diploma}`)
        }
        
        geteducation()
        {
            console.log("It's Nice")
        }
        
        
        */
       
    }
    
}

// person.seteducation(">3")
// person.geteducation();

let person = new Product();
    // person.set(voteCastingcenter)

// not working  =======>  console.log(person.name());

person.validification();