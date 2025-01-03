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
    
    useEffect(()=>{
        const fetchStatistic=async()=>{
            try{
                const response = await axios.get(`${BASE_URL}/statistic`)
                // console.log('response: ',response.data.message.songs_Albums_PerArtist[0].albums[0].albumName)
                const res = response.data.message
                console.log('response: ',res)
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
    return <S.Main>
        <S.Count>
            <p>Songs: {totalSongs}</p>
            <p>Artists: {uniqueArtist}</p>
            <p>Albums: {uniqueAlbums}</p>
            <p>Genres: {uniqueGenres}</p>
        </S.Count>
        <S.Container>
            <S.ArtistList>
                {
                    statisticDatas && statisticDatas.map((data,index)=>(
                        <S.ArtList key={index}>
                            <p>{data.artist} {data.number}</p>
                            {data.albums && data.albums.map((albumData,index)=>(
                                <S.AlbList key={index}>
                                    <p>{albumData.albumName} {albumData.number}</p>
                                </S.AlbList>
                            ))}
                        </S.ArtList>
                    ))
                }
            </S.ArtistList>
            <S.GenreList>

            </S.GenreList>
        </S.Container>
        </S.Main>
}