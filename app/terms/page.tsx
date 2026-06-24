export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-sm leading-relaxed text-textMuted">
      <h1 className="mb-8 text-2xl font-bold text-white">서비스 이용약관</h1>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">1. 서비스 성격</h2>
      <p>
        KSCarPlay는 개인이 운영하는 프로젝트로, Roblox Corporation과 제휴되어 있지 않으며 Roblox의 공식
        서비스가 아닙니다.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">2. 책임의 한계</h2>
      <p>
        본 서비스는 사전 고지 없이 변경, 중단될 수 있으며, 서비스 이용 중 발생하는 손해에 대해 어떠한 보증도
        제공하지 않습니다.
      </p>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">3. 이용자의 의무</h2>
      <p>타인의 Roblox 계정 정보를 무단으로 사용하거나, 서비스를 본래 목적과 다르게 악용하는 행위를 금지합니다.</p>

      <h2 className="mb-2 mt-8 text-lg font-semibold text-white">4. 문의</h2>
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
