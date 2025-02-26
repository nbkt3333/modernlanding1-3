import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Users, Clock, Sparkles, MessageCircle, Shield, Heart, Crown } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-secondary to-white dark:from-gray-900 dark:to-gray-800">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#e5e0d9]/30 to-[#d4cdc6]/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_750px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <Badge className="inline-flex bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors px-4 py-2 text-sm">
                  期間限定：初回無料カウンセリング実施中
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#2c2c2c] to-[#4a4a4a] dark:from-white dark:to-gray-300">
                  たった3ヶ月で、
                  <br />
                  <span className="text-primary">モテる男</span>に変わる。
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300 leading-relaxed">
                  「いい人なのに、なぜかモテない」
                  <br />
                  その原因は、あなたの<span className="text-primary font-medium">見た目</span>にあります。
                  <br />
                  <span className="text-red-500 font-bold">95%の女性</span>
                  が、「清潔感のある男性に魅力を感じる」と回答。
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="inline-flex items-center bg-gradient-to-r from-red-500 to-primary hover:opacity-90 transition-opacity text-white px-8 animate-pulse"
                >
                  今すぐ無料診断を受ける
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://lin.ee/195xbqxm" target="_blank" rel="noopener noreferrer">
                    LINEで相談する
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { number: "3,200+", label: "マッチング成功実績" },
                  { number: "89%", label: "交際成功率" },
                  { number: "100%", label: "身だしなみ改善率" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e5e0d9]/10 to-transparent rounded-2xl" />
              <Image
                alt="スタイリッシュなビジネスマン"
                className="object-cover rounded-2xl shadow-2xl"
                fill
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-21%2010.05.52%20-%20A%20stylish%20and%20confident%20Japanese%20man%20in%20his%2030s-50s%20wearing%20a%20simple%20light%20beige%20mock%20neck%20sweater%20and%20a%20matching%20light%20beige%20jacket.%20The%20image%20is%20a%20b-auX3TjwNzAXsoNGzYoTegqwtewGE2h.webp"
                style={{ objectPosition: "center" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起セクション */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
              こんな悩みはありませんか？
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              なぜか女性に
              <br />
              <span className="text-red-500">選ばれない。</span>
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              あなたの魅力が100%伝わっていない可能性があります。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "マッチングアプリで全然いいね！が来ない",
                description: "プロフィール写真が命。適切なスタイリングで、マッチング率が平均8.2倍に上昇します。",
              },
              {
                icon: <Users className="h-8 w-8 text-red-500" />,
                title: "初デートで次につながらない",
                description: "第一印象で7秒以内に判断される現実。76%の女性が「服装」を重視していると回答。",
              },
              {
                icon: <Crown className="h-8 w-8 text-red-500" />,
                title: "好みのタイプと言われない",
                description: "「清潔感がある」「おしゃれ」は、女性が選ぶ理想の男性の特徴TOP3に入っています。",
              },
            ].map((item, i) => (
              <Card key={i} className="relative group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
              モテる男になるための最短ルート
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              3ヶ月で
              <br />
              <span className="text-primary">理想の自分</span>に生まれ変わる。
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              3,200人以上の男性の恋愛を成功に導いた、実績のあるメソッド。
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "スタートアッププラン",
                price: "19,800",
                popular: false,
                features: [
                  "モテ診断＆改善ポイント特定",
                  "パーソナルカラー診断",
                  "デートコーデ3パターン提案",
                  "30日間LINEサポート",
                ],
                cta: "まずはここから",
              },
              {
                title: "恋愛成功プラン",
                price: "39,800",
                popular: true,
                features: [
                  "スタートアッププランの全内容",
                  "プロによる同行ショッピング（3時間）",
                  "マッチングアプリ用撮影＆選定",
                  "デートプラン提案付き",
                ],
                cta: "人気No.1プラン",
              },
              {
                title: "モテ確定コース",
                price: "98,000",
                popular: false,
                features: [
                  "恋愛成功プランの全内容",
                  "3ヶ月集中プログラム",
                  "月1回の対面コンサルティング",
                  "成功保証付き",
                ],
                cta: "本気でモテたい方向け",
              },
            ].map((plan, i) => (
              <Card key={i} className={`relative ${plan.popular ? "border-red-500 shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-red-500 text-white">MOST POPULAR</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">¥{plan.price}</span>
                    <span className="text-gray-500">/一括</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-red-500 text-white hover:bg-red-600" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ビフォーアフターセクション */}
      <section className="py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
              圧倒的な変化を、あなたに。
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              たった3ヶ月で、
              <br />
              <span className="text-red-500">女性が振り返る男性</span>に。
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              「マッチング率4倍」「交際成功率89%」
              <br />
              数字が証明する、確実な変化をお約束します。
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                alt="ビフォーアフター"
                className="object-cover"
                fill
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-21%2010.14.34%20-%20A%20before-and-after%20transformation%20of%20a%20Japanese%20man%20in%20his%2030s-50s.%20On%20the%20left%20side,%20he%20is%20dressed%20in%20an%20uncoordinated,%20oversized,%20and%20wrinkled%20outfi-13bf3oSdWwQPKkiNNDoEME0l12qB5x.webp"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-secondary/10 to-primary/5" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
              ⚡️期間限定キャンペーン実施中
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-[900px]">
              今なら初回カウンセリングが
              <br />
              <span className="text-red-500">完全無料</span>
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              <span className="font-bold">先着30名様限定</span>
              <br />
              あなたがモテない原因を徹底診断します。
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" className="bg-red-500 text-white hover:bg-red-600 px-8 animate-pulse">
                今すぐ無料診断を受ける
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://lin.ee/195xbqxm" target="_blank" rel="noopener noreferrer">
                  LINEで相談する
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                所要時間30分
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                完全予約制
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                キャンセル無料
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    スタイリスト紹介
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    メディア掲載
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    サービス一覧
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    料金プラン
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    ご利用の流れ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="https://lin.ee/195xbqxm" className="text-gray-500 hover:text-primary transition-colors">
                    LINE公式
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    採用情報
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-500">
            <p>© 2024 Style Revolution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

