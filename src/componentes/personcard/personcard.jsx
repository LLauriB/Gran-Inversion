
const Person = (props) => {
    return(
        <>
            <h1>{props.lastName}{props.firstName}</h1>
            <p>Age:{props.age}</p>
            <p>Hair color:{props.hairColor}</p> 
        </>
    );
}

export default Person;