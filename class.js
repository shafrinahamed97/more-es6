// syntactic sugar

class Instructor{
    name;
    designation = 'Web Course Instruction'
    team = 'web team'
    location;
    constructor(name, location){
        this.name =  name;
        this.location = location;

    }
    startSupportSession(time)
    {
      console.log( `start the support session at ${time}`)
    }
    createQuiz(module)
    {
        console.log(`please create quiz for module ${module}`)
    }

}
const shakib = new Instructor('shakib','dhaka')
console.log(shakib);
shakib.startSupportSession('9.00 AM');
shakib.createQuiz(60);

const solaiman = new Instructor('solaiman khan','noakhali')
console.log(solaiman);

/*

  class : Template for making objects.

  object: 1) Property: Attribute of state
          2) Method: Do something function & Procedure

*/