# Seoul Milk — B2B Product Catalog

Next.js (App Router) + Tailwind CSS로 구축된 서울우유협동조합 해외 바이어용 제품 카탈로그.

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
# → http://localhost:3000 에서 확인
```

언어 전환: 헤더 우측 한국어/ENGLISH 버튼, 또는 URL 파라미터 `?lang=en`

## Vercel 배포

### 방법 1 — Vercel CLI (권장)

```bash
# Vercel CLI 설치 (최초 1회)
npm i -g vercel

# 이 폴더에서 실행
vercel

# 이후 변경사항 반영
vercel --prod
```

### 방법 2 — GitHub 연동

1. 이 폴더를 GitHub 저장소에 push
2. vercel.com → Add New Project → GitHub 저장소 선택
3. Framework Preset: **Next.js** (자동 감지)
4. **Deploy** 클릭 → 자동 빌드 & 배포

> **주의**: Root Directory를 `catalog`(이 폴더)로 지정해야 합니다.  
> 만약 상위 폴더 `SeoulMilkCatalog`를 저장소 루트로 사용한다면  
> Vercel 프로젝트 설정 → General → Root Directory를 `catalog`로 변경하세요.

## 빌드

```bash
npm run build
npm start
```

## 데이터 업데이트

`public/data.json` (원본: `seoulmilk_catalog_data.json` 복사본)을 교체하면 됩니다.  
빌드 시 정적으로 생성되므로 변경 후 재빌드가 필요합니다.

## 기술 스택

- **Next.js 15** (App Router, SSG)
- **Tailwind CSS v4**
- **TypeScript**
- 폰트: Noto Sans KR + Montserrat (Google Fonts)
- 이미지: 서울우유 공식 서버 핫링크 (외부 URL)
