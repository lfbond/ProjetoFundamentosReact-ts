import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'; 
import './global.css';

//author: {avatarUrl, name, role}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/69223872?v=4',
      name: 'Luís Felipe Bond',
      role: 'CTO - @F1Technology'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-12 20:30:25')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/69223872?v=4',
      name: 'Luis',
      role: '@F1Technology'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},        
    ],
    publishedAt: new Date('2022-05-18 10:45:12')
  }
]

export function App() {
  return (  
      <div>
        <Header/>
        
        <div className= {styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              ) 
            })}
          </main>
        </div>
      </div>
  )
}
