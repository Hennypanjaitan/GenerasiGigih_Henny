function Playlist(props)
{
    return(
        <div>
            <img src ={props.url}/>
            <h1>{props.name}</h1>
            <h3>{props.albumName}</h3>
            <h3>{props.artist}</h3> 
        </div>
        

    );
}
export default Playlist;


