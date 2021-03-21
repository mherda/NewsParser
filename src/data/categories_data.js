let local_sources = [
    {"id":"bbc-news","name":"BBC News","description":"Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.","url":"http://www.bbc.co.uk/news","category":"general","language":"en","country":"gb","active":true},
    {"id":"bbc-sport","name":"BBC Sport","description":"The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.","url":"http://www.bbc.co.uk/sport","category":"sports","language":"en","country":"gb","active":true},
    {"id":"business-insider-uk","name":"Business Insider (UK)","description":"Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.","url":"http://uk.businessinsider.com","category":"business","language":"en","country":"gb","active":true},
    {"id":"four-four-two","name":"FourFourTwo","description":"The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.","url":"http://www.fourfourtwo.com/news","category":"sports","language":"en","country":"gb","active":true},
    {"id":"google-news-uk","name":"Google News (UK)","description":"Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.","url":"https://news.google.com","category":"general","language":"en","country":"gb","active":true},
    {"id":"independent","name":"Independent","description":"National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.","url":"http://www.independent.co.uk","category":"general","language":"en","country":"gb","active":true},
    {"id":"mtv-news-uk","name":"MTV News (UK)","description":"All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.","url":"http://www.mtv.co.uk/news","category":"entertainment","language":"en","country":"gb","active":true},
    {"id":"talksport","name":"TalkSport","description":"Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.","url":"http://talksport.com","category":"sports","language":"en","country":"gb","active":true},
    {"id":"the-lad-bible","name":"The Lad Bible","description":"The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!","url":"https://www.theladbible.com","category":"entertainment","language":"en","country":"gb","active":true},
    {"id":"the-sport-bible","name":"The Sport Bible","description":"TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!","url":"https://www.thesportbible.com","category":"sports","language":"en","country":"gb","active":true}
];

let local_articles = [
    {"source":{"id":"financial-times","name":"Financial Times"},"author":null,"title":"UK government lowers coronavirus alert level - Financial Times","description":"Downgrade boosts hopes that ministers will soon cut the controversial 2-metre social-distancing rule","url":"https://www.ft.com/content/26c003b5-2d51-4cbb-870d-88619ecb2648","urlToImage":"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ffaeb012c-55a6-44c9-ba19-1d818fe04f0c.jpg?source=next-opengraph&fit=scale-down&width=900","publishedAt":"2020-06-19T16:19:34Z","content":"The UK on Friday lowered its coronavirus alert level, raising hopes that ministers will soon cut the contentious 2-metre social-distancing rule that business leaders claim is holding back the economy… [+3275 chars]"},
    {"source":{"id":null,"name":"The Guardian"},"author":"Robert Booth, Pamela Duncan","title":"Over 1,000 deaths a day: UK ministers accused of downplaying Covid-19 peak - The Guardian","description":"Official toll passed a thousand on 22 consecutive days – far more than daily briefings said","url":"https://www.theguardian.com/world/2020/jun/19/over-1000-deaths-day-uk-ministers-accused-downplaying-covid-19-peak","urlToImage":"https://i.guim.co.uk/img/media/70241ebe3c2272897cee80e0b2a3d07c26ed93d4/0_144_5239_3143/master/5239.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a6465aac48bce664a9c79cb5f0d30d53","publishedAt":"2020-06-19T16:14:37Z","content":"Ministers have been accused of playing down the gravity of the coronavirus pandemic after it emerged that more than 1,000 people died every day in the UK for 22 consecutive days in stark contrast wit… [+5710 chars]"},
    {"source":{"id":null,"name":"The Guardian"},"author":"Zoe Wood","title":"Ministers extend ban on evicting UK high street firms until autumn - The Guardian","description":"Code of practice also set up to aid landlord negotiations amid lockdown fallout","url":"https://www.theguardian.com/business/2020/jun/19/ministers-extend-ban-on-evicting-uk-high-street-firms-until-autumn","urlToImage":"https://i.guim.co.uk/img/media/5daa31b869392b876507bd8ff18202bd59f99d0b/0_223_4751_2853/master/4751.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8f68c115bf531836ac8c111ccbbe9239","publishedAt":"2020-06-19T16:05:35Z","content":null},
    {"source":{"id":null,"name":"Sky.com"},"author":null,"title":"LIVE: Government's daily coronavirus briefing as UK lowers COVID-19 alert level - Sky News","description":"Education Secretary Gavin Williamson leads the briefing after the COVID-19 alert level is lowered from four to three.","url":"https://news.sky.com/story/live-governments-daily-coronavirus-briefing-as-uk-lowers-covid-19-alert-level-12010537","urlToImage":"https://e3.365dm.com/20/06/1600x900/skynews-williamson-presseer_5017586.jpg?20200619170207","publishedAt":"2020-06-19T15:52:19Z","content":null},
    {"source":{"id":null,"name":"Mirror Online"},"author":"Dan Bloom","title":"Wales to consider allowing hairdressers to reopen from July 13 - Mirror Online","description":"A review will take place on July 9 to consider options for opening barbers and beauty salons - but if they do reopen, it will only \"by appointment\" and things will look very different","url":"https://www.mirror.co.uk/news/politics/breaking-wales-consider-allowing-hairdressers-22219250","urlToImage":"https://i2-prod.mirror.co.uk/incoming/article22211096.ece/ALTERNATES/s1200/0_UKRAINE-HEALTH-VIRUS-HAIRDRESSER.jpg","publishedAt":"2020-06-19T15:37:51Z","content":"Wales will consider letting hairdressers reopen from July 13, the nation's First Minister signalled today.\r\nMark Drakeford said there will be a review next month to consider a \"range of specific opti… [+3929 chars]"},
    {"source":{"id":null,"name":"Manchester Evening News"},"author":"Samuel Luckhurst, Dominic Booth, Tyrone Marshall","title":"Tottenham vs Manchester United LIVE early Man Utd team news and match updates - Manchester Evening News","description":"Latest updates from the Tottenham Hotspur Stadium as Ole Gunnar Solskjaer's Man Utd take on Jose Mourinho's Spurs in the Premier League.","url":"https://www.manchestereveningnews.co.uk/sport/football/football-news/man-utd-vs-tottenham-live-18427645","urlToImage":"https://i2-prod.manchestereveningnews.co.uk/incoming/article18454664.ece/ALTERNATES/s1200/0_TWITTERHEADER.jpg","publishedAt":"2020-06-19T15:25:07Z","content":"Manchester United are finally back in action.\r\n It has been more than three months since Ole Gunnar Solskjaer's men last played a competitive fixture, with the Premier League suspended in March and t… [+712 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":null,"title":"Liverpool: Jurgen Klopp feared coronavirus outbreak could end Premier League title hopes - BBC Sport","description":"Jurgen Klopp feared his Liverpool side would be denied the chance of winning the Premier League title when there were calls for the season to be voided because of the coronavirus pandemic.","url":"https://www.bbc.co.uk/sport/football/53112813","urlToImage":"https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/077E/production/_112981910_gettyimages-1227589170.jpg","publishedAt":"2020-06-19T15:20:43Z","content":"Media playback is not supported on this device\r\nI became worried when people said the season may be 'null and void' - Klopp\r\nJurgen Klopp feared his Liverpool side would be denied the chance of winni… [+2486 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Apple 'not told' about UK's latest app plans - BBC News","description":"Apple says the UK government has not spoken to it about plans to develop a new \"hybrid\" tracing app.","url":"https://www.bbc.co.uk/news/technology-53105642","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/5D58/production/_112969832_hancock.jpg","publishedAt":"2020-06-19T14:30:53Z","content":"Image copyrightPA MediaImage caption\r\n Apple said it did not know about a proposed \"hybrid\" version of the contact-tracing app announced by Matt Hancock\r\nApple says it did not know the UK was working… [+3862 chars]"},
    {"source":{"id":null,"name":"Mirror Online"},"author":"Oliver Milne","title":"UK debt is now higher than the country's entire GDP for the first time in 57 years - Mirror Online","description":"Massive borrowing to fund the coronavirus fight has sent debt to 100.9% of GDP - the first time that has happened since 1963","url":"https://www.mirror.co.uk/news/politics/uk-debt-now-higher-countrys-22220551","urlToImage":"https://i2-prod.mirror.co.uk/incoming/article22017594.ece/ALTERNATES/s1200/1_Rishi-Sunak-Chancellor-of-the-Exchequer-leaves-for-his-Budget-speech.jpg","publishedAt":"2020-06-19T14:07:31Z","content":"Massive borrowing to fund the fight against coronavirus means the UK's debt is now bigger than the country's entire economic output for the first time since 1963, official statistics have revealed.\r\n… [+1916 chars]"},
    {"source":{"id":null,"name":"Football365.com"},"author":"Will Ford","title":"Klopp opens zoom with a joke before dismissing Werner query - Football365.com","description":"Football365 - Klopp's got those journalists chuckling again...","url":"https://www.football365.com/news/klopp-liverpool-zoom-joke-werner-query","urlToImage":"https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2019/12/18141949/Jurgen-Klopp-Liverpool-F365-5.jpg","publishedAt":"2020-06-19T13:40:36Z","content":"Jurgen Klopp opened his first Liverpool press conference for three months with a joke, before dismissing a question about Timo Werner.\r\nKlopp was on his own at Melwood to preview Sundays Merseyside d… [+1274 chars]"},
    {"source":{"id":null,"name":"The Guardian"},"author":"Lily Kuo","title":"Anxiety in Beijing as officials battle new coronavirus outbreak - The Guardian","description":"Chinese capital abruptly imposes lockdowns after fresh cases threaten official narrative of success","url":"https://www.theguardian.com/world/2020/jun/19/anxiety-in-beijing-as-officials-battle-new-coronavirus-outbreak","urlToImage":"https://i.guim.co.uk/img/media/d6886e3fb6898fa6a5135f3101da27a12ffae142/0_264_6915_4149/master/6915.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7d71812110fe5650b238dc94a14bf8e8","publishedAt":"2020-06-19T13:14:36Z","content":"Zhang Le, 25 has been waiting for more than two hours outside a car park to be tested for coronavirus. Police officers stand behind a cordon, futilely shouting through loudspeakers for people not to … [+7464 chars]"},
    {"source":{"id":null,"name":"Daily Mail"},"author":"By Rebecca Lawrence Chris White For Mailonline","title":"David and Victoria Beckham get to work on a wine cellar and 'super garage' at £6m Cotswolds home - Daily Mail","description":"The couple are currently in lockdown at the £6 million Cotswolds property with their three youngest children, Romeo, 17, Cruz, 15, and Harper, eight. Now renovations at their home have been approved.","url":"https://www.dailymail.co.uk/tvshowbiz/article-8439695/David-Victoria-Beckham-work-wine-cellar-super-garage-6m-Cotswolds-home.html","urlToImage":"https://i.dailymail.co.uk/1s/2020/06/19/13/29817610-0-image-a-4_1592570787170.jpg","publishedAt":"2020-06-19T13:10:34Z","content":"David and Victoria Beckham are set to install a secret underground tunnel, wine cellar and 'super garage' at their Cotswolds home after being awarded planning permission. \r\nThe couple are currently i… [+4320 chars]"},
    {"source":{"id":null,"name":"Liverpool Echo"},"author":"Lottie Gibbons","title":"Police hunting McDonald's drive-thru gunman release CCTV image of hooded man - Liverpool Echo","description":"Detectives say if you see this man, call 999 and do not approach him","url":"https://www.liverpoolecho.co.uk/news/liverpool-news/police-hunting-mcdonalds-drive-thru-18452228","urlToImage":"https://i2-prod.liverpoolecho.co.uk/incoming/article18452233.ece/ALTERNATES/s1200/0_McDonalds-image-1.jpg","publishedAt":"2020-06-19T13:04:34Z","content":"Police have issued a CCTV image of a man they hope can help a probe into a shooting at a McDonalds drive-thru.\r\nEmergency services were called to McDonald's at The Croft Retail &amp; Leisure Park in … [+2632 chars]"},
    {"source":{"id":null,"name":"YouTube"},"author":null,"title":"Xbox's Next Gen Save System Should Be the New Standard - Next Gen Console Watch - IGN","description":"Welcome back to Next-Gen Console Watch 2020, our new show following all the news and rumors on the PlayStation 5 and Xbox Series X. This week we’re talking a...","url":"https://www.youtube.com/watch?v=WgAIi1c369k","urlToImage":"https://i.ytimg.com/vi/WgAIi1c369k/hqdefault.jpg","publishedAt":"2020-06-19T13:00:22Z","content":null},
    {"source":{"id":null,"name":"Telegraph.co.uk"},"author":"Ben Marlow","title":"Wirecard’s woes are another humiliation for Deutschland AG - Telegraph.co.uk","description":"The scandal engulfing the payments giant is just the latest in a series to beset German companies","url":"https://www.telegraph.co.uk/business/2020/06/19/wirecards-woes-another-humiliation-deutschland-ag/","urlToImage":"https://www.telegraph.co.uk/content/dam/business/2020/06/19/wirecard_trans_NvBQzQNjv4BqM37qcIWR9CtrqmiMdQVx7GInspbHSv74gmsyGTTdBbo.png?impolicy=logo-overlay","publishedAt":"2020-06-19T12:57:00Z","content":"The downfall of Germanys most promising young tech company is another bitter blow for Deutschland Inc. The Germans have a proud tradition of producing big, muscular national champions that go on to b… [+1733 chars]"},
    {"source":{"id":null,"name":"The Guardian"},"author":"Lauren Gambino, Martin Pengelly","title":"Juneteenth: US celebrates end of slavery as Trump claims to have made holiday 'famous'– live - The Guardian","description":"President warns ‘protesters, anarchists, agitators, looters or lowlifes’ will be treated more harshly than they have been in liberal-run cities","url":"https://www.theguardian.com/us-news/live/2020/jun/19/juneteenth-us-protests-policing-donald-trump-rayshard-brooks-george-floyd","urlToImage":"https://i.guim.co.uk/img/media/b347021b3193085b82206d0249a39ac6a3934e59/0_43_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d64e24789b6e7df6bc035c6f68d983a2","publishedAt":"2020-06-19T12:46:00Z","content":null},
    {"source":{"id":null,"name":"Telegraph.co.uk"},"author":null,"title":"Politics latest news: 'Watch this space' on schools' two-metre rule, says Boris Johnson - Telegraph.co.uk","description":"The  Government is planning to expand classroom &quot;bubbles&quot; to open schools up to all children in time for the autumn term, the Education Secretary has revealed.","url":"https://www.telegraph.co.uk/politics/2020/06/19/lockdown-uk-news-update-track-trace-schools-boris-johnson/","urlToImage":"https://www.telegraph.co.uk/content/dam/politics/2020/06/19/TELEMMGLPICT000233407152_trans_NvBQzQNjv4BqDYAoRqCxn9rh7bhJY-GZd0XAZNwMxFR5WejpuNqmd6Q.jpeg?impolicy=logo-overlay","publishedAt":"2020-06-19T12:40:38Z","content":"Politics Live speaks with Transport Committee chair and Bexhill and Battle MP Huw Merriman about the changes coronavirus is introducing to our transport needs. \r\nShould HS2 be revised in light of the… [+1358 chars]"},
    {"source":{"id":null,"name":"The Guardian"},"author":"Tony Paley, Chris Cook, Greg Wood","title":"Royal Ascot 2020: day four – live updates! - The Guardian","description":"Rolling report: Join our racing team for the penultimate day of action from Berkshire including the Commonwealth Cup","url":"https://www.theguardian.com/sport/live/2020/jun/19/royal-ascot-day-four-horse-racing-commonwealth-cup-live-updates","urlToImage":"https://i.guim.co.uk/img/media/7353ca15bcd6a20b1cbbcf4887195d5246be60bf/116_298_4138_2483/master/4138.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=6fdf4865a6da672b03ce5e8d825bfd6b","publishedAt":"2020-06-19T12:39:00Z","content":"After what was basically a dry night at Ascot, the official going for day four of the Royal meeting has been changed to good-to-soft on the straight course and soft, good-to-soft in place on the roun… [+2187 chars]"},
    {"source":{"id":null,"name":"The Guardian"},"author":"Andrew Pulver","title":"Ian Holm, star of Lord of the Rings, Alien and Chariots of Fire, dies aged 88 - The Guardian","description":"The versatile actor went from the RSC and Harold Pinter to international movie stardom with roles as the hobbit Bilbo Baggins and an android in Alien","url":"https://www.theguardian.com/film/2020/jun/19/ian-holm-dies-alien-chariots-of-fire-bilbo-baggins","urlToImage":"https://i.guim.co.uk/img/media/a0e5dabf00a83c66a92bfcaafd5c7bc406a21f1d/294_102_1195_717/master/1195.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=840c5c839358b4f18c989c891ea55761","publishedAt":"2020-06-19T12:14:34Z","content":"Ian Holm, the versatile actor who played everything from androids to hobbits via Harold Pinter and King Lear, has died in London aged 88, his agent confirmed to the Guardian.\r\nIt is with great sadnes… [+4722 chars]"},
    {"source":{"id":"techradar","name":"TechRadar"},"author":"Mark Wycislik-Wilson","title":"Google has released a Chrome add-on to transform the way you browse the web - TechRadar","description":"Jump straight to specific text on a web page","url":"https://www.techradar.com/news/google-has-released-a-chrome-add-on-to-transform-the-way-you-browse-the-web","urlToImage":"https://cdn.mos.cms.futurecdn.net/J7zugUXRLpkU5gpntUzBmG-1200-80.jpg","publishedAt":"2020-06-19T11:57:00Z","content":"Google has released a new Chrome extension that uses special URLs to direct users to a specific part of a webpage.\r\nYou probably share links with people all the time in emails and on social media, bu… [+2280 chars]"}
];

export { local_sources, local_articles };