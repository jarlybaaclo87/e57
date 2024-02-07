//embedding expression in jsx
const Message = ()=>{
    const name="Jason Priestly";
    const payRate= 2500;
    return (
        <h3>
            Congratulations! Welcome to Turing.com {name}, your payrate per hour is {payRate} 
        </h3>
    );
};
export default Message;