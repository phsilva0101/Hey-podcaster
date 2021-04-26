import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

type Episode = {
    id: string,
    title: string,
    thumbnail: string,
    members: string,
    publishedAt: string,
    duration: number,
    durationAsString: string,
    description: string,
    url: string,
}

type EpisodeProps ={
    episode: Episode;
}

export default function Episoode({episode}: EpisodeProps){

    return(
        <h1>{episode.title}</h1>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return{
        paths: [],
        fallback: 'blocking'
    }    
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const {slug } = ctx.params;

    const { data } = await api.get(`/episodes ${slug}`) 
    

    
  const episode = { // <== episodes agora é nosso 'data', só que com dados formatados
    
      id: data.id,
      title: data.title,
      members: data.members,
      thumbnail: data.thumbnail,
      publishedAt: format(parseISO(data.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(data.file.duration),
      durationAsString: convertDurationToTimeString(Number(data.file.duration)),
      description: data.description,
      url: data.file.url
  };
    return{
        props:{
            episode
        },
        revalidate: 60 * 60 * 24, //24 hours
       }
}