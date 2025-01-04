import { useEffect, useState } from "react"
import axios from 'axios'
import * as S from "../styles/musicStatistic"
import { BASE_URL } from "../components/api"
export default function MusicStatistic(){
    const [statisticDatas,setStatisticDatas] = useState([])
    const [totalSongs,setTotalSongs] = useState<number>(0)
    const [uniqueArtist,setUniqueArtist] = useState<number>(0)
    const [uniqueAlbums,setUniqueAlbums] = useState<number>(0)
    const [uniqueGenres,setUniqueGenres] = useState<number>(0)
    const [SongsPerGenre,setSongsPerGenre] = useState({})
    const [isAlbumSong,setIsAlbumSong] = useState<boolean>(false)
    const [indexAlbumSong,setIndexAlbumSong] = useState<string>('')
    
    useEffect(()=>{
        const fetchStatistic=async()=>{
            try{
                const response = await axios.get(`${BASE_URL}/statistic`)
                // console.log('response: ',response.data.message.songs_Albums_PerArtist[0].albums[0].albumName)
                const res = response.data.message
                console.log('response: ',res.songs_Albums_PerArtist[0].albums[0])
                setStatisticDatas(res.songs_Albums_PerArtist)
                setTotalSongs(res.totalSongs)
                setUniqueArtist(res.uniqueArtist)
                setUniqueAlbums(res.uniqueAlbums)
                setUniqueGenres(res.uniqueGenres)
                setSongsPerGenre(res.songsPerGenre)
            }
            catch(err){
                    if (axios.isAxiosError(err)){
                    console.log('error**: ',err.response?.data?.error)
                }
                else{
                    console.log('unknow error** ')
                }
            }
        }
        fetchStatistic();
    },[])

    const handleAlbumSong=(albumId)=>{
        if(albumId === indexAlbumSong){
            setIsAlbumSong(!isAlbumSong)
            setIndexAlbumSong('')
        }
        else{
            setIsAlbumSong(false)
            setIndexAlbumSong(albumId)
        }
        
        console.log(albumId)
    }
    return <S.Main>
        <S.Count>
            <p>Songs: {totalSongs}</p>
            <p>Artists: {uniqueArtist}</p>
            <p>Albums: {uniqueAlbums}</p>
            <p>Genres: {uniqueGenres}</p>
        </S.Count>
        <S.Container>
            <S.ArtistList>
                <div className="colName">
                    <p className="colArtist">Artists</p>
                    <p className="colAlbum">Albums</p>
                    <p className="colSong">Songs</p>
                </div>
                {
                    statisticDatas ? statisticDatas.map((data,index)=>(
                        <S.ArtList key={index}>
                            <div className="artlist1">
                                <p>{data.artist}: </p>
                            </div>
                            <div className="artlist2">
                                <p className="alblength">{data.number}: </p>
                                <div className="mainAlb">
                                    {
                                        data.albums ? data.albums.map((albumData)=>(
                                            <S.AlbList key={albumData.albumId}>
                                                <div className="alblist1">
                                                    <p onClick={()=>handleAlbumSong(albumData.albumId)} className="albname">{albumData.albumName}: {albumData.number} songs </p>
                                                    {/* <p className="albnumb">{albumData.number}</p> */}
                                                </div>
                                                <div className="alblist2">
                                                    { albumData.albumId === indexAlbumSong && <div>
                                                        {/* <p>{index}: {indexAlbumSong}</p> */}
                                                        {
                                                            albumData ? albumData.songs.map((song,index)=>(
                                                                <div key={index}>
                                                                    <p>- {song.songTitle}</p>
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
                                    }
                                </div>
                            </div>
                        </S.ArtList>
                    )) :
                    <p>no songs</p>
                }
            </S.ArtistList>
            <S.GenreList>
                <h2>Songs per Genre</h2>
                {SongsPerGenre ? Object.entries(SongsPerGenre).map(([song,count])=>(
                    <div key={song}>
                        <p className="gensong">{song}: </p>
                        <p className="gencount">{count}</p>
                    </div>
                )) :
                    <p>no songs</p>
            }
            </S.GenreList>
        </S.Container>
        </S.Main>
}