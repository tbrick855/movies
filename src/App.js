import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieList from './components/MovieList.jsx';
import MovieDetail from './components/MovieDetail.jsx';

const MOVIES = [
  {
    id: 'tt2382320',
    title: 'No Time to Die',
    staring: 'Daniel Craig, Ana de Armas',
    director: 'Cary Joji Fukunaga',
    rating: '7.6',
    promo: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.'
  },
  {
    id: 'tt9421570',
    title: 'The Guilty',
    staring: 'Jake Gyllenhaal, Riley Keough',
    director: 'Antoine Fuqua',
    rating: '6.3',
    promo: 'https://m.media-amazon.com/images/M/MV5BMTJjYjVkMGQtNTM1Yi00Mjc3LWI5YzEtN2NiYTQ4NDU4NjdmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR4,0,45,67_AL_.jpg',
    description: 'A demoted police officer assigned to a call dispatch desk is conflicted when he receives an emergency phone call from a kidnapped woman.'
  },
  {
    id: 'tt8110232',
    title: 'The Many Saints of Newark',
    staring: 'Alessandro Nivola, Leslie Odom Jr.',
    director: 'Alan Taylor',
    rating: '6.4',
    promo: 'https://m.media-amazon.com/images/M/MV5BYmQzNmY3YzItOTE3OC00NGZjLTkwZDYtOWVmM2QyMzhiYTgwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: "Witness the making of Tony Soprano. The story that reveals the humanity behind Tony's struggles and the influence his family - especially his uncle, Dickie Moltisanti - had over him becoming the most iconic mob boss of all time."
  },
  {
    id: 'tt7097896',
    title: 'Venom: Let There Be Carnage',
    staring: 'Tom Hardy, Woody Harrelson',
    director: 'Andy Serkis',
    rating: '6.4',
    promo: 'https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.'
  },
  {
    id: 'tt1160419',
    title: 'Dune',
    staring: 'Timothée Chalamet, Rebecca Ferguson',
    director: 'Denis Villeneuve',
    rating: '8.3',
    promo: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy."
  },
  {
    id: 'tt6264654',
    title: 'Free Guy',
    staring: 'Ryan Reynolds, Jodie Comer',
    director: 'Shawn Levy',
    rating: '7.3',
    promo: 'https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game."
  },
  {
    id: 'tt3480822',
    title: 'Black Widow',
    staring: 'Scarlett Johansson, Florence Pugh',
    director: 'Cate Shortland',
    rating: '6.8',
    promo: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.'
  },
  {
    id: 'tt4244994',
    title: 'The Last Duel',
    staring: 'Matt Damon, Adam Driver',
    director: 'Ridley Scott',
    rating: '7.7',
    promo: 'https://m.media-amazon.com/images/M/MV5BZGExZTUzYWQtYWJjZi00OTI4LTk4OGYtNTA2YzcwMmNiZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: 'King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel.'
  },
  {
    id: 'tt9376612',
    title: 'Shang-Chi and the Legend of the Ten Rings',
    staring: 'Simu Liu, Awkwafina',
    director: 'Destin Daniel Cretton',
    rating: '7.9',
    promo: 'https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    description: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.'
  },
  {
    id: 'tt6920084',
    title: 'Resident Evil: Welcome to Raccoon City',
    staring: 'Kaya Scodelario, Robbie Amell',
    director: 'Johannes Roberts',
    rating: '5.2',
    promo: 'https://m.media-amazon.com/images/M/MV5BNjRmMDUxODctYjg3NC00NDRhLWJhZWItMjg0OTZkMDBjNWUxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY67_CR4,0,45,67_AL_.jpg',
    description: 'Set in 1998, this origin story explores the secrets of the mysterious Spencer Mansion and the ill-fated Raccoon City.'
  },
]

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Movie List</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/movie/:id" children={<MovieDetail />} />
        </Switch>
      </div>
    </Router>
  );
}
