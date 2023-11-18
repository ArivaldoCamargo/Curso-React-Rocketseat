import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';
import './global.css';


// author: { avatar_url: "", name: "", }
// publishedAt: Date
// Content: String

const posts: PostType[] = [
      {
      
            id: 1,
            author: {
                  avatarUrl: "https://github.com/diego3g.png",
                  name: "Cleiton Ferreira",
                  role: "CTO @ Rocketseat"
            },
            content: [

                  { type: 'paragraph', content: 'Fala galera!', },     
                  { type: 'paragraph', content: 'Foda demais para falar do que estou fazendo no momento.'},
                  { type: 'Link', content: 'jane.design/doctorcare</a>' },  
            
        ],
   
      publishedAt: new Date('2022-6-03 20:00:00'), 
  },
  {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋',},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'Link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-5-07 14:00:00')
  },
];
export function App() {

      return (
            <div>
                  <Header />
                  <div className={styles.wrapper}>
                        <Sidebar />

                         <main>
                              {posts.map(post => {
                               return (
                              <Post  
                              key={post.id}
                             post={post}
                              
                              />
                               )
                              })}
                        </main> 



            </div>
            </div>
      )
}


