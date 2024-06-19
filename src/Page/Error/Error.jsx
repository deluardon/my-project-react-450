



import { Link } from "react-router-dom";


const Error = () => {
  const gohome = (
    <>
      <Link to={"/"}>Go Home</Link>
    </>
  );

  return (
    <section >
   <div className="mt-40">
   <h1 className="text-5xl text-center">Opps!</h1>
      <div className="text-center mt-9">
        <button  className="btn btn-primary">{gohome}</button>
      </div>
   </div>

   
    </section>
  );
};

export default Error;





