import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi there 👋


* Major in software engineering
* <a href="https://github.com/GDSC-SKHU">GDSC SKHU 1st- Web member</a>
* <a href="https://user-images.githubusercontent.com/50818389/208008419-a0706e72-0ee6-4ab2-957c-deed0abeded4.png">Comento 프론트엔드 직무캠프 수료</a>

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

### Skill
<img src="https://img.shields.io/badge/React-9cf?style=flat-square&logo=react&logoColor=white"/>  <img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-yellow?style=flat-square&logo=javascript&logoColor=white"/> 
<img src="https://img.shields.io/badge/typescript-blue?style=flat-square&logo=typescript&logoColor=skyblue"/><img src="https://img.shields.io/badge/redux-white?style=flat-square&logo=redux&logoColor=purple"/>
<img src="https://img.shields.io/badge/styled_components-black?style=flat-square&logo=styledcomponents&logoColor=pink"/>
</br><img src="https://img.shields.io/badge/Spring-green?style=flat-square&logo=Spring&logoColor=white"/>
<img src="https://img.shields.io/badge/recoil-grey?style=flat-square&logo=recoil&logoColor=skyblue"/>
<img src="https://img.shields.io/badge/react_query-black?style=flat-square&logo=reactquery&logoColor=skyblue"/>
<img src="https://img.shields.io/badge/ReactNative-ccf?style=flat-square&logo=react&logoColor=white"/>
### 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://blog.jaegwan.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
