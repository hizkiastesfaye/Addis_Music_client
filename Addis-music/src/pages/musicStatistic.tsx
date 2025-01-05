import { useEffect, useState } from "react"
import axios from 'axios'
import * as S from "../styles/musicStatistic.style"
import { BASE_URL } from "../components/api"
export default function MusicStatistic(){
    interface StatisticDataStatus {
        artistId: string;
        artist:string;
        number:number;
        songNumber:number;
        albums: {
          albumId: string;
          albumName: string;
          number: number;
          songs: {
            songId: string;
            songTitle: string;
          }[];
        }[];
      }

    const [statisticDatas,setStatisticDatas] = useState<StatisticDataStatus[]>([])
    const [totalSongs,setTotalSongs] = useState<number>(0)
    const [uniqueArtist,setUniqueArtist] = useState<number>(0)
    const [uniqueAlbums,setUniqueAlbums] = useState<number>(0)
    const [uniqueGenres,setUniqueGenres] = useState<number>(0)
    const [SongsPerGenre,setSongsPerGenre] = useState<Record<string, number>>({})
    const [isAlbumSong,setIsAlbumSong] = useState<boolean>(false)
    const [indexAlbumSong,setIndexAlbumSong] = useState<string>('')
    const [indexArtistSong,setIndexArtistSong] = useState<string>('')
    const [loading, setLoading]=useState<boolean>(false)
    const [error,setError] = useState('')
    useEffect(()=>{
        const fetchStatistic=async()=>{
            try{
                setLoading(true)
                const response = await axios.get(`${BASE_URL}/statistic`)
                // console.log('response: ',response.data.message.songs_Albums_PerArtist[0].albums[0].albumName)
                const res = response.data.message
                console.log('response: ',res.songs_Albums_PerArtist[0].albums[0])
                console.log('response: ',res.songs_Albums_PerArtist)
                setStatisticDatas(res.songs_Albums_PerArtist)
                setTotalSongs(res.totalSongs)
                setUniqueArtist(res.uniqueArtist)
                setUniqueAlbums(res.uniqueAlbums)
                setUniqueGenres(res.uniqueGenres)
                setSongsPerGenre(res.songsPerGenre)
                setLoading(false)
                setError('')
            }
            catch(err){
                setLoading(false)

                if (axios.isAxiosError(err)){
                    console.log('error**: ',err?.response || err?.message)
                    setError(err.response?.data?.error || err?.message)
                }
                else{
                    console.log('unknown error** ')
                    setError('** unknown error ** ')
                }
            }
        }
        fetchStatistic();
    },[])
    const handleArtistSong=(artistId:string)=>{
        if(artistId === indexArtistSong){
            // setIsAlbumSong(!isAlbumSong)
            setIndexArtistSong('')
        }
        else{
            // setIsAlbumSong(false)
            setIndexArtistSong(artistId)
        }
        console.log(artistId)
    }
    const handleAlbumSong=(albumId:string)=>{
        setIsAlbumSong(!isAlbumSong)
        if(albumId === indexAlbumSong){
            // setIsAlbumSong(!isAlbumSong)
            setIndexAlbumSong('')
        }
        else{
            // setIsAlbumSong(false)
            setIndexAlbumSong(albumId)
        }
        
        console.log(albumId)
    }
    return <S.Main>
        <S.Count isError={error !== '' }>
            <p>Songs: {totalSongs}</p>
            <p>Artists: {uniqueArtist}</p>
            <p>Albums: {uniqueAlbums}</p>
            <p>Genres: {uniqueGenres}</p>
        </S.Count>
        {loading && <p style={{color:'red', paddingLeft:'30%'}}>loading ....</p>}
        {error && <p style={{color:'red', paddingLeft:'30%'}}>** {error}</p>}
        <S.Container>
            <S.ArtistList isError={error !== '' }>
                <div className="colName">
                    <p className="colArtist">Artists</p>
                    <p className="colAlbum">Albums</p>
                    <p className="colSong">Songs</p>
                </div>
                {
                    statisticDatas ? statisticDatas.map((data)=>(
                        <S.ArtList key={data.artistId} isArtistBorder = {data.artistId ===  indexArtistSong}>
                            <div className="artlist1">
                                <p onClick={()=>handleArtistSong(data.artistId)}  className="artlistname">{data.artist}: </p>
                                <div>
                                    <p >{data.number} album, {data.songNumber} songs </p>
                                </div>
                            </div>
                            <div className="artlist2">
                                {/* <p className="alblength">{data.number}: </p> */}
                                <div className="mainAlb">
                                    {data.artistId ===  indexArtistSong &&

                                        <div>{
                                            data.albums ? data.albums.map((albumData)=>(
                                                <S.AlbList key={albumData.albumId} isAlbumBorder = {albumData.albumId === indexAlbumSong}>
                                                    <div className="alblist1">
                                                        <div className="albNameNumb" >
                                                            <p onClick={()=>handleAlbumSong(albumData.albumId)} className="albname">{albumData.albumName}:</p>
                                                            <p className="alblist1Numb">{albumData.number} <span>Songs</span></p>
                                                        </div>
                                                        {/* <p className="albnumb">{albumData.number}</p> */}
                                                    </div>
                                                    <div className="alblist2">
                                                        { albumData.albumId === indexAlbumSong && <div>
                                                            {/* <p>{index}: {indexAlbumSong}</p> */}
                                                            {
                                                                albumData ? albumData.songs.map((song,index)=>(
                                                                    <div key={index}>
                                                                        <p>* {song.songTitle}</p>
                                                                    </div>
                                                                )) : 
                                                                <p>No songs</p>
                                                            }
                                                            </div>
                                                        }
                                                    </div>
                                                </S.AlbList>
                                            )) : 
                                                <p>No songs</p>
                                        }</div>
                                    }
                                </div>
                            </div>
                        </S.ArtList>
                    )) :
                    <p>no songs</p>
                }
            </S.ArtistList>
            <S.GenreList isError={error !== '' }>
                <h2>Songs per Genre</h2>
                {SongsPerGenre ? Object.entries(SongsPerGenre).map(([song,count])=>(
                    <div key={song}>
                        <p className="gensong">{song}: </p>
                        <p className="gencount">{count} songs</p>
                    </div>
                )) :
                    <p>no songs</p>
            }
            </S.GenreList>
        </S.Container>
        </S.Main>
}

