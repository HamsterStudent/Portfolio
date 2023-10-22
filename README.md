### 2023 portfolio

<!-- [![Notion](/coconut/images/notion.png)](https://respected-honey-7eb.notion.site/Getting-Started-77fd5f68dd0248818cf654362471fcb2) -->

![image](https://github.com/HamsterStudent/2023Portfolio/assets/60914441/d9d67497-f197-4de6-a218-559a026f38e7)


### 사용 라이브러리

- Recoil
- Styled-components
- React-markdown
- Firebase
- React-draggable
- re-resizable

### 파일 구조

```bash
🥗src
┣🫑components
┃┣🌱ErrorIcon.tsx
┃┣🌱Construction.tsx
┃┣🌱LauncherIcon.tsx
┃┣🌱Header.tsx
┃┣🌱Mainicon.tsx
┃┣🌱MarkdownRenderer.tsx
┃┣🌱ModalWindow.tsx
┃└🌱Sticker.tsx
┣🫑Hooks
┃└🌱useDisplaySticker.tsx
┣🫑pages
┃┣🥬CodingPosts
┃┃┣🌱MapRefact.tsx
┃┃┣🌱ProdListPost.tsx
┃┃┣🌱ProxyPost.tsx
┃┃└🌱SessionPost.tsx
┃┣🌱About.tsx
┃┣🌱Blog.tsx
┃┣🌱Coding.tsx
┃┣🌱Dungeon.tsx
┃┣🌱Guestbook.tsx
┃┣🌱Launcher.tsx
┃┣🌱Project.tsx
┃┣🌱resume.tsx
┃┣🌱ThemeScreen.tsx
┃└🌱Tools.tsx
┣🫑recoil
┃└🌱atom.ts
┣🫑style
┃┣🌱styled.d.ts
┃└🌱theme.ts
┣🌱App.tsx
┣🌱firebase.tsx
└🌱index.tsx
```

### 🫑 components

- 웹페이지 내에서 반복적으로 쓰이거나, 한번만 사용되나, 너무 코드가 긴 것들을 정리해 모아 둔 폴더입니다.

### 🫑 Hooks

- 반복해서 사용하기 위해 만든 훅을 넣어 둔 폴더입니다.

### 🫑 Pages

- 웹페이지의 각 창을 하나의 컴포넌트로 만들어 관리했습니다.

### 🫑 recoil

- 어떤 컴포넌트에서든 호출할 수 있는 atom을 넣은 폴더입니다.

### 🫑 style

- 스타일 규칙과 theme 설정 파일을 넣어둔 폴더입니다.

## 구현 기능

- 드래그 & 드롭이 되는 페이지들
- light & dark 모드 뿐만 아니라, 다른 테마로도 바꿀 수 있는 기능
- 화면 곳곳에 숨겨져 있는 스티커를 모을 수 있는 기능
- 누구나 와서 코멘트를 남길 수 있는 게스트북
