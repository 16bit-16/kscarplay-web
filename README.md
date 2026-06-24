# KSCarPlay 랜딩페이지

Next.js + Tailwind + Framer Motion. `/privacy`, `/terms` 페이지 포함.

## 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인.

## Vercel 배포

### CLI로 바로 (제일 빠름)

```bash
npm install -g vercel
vercel
```

처음 실행하면 로그인 + 프로젝트 설정 질문이 몇 개 나오고(기본값 그대로 Enter 눌러도 됨), 끝나면 배포 URL이 나옵니다. 이후 수정할 때마다 `vercel --prod`로 재배포.

### GitHub 연동으로 (자동배포 원하면)

1. 이 폴더를 GitHub 저장소에 push
2. https://vercel.com 가입(GitHub 계정으로) → "Add New Project" → 저장소 선택 → 기본 설정 그대로 Deploy
3. 이후 GitHub에 push할 때마다 자동으로 재배포됨

## Roblox OAuth 앱 설정에 반영

배포 후 나온 주소를 OAuth 앱 설정에 넣어주세요:

- 개인정보처리방침 URL: `https://<your-domain>.vercel.app/privacy`
- 서비스 약관 URL: `https://<your-domain>.vercel.app/terms`

## 참고

- `app/privacy/page.tsx`, `app/terms/page.tsx`의 연락처 이메일(`lhy93380@gmail.com`)은 예시로 넣어둔 값입니다. 다른 이메일로 공개하고 싶으면 두 파일에서 바꿔주세요.
- 색상 토큰은 `tailwind.config.ts`에 있고, 앱 클라이언트랑 같은 톤(다크+오렌지)으로 맞춰뒀습니다.
