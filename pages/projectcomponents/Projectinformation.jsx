function Projectinformation ({projDescrip, name, link, photo, skills}){

    return(
<div className='flex justify-center pl-7'>

            <div class=" max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <a  href = "/rzBusinessIA.pdf" target="_blank">
                        <img src ={photo} class = "hover:scale-125 transition ease-in-out hover:-translate-y-1 hover:rounded-md">
                        </img>
                    </a>
                    <div>
                        <ul class = "flex flex-wrap justify-evenly  my-1 ">
                        {skills?.map(item =>
                            <li key = "{item}" class = "text-gray-900 dark:text-white  mx-0.5 my-1 rounded-md bg-slate-300 dark:bg-slate-500 px-2 py-1 text-sm" >{item}</li>
                            )}
                            
                        </ul>        
                    </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{projDescrip}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-400 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                    <a href = {link} target="_blank" rel="noreferrer"> View more</a>
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    )

}
export default Projectinformation;


