function Projectinformation ({projDescrip, name, link, photo, skills}){


    //var descrip = projDescrip.substring(0,120)+"...";

    //console.log(descrip);

    return(
<div className='flex justify-start pl-7 card '>

            <div className=" max-w-sm p-5 bg-base-300 rounded-lg shadow-md ">
                <a href="">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">{name}</h5>
                </a>
                <div className="image-full">
                <a target="_blank">
                        <img src ={photo} className = "hover:scale-125 transition ease-in-out hover:-translate-y-1 hover:rounded-md">
                        </img>
                    </a>
                    </div>
                    <div className="card-body">
                        <ul className = "flex flex-wrap justify-evenly  my-1 ">
                        {skills?.map(item =>
                            <li key = {item} className = "text-base-300   mx-0.5 my-1 rounded-md bg-info  px-2 py-1 text-sm" >{item}</li>
                            )}
                            
                        </ul>        
                    </div>
                <p className="mb-3 font-normal text-secondary ">{projDescrip}</p>
                <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-base-300 bg-accent rounded-lg hover:bg-accent-focus ">
                    <a href = {link} target="_blank" rel="noreferrer"> View more</a>
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    )

}
export default Projectinformation;


