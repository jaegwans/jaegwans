import feedparser, time

URL = "https://kjk5.tistory.com/rss"
RSS_FEED = feedparser.parse(URL)
MAX_POST = 5

markdown_text = """



### 📭 Contect 
skhu201811140@gmail.com

### 🏚 Notion
https://bit.ly/3GLBMFW

### 👨🏻‍💻 blog
http://blog.jaegwan.com

### career
- 딥바이오 (2025 05 ~ ing)
    - 프론트엔드 엔지니어
- 해커스 교육그룹 (2023 11 - 2024 04)
    - React native 개발자

### ✅ Latest Blog Post

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
