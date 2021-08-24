import React,{useState ,useEffect} from 'react'


const jenres = () => {

    const [genres , setGenres] = useState("film")

    async function handleJenres(val){
      await localStorage.setItem("category", val)
      setGenres(val)
  }
  
 async function genresvalue () {
     const value = localStorage.getItem("category")
    if(!value){
     await setGenres("false")
    }
    await setGenres(value)
  }
  
  
  useEffect(() => {
      genresvalue()
    },[])

    return (
        <div className='jenres'>
        <div className="genres">
        <p>ژانر فیلم و سریال </p>
            <label className="switch" >
                <div className={ genres === "film" ? 'active-span':'not-active' }></div>
            <span onClick={() => handleJenres("film")} >فیلم</span>
            <span style={{position:"relative",right:"6px"}} onClick={() => handleJenres("serial")}>سریال</span>
        </label>
             
        </div>
        <div className="circle"><img src='/images/teater.png' alt="cinema logo"/></div>
           <div className="place-r">
               <ul>
               <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ==="serial" ? 'serial' :'film'}/action`}>اکشن</a></li>
               <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ==="serial" ? 'serial' :'film'}/horor`}>ترسناک</a></li>
               <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ==="serial" ? 'serial' :'film'}/fighting`}>جنگی</a></li>
               <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ==="serial" ? 'serial' :'film'}/imaginary`}>تخیلی</a></li>
               <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ==="serial" ? 'serial' :'film'}/history`}>تاریخی</a></li>
               <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ==="serial" ? 'serial' :'film'}/criminal`}>جنایی</a></li>
               </ul>
           </div>
           <div className="place-l">
           <ul>
           <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ? 'serial' :'film'}/comedy`}>کمدی</a></li>
           <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ? 'serial' :'film'}/drama`}>درام</a></li>
           <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ? 'serial' :'film'}/western`}>وسترن</a></li>
           <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ? 'serial' :'film'}/mystery`}>معمایی</a></li>
           <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ? 'serial' :'film'}/family`}>خانوادگی</a></li>
           <li><a style={{textDecoration:"none",color:"black"}} href={`/genres/${ genres ? 'serial' :'film'}/musical`}>موزیکال</a></li>
            </ul>
           </div>
        </div>
    )
}

export default jenres
