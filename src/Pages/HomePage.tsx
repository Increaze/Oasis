import Feature from "../Components/Feature";
import { Sidebar } from "../Components/Sidebar";

export default function HomePage(){
    return (
        <>
          <section className="h-screen w-screen flex overflow-hidden">
           <Sidebar/>
           <main className="w-7/12 flex flex-col h-full overflow-hidden">
             <div className="flex justify-end mt-12 pr-20">
              <p className="font-medium text-base  text-grayish">
                Already have an account? <span className="text-hex">Sign In</span>
              </p>
               
              </div> 
              <div className="mt-36 pl-36 flex flex-col">
              <h1 className="font-bold text-3xl">Join Us!</h1>
              <p className="max-w-sm font-normal text-lg py-2  text-grayish">
                To begin this journey, tell us what type of account you’d be
                opening.
              </p>
              <Feature/>
            </div> 
            
            </main>
    
            
    
            
           
          </section>
        </>
      );
}