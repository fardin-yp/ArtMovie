import Image from 'next/image'

const SerialIrani = (props) => {

const filter = props.serials.reverse().filter(re => {
   return re.jender === 'irani'
})

    const displayedMovies = filter.reverse().map(movi => {
       return<a key={movi._id} href={`/serial/${movi._id}`}><div className='irani'>
                <Image className="irani_image" quality={50} width={200} height={150} src={`/uploads/${movi.image}`} alt="movie"/>
                <p> دانلود سریال {movi.title} </p>
            </div>
            <hr style={{position:"relative",color:'silver',width:"100%",top:"15px",opacity:"0.5",height:"0px"}} />
            </a>
        })
    

    return (
        <div className="irani-card">
            <p style={{fontSize:"15px",top:"3px"}} >تازه ترین سریال های ایرانی</p>
          {displayedMovies}
        </div>
    )
}

export default SerialIrani
