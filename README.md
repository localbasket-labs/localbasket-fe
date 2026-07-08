# localbasket-fe

[![CI](https://github.com/localbasket-labs/localbasket-fe/actions/workflows/ci.yml/badge.svg)](https://github.com/localbasket-labs/localbasket-fe/actions/workflows/ci.yml)

LocalBasket 운영자가 주문 리스크와 배차 상태를 확인하는 Expo 앱입니다.

## 제품 맥락

운영자는 전체 주문을 하나씩 볼 시간이 없습니다. 이 앱은 SLA, 배차 ETA, 재고 알림만 먼저 보여주고 위험 주문을 빠르게 찾도록 만든 모바일 운영 화면입니다.

## 핵심 화면

- `dashboard`: SLA, 배차 ETA, 재고/라이더 알림 표시
- API 호출은 `ky` 기반 `src/features/dashboard/api.ts`로 분리
- 공통 지표 카드는 `src/shared/components/metric-card.tsx`에서 재사용

## 기술 스택

- Expo Router
- React Native
- `ky`
- `react-native-unistyles`
- TypeScript

## 프로젝트 구조

```txt
src/app/                  Expo Router 엔트리
src/features/dashboard/   대시보드 API, hook, screen, type
src/shared/components/    공통 UI
src/theme/                Unistyles 설정
```

## 실행

```bash
npm install
npm test
npm run typecheck
npm run start
```

## 품질 기준

- `npm test`: 대시보드 API/화면 계약 검증
- `npm run typecheck`: TypeScript 검증
- `npm run self-check`: 폴더 구조, `ky`, export 규칙 검증
