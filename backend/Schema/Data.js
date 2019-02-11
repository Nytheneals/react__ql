const movies = [
  {
    title: 'Polar',
    year: '(2019)',
    certificate: 'TV-MA',
    runtime: '118 min',
    genre: 'Action, Crime',
    blob:
      "The world's top assassin, Duncan Vizla, is settling into retirement when his former employer marks him as a liability to the firm. Against his will, he finds himself back in the game going head to head with an army of younger killers.",
    director: 'Jonas Åkerlund',
    stars: ['Mads Mikkelsen', 'Vanessa Hudgens', 'Katheryn Winnick', 'Fei Ren'],
  },
  {
    title: 'The Punisher',
    year: '(2017– )',
    certificate: 'TV-MA',
    runtime: '53 min',
    genre: 'Action, Adventure, Crime',
    blob:
      'After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as The Punisher, with only one goal in mind: to avenge them.',
    director: 'Jon Bernthal',
    stars: ['Amber Rose Revah', 'Ben Barnes', 'Jason R. Moore'],
  },
  {
    title: 'Game of Thrones',
    year: '(2011– )',
    certificate: 'TV-MA',
    runtime: '57 min',
    genre: 'Action, Adventure, Drama',
    blob:
      'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.',
    director: 'Emilia Clarke',
    stars: ['Peter Dinklage', 'Kit Harington', 'Lena Headey'],
  },
  {
    title: 'Aquaman',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '143 min',
    genre: 'Action, Adventure, Fantasy',
    blob:
      'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
    director: 'James Wan',
    stars: ['Jason Momoa', 'Amber Heard', 'Willem Dafoe', 'Patrick Wilson'],
  },
  {
    title: 'Vikings',
    year: '(2013– )',
    certificate: 'TV-MA',
    runtime: '44 min',
    genre: 'Action, Adventure, Drama',
    blob:
      'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
    director: 'Gustaf Skarsgård',
    stars: ['Katheryn Winnick', 'Alexander Ludwig', 'Travis Fimmel'],
  },
  {
    title: 'Fast & Furious Presents: Hobbs & Shaw',
    year: '(2019)',
    certificate: 'no-certificate',
    runtime: 'no time',
    genre: 'Action, Adventure',
    blob:
      'Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.',
    director: 'David Leitch',
    stars: ['Eiza González', 'Vanessa Kirby', 'Dwayne Johnson', 'Idris Elba'],
  },
  {
    title:
      'Birds of Prey (And the Fantabulous Emancipation of One Harley Quinn)',
    year: '(2020)',
    certificate: 'no-certificate',
    runtime: 'no time',
    genre: 'Action, Adventure, Crime',
    blob:
      'After splitting up with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save the life of a little girl from an evil crime lord.',
    director: 'Cathy Yan',
    stars: [
      'Margot Robbie',
      'Jurnee Smollett-Bell',
      'Mary Elizabeth Winstead',
      'Ewan McGregor',
    ],
  },
  {
    title: 'Titans',
    year: '(I) (2018– )',
    certificate: 'TV-MA',
    runtime: '45 min',
    genre: 'Action, Adventure, Drama',
    blob:
      "A team of young superheroes led by Nightwing (formerly Batman's first Robin) form to combat evil and other perils.",
    director: 'Teagan Croft',
    stars: ['Brenton Thwaites', 'Anna Diop', 'Ryan Potter'],
  },
  {
    title: 'Alita: Battle Angel',
    year: '(2019)',
    certificate: 'PG-13',
    runtime: '122 min',
    genre: 'Action, Adventure, Romance',
    blob:
      'A deactivated female cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.',
    director: 'Robert Rodriguez',
    stars: [
      'Rosa Salazar',
      'Christoph Waltz',
      'Jennifer Connelly',
      'Mahershala Ali',
    ],
  },
  {
    title: 'Kingdom',
    year: '(2019– )',
    certificate: 'no-certificate',
    runtime: '45 min',
    genre: 'Action, Thriller',
    blob:
      'While strange rumors about their ill king grip a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.',
    director: 'Doona Bae',
    stars: ['Greg Chun', 'Jun-ho Heo', 'Ji-Hoon Ju'],
  },
  {
    title: 'Mortal Engines',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '128 min',
    genre: 'Action, Adventure, Fantasy',
    blob:
      'In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.',
    director: 'Christian Rivers',
    stars: ['Hera Hilmar', 'Robert Sheehan', 'Hugo Weaving', 'Jihae'],
  },
  {
    title: 'Avengers: Endgame',
    year: '(2019)',
    certificate: 'no-certificate',
    runtime: 'no time',
    genre: 'Action, Adventure, Fantasy',
    blob:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    director: 'Anthony Russo',
    stars: [
      'Joe Russo',
      'Bradley Cooper',
      'Brie Larson',
      'Scarlett Johansson',
      'Evangeline Lilly',
    ],
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: '(2018)',
    certificate: 'PG',
    runtime: '117 min',
    genre: 'Animation, Action, Adventure',
    blob:
      'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.',
    director: 'Bob Persichetti',
    stars: [
      'Peter Ramsey',
      'Rodney Rothman',
      'Shameik Moore',
      'Jake Johnson',
      'Hailee Steinfeld',
      'Mahershala Ali',
    ],
  },
  {
    title: 'How to Train Your Dragon: The Hidden World',
    year: '(2019)',
    certificate: 'PG',
    runtime: '104 min',
    genre: 'Animation, Action, Adventure',
    blob:
      "When Hiccup discovers Toothless isn't the only Night Fury, he must seek The Hidden World, a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
    director: 'Dean DeBlois',
    stars: [
      'Jay Baruchel',
      'America Ferrera',
      'F. Murray Abraham',
      'Cate Blanchett',
    ],
  },
  {
    title: 'Star Trek: Discovery',
    year: '(2017– )',
    certificate: 'TV-14',
    runtime: '60 min',
    genre: 'Action, Adventure, Drama',
    blob:
      'Ten years before Kirk, Spock, and the Enterprise, the USS Discovery discovers new worlds and lifeforms as one Starfleet officer learns to understand all things alien.',
    director: 'Sonequa Martin-Green',
    stars: ['Doug Jones', 'Anthony Rapp', 'Mary Wiseman'],
  },
  {
    title: 'Dragon Ball Super: Broly',
    year: '(2018)',
    certificate: 'PG',
    runtime: '100 min',
    genre: 'Animation, Action, Fantasy',
    blob:
      "Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they've faced before.",
    director: 'Tatsuya Nagamine',
    stars: ['Masako Nozawa', 'Aya Hisakawa', 'Ryô Horikawa', 'Toshio Furukawa'],
  },
  {
    title: 'Gotham',
    year: '(2014– )',
    certificate: 'TV-14',
    runtime: '42 min',
    genre: 'Action, Crime, Drama',
    blob:
      "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    director: 'Ben McKenzie',
    stars: ['Jada Pinkett Smith', 'Donal Logue', 'Camren Bicondova'],
  },
  {
    title: 'Close',
    year: '(I) (2019)',
    certificate: 'TV-MA',
    runtime: '94 min',
    genre: 'Action, Thriller',
    blob:
      'Sam, a bodyguard and counter-terrorism expert, takes a job protecting a rich young heiress named Zoe. Neither party is keen on the arrangement until a violent kidnapping forces them to go on the run.',
    director: 'Vicky Jewson',
    stars: [
      'Noomi Rapace',
      'Olivia Jewson',
      'Abdellatif Chaouqi',
      'Sophie Nélisse',
    ],
  },
  {
    title: 'Kingdom Hearts III',
    year: '(2019 Video Game)',
    certificate: 'E10+',
    runtime: 'no time',
    genre: 'Action, Adventure, Fantasy',
    blob:
      'Believing light and darkness must remain in balance, Master Xehanort seeks to spark war against the tyranny of light to restore equilibrium.',
    director: 'Tetsuya Nomura',
    stars: [
      'Tai Yasue',
      'Haley Joel Osment',
      'David Gallagher',
      'Alyson Stoner',
      'Jason Dohring',
    ],
  },
  {
    title: 'The Passage',
    year: '(2019– )',
    certificate: 'no-certificate',
    runtime: '60 min',
    genre: 'Action, Adventure, Drama',
    blob:
      'When a botched U.S. government experiment turns a group of death row inmates into highly infectious vampires, an orphan girl might be the only person able to stop the ensuing crisis.',
    director: 'Mark-Paul Gosselaar',
    stars: ['Saniyya Sidney', 'Jamie McShane', 'Caroline Chikezie'],
  },
  {
    title: 'The Flash',
    year: '(2014– )',
    certificate: 'TV-PG',
    runtime: '43 min',
    genre: 'Action, Adventure, Drama',
    blob:
      "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.",
    director: 'Grant Gustin',
    stars: ['Candice Patton', 'Danielle Panabaker', 'Carlos Valdes'],
  },
  {
    title: 'Black Panther',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '134 min',
    genre: 'Action, Adventure, Sci-Fi',
    blob:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    director: 'Ryan Coogler',
    stars: [
      'Chadwick Boseman',
      'Michael B. Jordan',
      "Lupita Nyong'o",
      'Danai Gurira',
    ],
  },
  {
    title: 'Bumblebee',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '114 min',
    genre: 'Action, Adventure, Sci-Fi',
    blob:
      'On the run in the year of 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.',
    director: 'Travis Knight',
    stars: [
      'Hailee Steinfeld',
      'Jorge Lendeborg Jr.',
      'John Cena',
      'Jason Drucker',
    ],
  },
  {
    title: 'Captain Marvel',
    year: '(2019)',
    certificate: 'PG-13',
    runtime: '128 min',
    genre: 'Action, Adventure, Sci-Fi',
    blob:
      "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    director: 'Anna Boden',
    stars: [
      'Ryan Fleck',
      'Brie Larson',
      'Gemma Chan',
      'Samuel L. Jackson',
      'Mckenna Grace',
    ],
  },
  {
    title: 'Avengers: Infinity War',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '149 min',
    genre: 'Action, Adventure, Fantasy',
    blob:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    director: 'Anthony Russo',
    stars: [
      'Joe Russo',
      'Robert Downey Jr.',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
    ],
  },
  {
    title: 'Solo: A Star Wars Story',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '135 min',
    genre: 'Action, Adventure, Fantasy',
    blob:
      'During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.',
    director: 'Ron Howard',
    stars: [
      'Alden Ehrenreich',
      'Woody Harrelson',
      'Emilia Clarke',
      'Donald Glover',
    ],
  },
  {
    title: 'Arrow',
    year: '(2012– )',
    certificate: 'TV-14',
    runtime: '42 min',
    genre: 'Action, Adventure, Crime',
    blob:
      'Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.',
    director: 'Stephen Amell',
    stars: ['Katie Cassidy', 'David Ramsey', 'Susanna Thompson'],
  },
  {
    title: 'Escape Room',
    year: '(2019)',
    certificate: 'PG-13',
    runtime: '99 min',
    genre: 'Action, Adventure, Thriller',
    blob:
      'Six strangers find themselves in a maze of deadly mystery rooms, and must use their wits to survive.',
    director: 'Adam Robitel',
    stars: ['Taylor Russell', 'Logan Miller', 'Jay Ellis', 'Tyler Labine'],
  },
  {
    title: 'Hunter Killer',
    year: '(2018)',
    certificate: 'R',
    runtime: '122 min',
    genre: 'Action, Thriller',
    blob:
      'An untested American submarine captain teams with U.S. Navy Seals to rescue the Russian president, who has been kidnapped by a rogue general.',
    director: 'Donovan Marsh',
    stars: ['Gerard Butler', 'Gary Oldman', 'Common', 'Linda Cardellini'],
  },
  {
    title: "The Girl in the Spider's Web",
    year: '(2018)',
    certificate: 'R',
    runtime: '117 min',
    genre: 'Action, Crime, Drama',
    blob:
      'Young computer hacker Lisbeth Salander and journalist Mikael Blomkvist find themselves caught in a web of spies, cybercriminals and corrupt government officials.',
    director: 'Fede Alvarez',
    stars: [
      'Claire Foy',
      'Beau Gadsdon',
      'Sverrir Gudnason',
      'Lakeith Stanfield',
    ],
  },
  {
    title: 'Spider-Man: Far From Home',
    year: '(2019)',
    certificate: 'no-certificate',
    runtime: 'no time',
    genre: 'Action, Adventure, Comedy',
    blob:
      'Peter Parker and his friends go on summer vacation to Europe, where Peter finds himself trying to save his friends against a villain known as Mysterio.',
    director: 'Jon Watts',
    stars: [
      'Zendaya',
      'Jake Gyllenhaal',
      'Cobie Smulders',
      'Samuel L. Jackson',
    ],
  },
  {
    title: 'The Lego Movie 2: The Second Part',
    year: '(2019)',
    certificate: 'PG',
    runtime: '106 min',
    genre: 'Animation, Action, Adventure',
    blob:
      "It's been five years since everything was awesome and the citizens are facing a huge new threat: Lego Duplo invaders from outer space, wrecking everything faster than they can rebuild.",
    director: 'Mike Mitchell',
    stars: ['Chris Pratt', 'Elizabeth Banks', 'Will Arnett', 'Tiffany Haddish'],
  },
  {
    title: 'The Boys',
    year: '(2019– )',
    certificate: 'no-certificate',
    runtime: '60 min',
    genre: 'Action, Drama, Sci-Fi',
    blob:
      'An action story centered on a CIA squad tasked with keeping superheroes in line, by any means necessary.',
    director: 'Karl Urban',
    stars: ['Tomer Capon', 'Jennifer Esposito', 'Erin Moriarty'],
  },
  {
    title: 'The Last Kingdom',
    year: '(2015– )',
    certificate: 'TV-MA',
    runtime: '60 min',
    genre: 'Action, Drama, History',
    blob:
      'The year is 872, and many of the separate kingdoms of what we now know as England have fallen to the invading Danes, leaving the great kingdom of Wessex standing alone and defiant under the...See full summary »',
    director: 'See full summary',
    stars: [
      'Alexander Dreymon',
      'Ian Hart',
      'David Dawson',
      'Eliza Butterworth',
    ],
  },
  {
    title: 'Venom',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '112 min',
    genre: 'Action, Sci-Fi',
    blob:
      'A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.',
    director: 'Ruben Fleischer',
    stars: ['Tom Hardy', 'Michelle Williams', 'Riz Ahmed', 'Scott Haze'],
  },
  {
    title: 'Agents of S.H.I.E.L.D.',
    year: '(2013– )',
    certificate: 'TV-PG',
    runtime: '45 min',
    genre: 'Action, Adventure, Drama',
    blob:
      'The missions of the Strategic Homeland Intervention, Enforcement and Logistics Division.',
    director: 'Clark Gregg',
    stars: ['Ming-Na Wen', 'Brett Dalton', 'Iain De Caestecker'],
  },
  {
    title: 'The Umbrella Academy',
    year: '(2019– )',
    certificate: 'TV-14',
    runtime: '60 min',
    genre: 'Action, Fantasy',
    blob:
      'A disbanded group of superheroes reunite after their adoptive father, who trained them to save the world, dies.',
    director: 'Aidan Gallagher',
    stars: ['Cameron Britton', 'Eden Cupid', 'Cameron Brodeur'],
  },
  {
    title: 'Robin Hood',
    year: '(I) (2018)',
    certificate: 'PG-13',
    runtime: '116 min',
    genre: 'Action, Adventure, Thriller',
    blob:
      'A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown in a thrilling action-adventure packed with gritty battlefield exploits, mind-blowing fight choreography, and a timeless romance.',
    director: 'Otto Bathurst',
    stars: ['Taron Egerton', 'Jamie Foxx', 'Ben Mendelsohn', 'Eve Hewson'],
  },
  {
    title: 'Deadly Class',
    year: '(2018– )',
    certificate: 'TV-MA',
    runtime: '60 min',
    genre: 'Action, Crime, Drama',
    blob:
      'A coming-of-age story set against the backdrop of late 1980s counterculture, which follows a disillusioned teen recruited into a storied high school for assassins.',
    director: 'Benedict Wong',
    stars: ['Benjamin Wadsworth', 'Lana Condor', 'María Gabriela de Faría'],
  },
  {
    title: 'Incredibles 2',
    year: '(2018)',
    certificate: 'PG',
    runtime: '118 min',
    genre: 'Animation, Action, Adventure',
    blob:
      'The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.',
    director: 'Brad Bird',
    stars: ['Craig T. Nelson', 'Holly Hunter', 'Sarah Vowell', 'Huck Milner'],
  },
  {
    title: 'Shazam!',
    year: '(2019)',
    certificate: 'no-certificate',
    runtime: 'no time',
    genre: 'Action, Adventure, Fantasy',
    blob:
      "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word - SHAZAM! - this streetwise 14-year-old foster kid can turn into the adult superhero Shazam.",
    director: 'David F. Sandberg',
    stars: ['Zachary Levi', 'Lovina Yavari', 'Michelle Borth', 'Mark Strong'],
  },
  {
    title: 'Miss Bala',
    year: '(2019)',
    certificate: 'PG-13',
    runtime: '104 min',
    genre: 'Action, Drama, Thriller',
    blob:
      'Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime. Surviving will require all of her cunning, inventiveness, and strength. Based on the Spanish-language film.',
    director: 'Catherine Hardwicke',
    stars: [
      'Gina Rodriguez',
      'Thomas Dekker',
      'Vivian Chan',
      'Barbarella Pardo',
    ],
  },
  {
    title: 'Ready Player One',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '140 min',
    genre: 'Action, Adventure, Sci-Fi',
    blob:
      'When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune.',
    director: 'Steven Spielberg',
    stars: ['Tye Sheridan', 'Olivia Cooke', 'Ben Mendelsohn', 'Lena Waithe'],
  },
  {
    title: 'Supergirl',
    year: '(2015– )',
    certificate: 'TV-PG',
    runtime: '43 min',
    genre: 'Action, Adventure, Drama',
    blob: "The adventures of Superman's cousin in her own superhero career.",
    director: 'Melissa Benoist',
    stars: ['Mehcad Brooks', 'Chyler Leigh', 'David Harewood'],
  },
  {
    title: 'Zombieland: Double Tap',
    year: '(2019)',
    certificate: 'no-certificate',
    runtime: 'no time',
    genre: 'Action, Comedy, Horror',
    blob:
      'Columbus, Tallahasse, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.',
    director: 'Ruben Fleischer',
    stars: ['Emma Stone', 'Abigail Breslin', 'Zoey Deutch', 'Rosario Dawson'],
  },
  {
    title: 'Cold Pursuit',
    year: '(2019)',
    certificate: 'R',
    runtime: '118 min',
    genre: 'Action, Drama, Thriller',
    blob:
      "A snowplow driver seeks revenge against the drug dealers he thinks killed his son. Based on the 2014 Norwegian film 'In Order of Disappearance'.",
    director: 'Hans Petter Moland',
    stars: [
      'Liam Neeson',
      'Laura Dern',
      'Micheál Richardson',
      'Michael Eklund',
    ],
  },
  {
    title: 'NCIS',
    year: '(2003– )',
    certificate: 'TV-14',
    runtime: '60 min',
    genre: 'Action, Comedy, Crime',
    blob:
      "The cases of the Naval Criminal Investigative Service's Washington, D.C. Major Case Response Team, led by Special Agent Leroy Jethro Gibbs.",
    director: 'Mark Harmon',
    stars: ['David McCallum', 'Pauley Perrette', 'Sean Murray'],
  },
  {
    title: 'Daredevil',
    year: '(2015–2018)',
    certificate: 'TV-MA',
    runtime: '54 min',
    genre: 'Action, Crime, Drama',
    blob:
      'A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.',
    director: 'Charlie Cox',
    stars: ["Vincent D'Onofrio", 'Deborah Ann Woll', 'Elden Henson'],
  },
  {
    title: 'Ant-Man and the Wasp',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '118 min',
    genre: 'Action, Adventure, Comedy',
    blob:
      'As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.',
    director: 'Peyton Reed',
    stars: ['Paul Rudd', 'Evangeline Lilly', 'Michael Peña', 'Walton Goggins'],
  },
  {
    title: 'Uri: The Surgical Strike',
    year: '(2019)',
    certificate: 'Not Rated',
    runtime: '138 min',
    genre: 'Action, Drama, War',
    blob:
      'Based on the true events of 2016, when Indian Army avenged a deadly terrorist attack by carrying out a surgical strike.',
    director: 'Aditya Dhar',
    stars: ['Vicky Kaushal', 'Paresh Rawal', 'Yami Gautam', 'Mohit Raina'],
  },
];

const movies_ = [
  {
    id: '1',
    title: 'Daredevil',
    year: '(2015–2018)',
    certificate: 'TV-MA',
    runtime: '54 min',
    genre: 'Action, Crime, Drama',
    blob:
      'A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.',
    director: 'Charlie Cox',
    stars: ["Vincent D'Onofrio", 'Deborah Ann Woll', 'Elden Henson'],
    directorId: '1',
  },
  {
    id: '2',
    title: 'Ant-Man and the Wasp',
    year: '(2018)',
    certificate: 'PG-13',
    runtime: '118 min',
    genre: 'Action, Adventure, Comedy',
    blob:
      'As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.',
    director: 'Peyton Reed',
    stars: ['Paul Rudd', 'Evangeline Lilly', 'Michael Peña', 'Walton Goggins'],
    directorId: '2',
  },
  {
    id: '3',
    title: 'Uri: The Surgical Strike',
    year: '(2019)',
    certificate: 'Not Rated',
    runtime: '138 min',
    genre: 'Action, Drama, War',
    blob:
      'Based on the true events of 2016, when Indian Army avenged a deadly terrorist attack by carrying out a surgical strike.',
    director: 'Aditya Dhar',
    stars: ['Vicky Kaushal', 'Paresh Rawal', 'Yami Gautam', 'Mohit Raina'],
    directorId: '3',
  },
];

const directors = [
  { id: '1', name: 'Charlie Cox', movie: 'Daredevil' },
  { id: '2', name: 'Peyton Reed', movie: 'Ant-Man and the Wasp' },
  { id: '3', name: 'Aditya Dhar', movie: 'Uri: The Surgical Strike' },
];
module.exports = { movies_, directors };
