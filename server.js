const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));


const posts = [
  {
    id: 1,
    title: "Vítejte na našem blogu",
    content: "Toto je úvodní článek našeho blogu. Zde budeme publikovat zajímavé články na různá témata.",
    author: "Redakce",
    date: new Date("2024-01-20"),
    category: "úvod",
    tags: ["uvítání", "blog", "úvod"],
    views: 125,
    comments: 5
  },
  {
    id: 2,
    title: "Tipy pro začínající programátory",
    content: "Začínáte s programováním? Zde je pár tipů jak začít: vyberte si jeden programovací jazyk, praktikujte každý den, nebuďte na sebe příliš tvrdí a učte se z chyb.",
    author: "Jan Programátor",
    date: new Date("2024-01-19"),
    category: "programování",
    tags: ["programování", "tipy", "začátečníci"],
    views: 342,
    comments: 12
  },
  {
    id: 3,
    title: "Nejlepší cestovatelské destinace pro rok 2024",
    content: "Plánujete dovolenou? Podívejte se na tyto skvělé destinace: Japonsko v období sakur, řecké ostrovy, Island za polární září nebo Nový Zéland pro milovníky přírody.",
    author: "Cestovatelka Anna",
    date: new Date("2024-01-18"),
    category: "cestování",
    tags: ["cestování", "dovolená", "destinace"],
    views: 287,
    comments: 8
  },
  {
    id: 4,
    title: "Jak udržovat zdravý životní styl",
    content: "Zdravý životní styl není jen o cvičení. Důležité je také: pravidelný spánek, vyvážená strava, dostatek vody a minimalizace stresu. Malé změny mohou mít velký dopad.",
    author: "Zdravotní poradce",
    date: new Date("2024-01-17"),
    category: "zdraví",
    tags: ["zdraví", "životní styl", "wellness"],
    views: 198,
    comments: 6
  },
  {
    id: 5,
    title: "Recenze: Nejlepší filmy loňského roku",
    content: "Loňský rok přinesl mnoho skvělých filmů. Mezi top patří: sci-fi drama o umělé inteligenci, dobrodružný film z exotických krajin a dojemný příběh o přátelství.",
    author: "Filmový kritik",
    date: new Date("2024-01-16"),
    category: "kultura",
    tags: ["filmy", "recenze", "kultura"],
    views: 431,
    comments: 15
  }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT} (without MongoDB)`);
});
