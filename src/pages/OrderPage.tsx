import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const orderPlatforms = [
  {
    id: "grab",
    name: "GrabFood",
    description: "Đặt món nhanh chóng qua ứng dụng Grab",
    url: "https://grab.com",
    color: "bg-green-600 hover:bg-green-700",
    icon: "🛵",
  },
  {
    id: "shopee",
    name: "ShopeeFood",
    description: "Ưu đãi hấp dẫn khi đặt qua ShopeeFood",
    url: "https://shopeefood.vn",
    color: "bg-orange-500 hover:bg-orange-600",
    icon: "🛒",
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Nhắn tin trực tiếp qua Fanpage",
    url: "https://www.facebook.com/chaongheuohoen",
    color: "bg-blue-600 hover:bg-blue-700",
    icon: "📘",
  },
  {
    id: "zalo",
    name: "Zalo",
    description: "Đặt món qua Zalo OA",
    url: "https://zalo.me",
    color: "bg-blue-500 hover:bg-blue-600",
    icon: "💬",
  },
];

export default function OrderPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Đặt Món
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Chọn nền tảng yêu thích để đặt món ngay
          </p>
        </div>
      </section>

      {/* Order Platforms */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6 md:grid-cols-2">
              {orderPlatforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="card-hover h-full overflow-hidden border-2 border-border transition-all group-hover:border-primary">
                    <CardContent className="flex flex-col items-center p-8 text-center">
                      <div className="mb-4 text-5xl">{platform.icon}</div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {platform.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {platform.description}
                      </p>
                      <div
                        className={`mt-6 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all ${platform.color}`}
                      >
                        Đặt ngay
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phone Order */}
      <section className="bg-card py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Hoặc gọi điện đặt trực tiếp
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hotline hoạt động từ 6:00 - 22:00 hàng ngày
          </p>
          <a
            href="tel:096 756 44 41"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xl font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            📞 096 756 44 41
          </a>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
              Thông tin giao hàng
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-border">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-4xl">⏰</div>
                  <h3 className="font-bold text-foreground">Thời gian</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Giao hàng trong 30-45 phút
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-4xl">📍</div>
                  <h3 className="font-bold text-foreground">Phạm vi</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Giao hàng trong bán kính 5km
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-4xl">🆓</div>
                  <h3 className="font-bold text-foreground">Miễn phí</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Miễn phí ship đơn từ 100k đối với Ahafood
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
