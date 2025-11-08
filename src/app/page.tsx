export default function Home() {
  return (
    <section className="space-y-12">
      <div className="space-y-5">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#5bc8ac]">
          <span className="text-base">✧</span>
          Explore The Network
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#04695b] md:text-5xl">
          女性声優のつながりを、やさしいグラフで。
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-slate-600">
          出演作品や共演関係をもとに、女性声優のネットワークをふんわりと可視化するWebアプリです。
          心地よい配色とシンプルな操作で、好きな声優からそっとつながりを辿れます。
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="inline-flex items-center rounded-full border border-[#5bc8ac] bg-white/80 px-4 py-2 text-[#5bc8ac]">
            共演関係を可視化
          </span>
          <span className="inline-flex items-center rounded-full border border-[#f18d9e] bg-white/80 px-4 py-2 text-[#f18d9e]">
            直感的な操作性
          </span>
          <span className="inline-flex items-center rounded-full border border-[#e6d72a] bg-white/90 px-4 py-2 text-[#a3a30f]">
            最新データを反映
          </span>
        </div>
      </div>
      <div className="grid gap-6 text-sm text-slate-600 md:grid-cols-2">
        <div className="space-y-2 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm shadow-[#f18d9e]/30 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f18d9e]/50">
          <h2 className="text-lg font-semibold text-[#04695b]">グラフビュー</h2>
          <p>
            声優同士の関係性をグラフとして表示し、ふわっと滑らかに拡大・移動できます。
          </p>
        </div>
        <div className="space-y-2 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm shadow-[#5bc8ac]/30 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#5bc8ac]/50">
          <h2 className="text-lg font-semibold text-[#04695b]">詳細パネル</h2>
          <p>
            選択した声優の出演作品や共演者を、カード感覚でコンパクトに把握できます。
          </p>
        </div>
        <div className="space-y-2 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm shadow-[#e6d72a]/30 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#e6d72a]/50">
          <h2 className="text-lg font-semibold text-[#8a8200]">コレクション</h2>
          <p>
            気になったつながりをお気に入りにまとめて、後からじっくり見返せます。
          </p>
        </div>
        <div className="space-y-2 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm shadow-[#f18d9e]/30 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f18d9e]/50">
          <h2 className="text-lg font-semibold text-[#d25a78]">
            最新アップデート
          </h2>
          <p>
            出演情報の更新があれば順次反映し、最新のつながりを可愛くキャッチできます。
          </p>
        </div>
      </div>
    </section>
  );
}
