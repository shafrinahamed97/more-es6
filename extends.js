class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
     }

}

class Instructor extends TeamMember{
    name;
    designation = 'Web Course Instruction'
    team = 'web team'
    
    constructor(name, location){
      super(name, location)

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

class Deveolper extends TeamMember{
   
    designation = 'Web Course Instruction'
    team = 'web team'
    tech;
   
    constructor(name, location,tech){
       super(name,location);
        this.tech = tech;

    }
      developFeature(time)
    {
      console.log( `Please develop the support session at ${time}`)
    }
    release(version)
    {
        console.log(`Please release the version ${version}`)
    }
    
}







class JobPlacement extends TeamMember{
    
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
   region;

    
    constructor(name, location,tech){
        super(name,location);
       this.region = region;

    }
      developFeature(time)
    {
      console.log( `Please develop the support session at ${time}`)
    }
    release(version)
    {
        console.log(`Please release the version ${version}`)
    }
}


const alia = new Deveolper('Alia Bhaat','Dhaka','React');
console.log(alia);
alia.provideFeedback();






