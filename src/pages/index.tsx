import {GetStaticProps} from 'next'
import { api } from '../services/api'
import Link from 'next/link'

import Image from 'next/image'

import {format, parseISO} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import intervalToDuration from 'date-fns/intervalToDuration'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString'

import styles from './home.module.scss'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'


type Episode = {
  id: string,
  title: string,
  thumbnail: string,
  members: string,
  publishedAt: string,
  duration: number,
  durationAsString: string,
  url: string,
}

type HomeProps = {
  latestEpisodes: Episode[],
  allEpisodes: Episode[];

}

export default function Home({latestEpisodes, allEpisodes}: HomeProps) {
   const { play } = useContext(PlayerContext)

  return (
    <div className={styles.homeContainer}>
      <section className={styles.latestEpisodes}>
        <h2>Ultimos lançamentos</h2>

        <ul>
          {latestEpisodes.map(episode => {
            return(
              <li key={episode.id}>
                  <Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  objectFit="cover"
                  
                  />

                <div className={styles.episodeDetails}>
                  <Link href={`/episodes/${episode.id}`}>
                    <a >{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type="button" onClick={() => play(episode)}>
                  <img src="play-green.svg" alt="Tocar"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className={styles.allEpisodes}>
        <h2>
          Todos os episodios
        </h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
            
          </thead>
          <tbody>
            {allEpisodes.map(episode => {
              return(
                <tr key={episode.id}>
                  <td>
                    <Image 
                    width={120} 
                    height={120} 
                    src={episode.thumbnail} 
                    alt={episode.title}
                    objectFit="cover"
                    
                    />
                    </td>
                
                    <td> 
                      <Link href={`/episodes/${episode.id}`}>
                        <a >{episode.title}</a>
                      </Link> 
                    </td>  
                    <td>{episode.members} </td> 
                    <td style={{ width: 100}}>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    
                    <td>
                      <button type="button">
                        <img src="play-green.svg" alt="Tocar"/>
                      </button>
                    </td>
                </tr>
                )
              })}         
          </tbody>    
        </table>
      </section>
    </div>
  )
}

// Requisição API
export  const getStaticProps: GetStaticProps = async () => { 
	const {data} = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode =>{ // <== episodes agora é nosso 'data', só que com dados formatados
    return{
      id: episode.id,
      title: episode.title,
      members: episode.members,
      thumbnail: episode.thumbnail,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url


    };
  })

  const latestEpisodes = episodes.slice(0 , 2) // <== Novo retorno de daods fatiado
  const allEpisodes = episodes.slice(2, episodes.lenght)

	return {
	  props: { 
    //episodes: data
		//episodes
    latestEpisodes,
    allEpisodes
	},
	revalidate: 60 * 60 * 8 
   }
}