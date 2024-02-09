const Eventhandlers = () => {
    //scripts
    const computeRate=(hours)=>{
        const salary = 250 * hours;
        console.log(salary);
    }
    const buttonE = (e)=>{
        console.log(e.clientX);
    }
    return (
        <div className='my-2'>
            <h1>Eventhandlers Demo</h1>
            <button className="btn btn-primary" onClick={()=>computeRate(12)}>Compute Salary</button>
            <button className="btn btn-primary ms-2" onClick={(e)=>buttonE(e)}>Function e</button> 
            </div>
    );
};
export default Eventhandlers;


