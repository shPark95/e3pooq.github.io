# 박성현 포트폴리오

박성현의 설비 제어·검사 소프트웨어 경력을 소개하는 GitHub Pages용 정적 사이트입니다. 소개, 기술, 경력, 프로젝트 상세, 교육, 연락 섹션으로 구성했습니다.

## 로컬 실행

Python이 설치된 환경에서:

```sh
python3 -m http.server 4000
```

브라우저에서 `http://127.0.0.1:4000/`을 열면 됩니다.

HTML·CSS·JS 파일을 그대로 배포합니다. GitHub 저장소 `shPark95/e3pooq.github.io`의 프로젝트 페이지 주소인 `https://shpark95.github.io/e3pooq.github.io/`을 기준으로 canonical URL, sitemap, 404 경로를 작성했습니다. GitHub Pages를 사용하려면 저장소의 **Settings → Pages**에서 배포 소스를 설정해야 합니다.

## 수정 위치

- `index.html`: 소개와 경력, 프로젝트의 모든 내용
- `assets/portfolio.css`: 화면 디자인과 반응형 스타일
- `assets/portfolio.js`: 모바일 메뉴, 기술 분류, 프로젝트 상세 창
- `404.html`, `robots.txt`, `sitemap.xml`: 배포 경로와 검색 설정
- `assets/favicon.svg`: 사이트 아이콘

내용은 폴더의 `박성현이력서.pdf`를 바탕으로 작성했습니다. `Faindus.ACT`의 검사 시간 100배 단축은 이력서에 적힌 수치입니다. 이력서의 연봉, 생년, 주소, 전화번호 및 채용 제안서의 개인 정보는 공개 페이지에 포함하지 않았습니다. 이력서 PDF 자체도 배포하지 않습니다.

원본 Jekyll 블로그 스켈레톤의 글, 작성자 정보, 이미지, 생성 스크립트는 저장소에서 정리했습니다. 이전 버전이 필요하면 Git 기록에서 복구할 수 있습니다. `.nojekyll` 파일이 GitHub Pages의 Jekyll 빌드를 건너뛰게 합니다.
