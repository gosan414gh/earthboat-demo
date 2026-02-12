export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* ===== Navigation ===== */}
      <nav className="fixed top-0 w-full z-50 bg-earth-50/80 backdrop-blur-md border-b border-earth-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-earth-900">
            Earthboat
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-earth-600">
            <a href="#concept" className="hover:text-earth-900 transition">
              コンセプト
            </a>
            <a href="#features" className="hover:text-earth-900 transition">
              特徴
            </a>
            <a href="#experience" className="hover:text-earth-900 transition">
              体験
            </a>
            <a href="#contact" className="hover:text-earth-900 transition">
              お問い合わせ
            </a>
          </div>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-earth-900 via-earth-800 to-earth-700 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sauna/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nature/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-water/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-accent-light text-sm tracking-[0.3em] uppercase mb-6">
            Sauna &middot; Nature &middot; Journey
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
            サウナと自然と、
            <br />
            旅をしよう。
          </h1>
          <p className="text-lg md:text-xl text-earth-300 leading-relaxed mb-12 max-w-xl mx-auto">
            Earthboatは、移動できるサウナ付きタイニーハウス。
            <br className="hidden md:block" />
            自然の中で暮らすように旅する、新しい体験を届けます。
          </p>
          <a
            href="#concept"
            className="inline-block border border-white/30 text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-earth-900 transition-all duration-300"
          >
            詳しく見る
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-earth-400 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-earth-400/50 animate-pulse" />
        </div>
      </section>

      {/* ===== Concept ===== */}
      <section id="concept" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Concept
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-earth-900 mb-8 tracking-tight">
            地球を旅する、小さな船。
          </h2>
          <p className="text-earth-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Earthboatは「地球（Earth）を旅する小さな船（Boat）」。
            サウナで心身を整え、自然の中に身を置き、
            場所にとらわれない自由な暮らしを実現する。
            それは、現代における新しい「豊かさ」の形です。
          </p>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="py-32 px-6 bg-earth-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-earth-900 tracking-tight">
              3つの柱
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sauna */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-sauna/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-sauna"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">サウナ</h3>
              <p className="text-earth-500 leading-relaxed">
                本格的なフィンランド式サウナを搭載。薪の香り、蒸気の音、
                そして外気浴。大自然の中で「ととのう」特別な時間を。
              </p>
            </div>

            {/* Nature */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-nature/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-nature"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.592L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">自然</h3>
              <p className="text-earth-500 leading-relaxed">
                湖畔、森の中、海辺——。日本各地の美しいロケーションに
                Earthboatを設置。自然と共に過ごす時間が、日常をリセットします。
              </p>
            </div>

            {/* Mobility */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-water/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-water"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">移動</h3>
              <p className="text-earth-500 leading-relaxed">
                トレーラー型だから、どこへでも。季節や気分に合わせて
                拠点を変える、ノマドスタイルの新しい暮らし方を提案します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Experience ===== */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-earth-900 tracking-tight">
              ある1日の過ごし方
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {[
                {
                  time: "07:00",
                  title: "朝靄の中で目覚める",
                  desc: "鳥のさえずりで自然と目が覚める。窓の外には湖面に映る朝焼け。",
                },
                {
                  time: "08:00",
                  title: "湖畔でモーニング",
                  desc: "テラスで淹れたてのコーヒーとともに。静かな朝の時間を楽しむ。",
                },
                {
                  time: "15:00",
                  title: "薪サウナを焚く",
                  desc: "パチパチと薪が燃える音。ロウリュの蒸気が身体を包み込む。",
                },
                {
                  time: "16:00",
                  title: "湖にダイブ",
                  desc: "サウナの後は冷たい湖へ。そして外気浴。最高の「ととのい」体験。",
                },
                {
                  time: "19:00",
                  title: "星空ディナー",
                  desc: "地元の食材を使った料理を、満天の星空の下で。",
                },
              ].map((item) => (
                <div key={item.time} className="flex gap-6">
                  <div className="text-accent font-mono text-sm pt-1 w-14 shrink-0">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-earth-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-earth-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder visual */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-earth-200 via-earth-100 to-earth-200 flex items-center justify-center">
                <div className="text-center text-earth-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21z"
                    />
                  </svg>
                  <p className="text-sm">Photo Placeholder</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sauna/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-24 px-6 bg-earth-900 text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "12m\u00B2", label: "居住スペース" },
            { value: "100\u00B0C", label: "サウナ室温" },
            { value: "47+", label: "設置可能地域" },
            { value: "\u221E", label: "旅の可能性" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-2">
                {stat.value}
              </div>
              <div className="text-earth-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-earth-900 mb-8 tracking-tight">
            旅の準備はできましたか？
          </h2>
          <p className="text-earth-500 text-lg leading-relaxed mb-12">
            Earthboatに関するご質問・ご予約・コラボレーションのご相談など、
            お気軽にお問い合わせください。
          </p>
          <a
            href="mailto:hello@earthboat.jp"
            className="inline-block bg-earth-900 text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-earth-700 transition-colors duration-300"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-earth-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold tracking-tight text-earth-900">
            Earthboat
          </span>
          <div className="flex items-center gap-8 text-sm text-earth-400">
            <a href="#concept" className="hover:text-earth-600 transition">
              コンセプト
            </a>
            <a href="#features" className="hover:text-earth-600 transition">
              特徴
            </a>
            <a href="#experience" className="hover:text-earth-600 transition">
              体験
            </a>
            <a href="#contact" className="hover:text-earth-600 transition">
              お問い合わせ
            </a>
          </div>
          <p className="text-xs text-earth-400">
            &copy; 2025 Earthboat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
