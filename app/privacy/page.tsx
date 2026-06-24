export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-sm leading-relaxed text-textMuted">
      <h1 className="mb-8 text-2xl font-bold text-white">개인정보처리방침</h1>

      <p className="mb-6">
        KSCarPlay(이하 &quot;본 서비스&quot;)는 Roblox 게임 내 차량 오디오 시스템을 원격으로 조작하기 위한 개인
        프로젝트입니다. 본 서비스가 수집·처리하는 정보는 다음과 같습니다.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">1. 수집하는 정보</h2>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Roblox OAuth 로그인 시 발급되는 사용자 식별값(Roblox User ID)</li>
        <li>음향 설정값(볼륨, 거리감, 피치, EQ)과 현재 재생 상태</li>
        <li>공유 코드를 통해 직접 등록한 노래 목록(제목, 아티스트, Roblox 사운드 ID)</li>
      </ul>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">2. 수집하지 않는 정보</h2>
      <p>
        실명, 이메일, 결제 정보 등 Roblox 계정 식별값 이외의 개인정보는 수집하지 않습니다. 광고 목적의 추적이나
        제3자 마케팅 데이터 공유도 하지 않습니다.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">3. 보관 기간</h2>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>로그인 세션: 최대 30일</li>
        <li>공유 코드로 등록한 노래 목록: 30일 후 자동 만료</li>
        <li>게임 상태 동기화 데이터: 24시간 후 자동 만료</li>
        <li>최근 재생 기록, 직접 추가한 노래 목록: 사용자 기기(앱)에만 저장되며 서버에 보관되지 않음</li>
      </ul>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">4. 제3자 제공</h2>
      <p>Roblox(인증), Last.fm(앨범 아트 조회) 외에 어떤 제3자에게도 정보를 제공하지 않습니다.</p>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">5. 문의</h2>
      <p>
        문의사항은{' '}
        <a className="text-accent" href="mailto:lhy93380@gmail.com">
          lhy93380@gmail.com
        </a>
        으로 연락해주세요.
      </p>

      <p className="mt-10 text-xs text-textMuted/70">
        최종 수정일: {new Date().toLocaleDateString('ko-KR')}
      </p>
    </main>
  );
}
