import feedparser, time

URL = "https://kjk5.tistory.com/rss"
RSS_FEED = feedparser.parse(URL)
MAX_POST = 5

markdown_text = """
 > Front-end developer


* Major in software engineering
* <a href="https://github.com/GDSC-SKHU">GDSC SKHU - Web member</a>
* <a href="https://user-images.githubusercontent.com/50818389/208008419-a0706e72-0ee6-4ab2-957c-deed0abeded4.png">Comento 프론트엔드 직무캠프 수료</a>

### 📭 Contect 
skhu201811140@gmail.com

### 🏚 Notion
https://bit.ly/3GLBMFW

### 👨🏻‍💻 blog
http://blog.jaegwan.com

### Skill
<img src="https://img.shields.io/badge/React-9cf?style=flat-square&logo=react&logoColor=white"/>  <img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-yellow?style=flat-square&logo=javascript&logoColor=white"/> 
<img src="https://img.shields.io/badge/typescript-blue?style=flat-square&logo=typescript&logoColor=skyblue"/><img src="https://img.shields.io/badge/redux-white?style=flat-square&logo=redux&logoColor=purple"/>
<img src="https://img.shields.io/badge/styled_components-black?style=flat-square&logo=styledcomponents&logoColor=pink"/>
</br><img src="https://img.shields.io/badge/Spring-green?style=flat-square&logo=Spring&logoColor=white"/>
<img src="https://img.shields.io/badge/recoil-grey?style=flat-square&logo=recoil&logoColor=skyblue"/>
<img src="https://img.shields.io/badge/react_query-black?style=flat-square&logo=reactquery&logoColor=skyblue"/>
<img src="https://img.shields.io/badge/ReactNative-ccf?style=flat-square&logo=react&logoColor=white"/>
## ✅ Latest Blog Post

"""  # list of blog posts will be appended here

for idx, feed in enumerate(RSS_FEED['entries']):
    if idx > MAX_POST:
        break
    else:
        feed_date = feed['published_parsed']
        markdown_text += f"[{time.strftime('%Y/%m/%d', feed_date)} - {feed['title']}]({feed['link']}) <br/>\n"
        
f = open("README.md", mode="w", encoding="utf-8")
f.write(markdown_text)
f.close()
