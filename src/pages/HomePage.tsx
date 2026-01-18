import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Facebook, Instagram, Star, ChevronRight, Percent, Flame } from "lucide-react";

// Placeholder data - replace with actual content
const featuredDishes = [
  {
    id: 1,
    name: "Cháo Nghêu Đặc Biệt",
    price: "45.000đ",
    image: "/placeholder.svg",
    description: "Cháo nghêu đậm đà với nghêu tươi sống",
  },
  {
    id: 2,
    name: "Cháo Nghêu Trứng Bắc Thảo",
    price: "55.000đ",
    image: "/placeholder.svg",
    description: "Kết hợp hoàn hảo nghêu và trứng bắc thảo",
  },
  {
    id: 3,
    name: "Mì Tôm Nghêu",
    price: "40.000đ",
    image: "/placeholder.svg",
    description: "Mì tôm nấu cùng nghêu tươi ngon",
  },
  {
    id: 4,
    name: "Trà Đào Cam Sả",
    price: "25.000đ",
    image: "/placeholder.svg",
    description: "Thức uống giải khát hoàn hảo",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    rating: 5,
    comment: "Cháo nghêu ở đây ngon nhất mà tôi từng ăn! Nghêu tươi, nước dùng đậm đà.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Trần Thị B",
    rating: 5,
    comment: "Quán sạch sẽ, phục vụ nhanh nhẹn. Sẽ quay lại ủng hộ!",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Lê Văn C",
    rating: 5,
    comment: "Giá cả hợp lý, chất lượng tuyệt vời. Recommend cho mọi người!",
    avatar: "/placeholder.svg",
  },
];

const promotions = [
  {
    id: 1,
    title: "Giảm 20% cho đơn đầu tiên",
    description: "Áp dụng khi đặt qua app",
    code: "OHOEN20",
  },
  {
    id: 2,
    title: "Mua 2 tặng 1 trà",
    description: "Áp dụng cuối tuần",
    code: "WEEKEND",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Cháo Nghêu O Hoèn
            </h1>
            <p className="mt-4 animate-fade-in text-xl text-primary-foreground/90 md:text-2xl">
              Đậm đà hương vị truyền thống
            </p>
            <p className="mt-2 animate-fade-in text-primary-foreground/80">
              Thưởng thức những bát cháo nghêu thơm ngon, được nấu từ nghêu tươi sống mỗi ngày
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/thuc-don">
                  Xem thực đơn
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/dat-mon">Đặt món ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Follow */}
      <section className="border-b border-border bg-card py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="text-sm font-medium text-muted-foreground">
              Theo dõi chúng tôi:
            </span>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Zalo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <Percent className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary lg:text-3xl">
              Khuyến mãi hot
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {promotions.map((promo) => (
              <Card
                key={promo.id}
                className="card-hover overflow-hidden border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5"
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Percent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary">
                      {promo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {promo.description}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-secondary">
                      Mã: {promo.code}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-card py-12 lg:py-16">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary lg:text-3xl">
              Món bán chạy
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish) => (
              <Card
                key={dish.id}
                className="card-hover overflow-hidden border-2 border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground">{dish.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dish.description}
                  </p>
                  <p className="mt-2 text-lg font-bold text-primary">
                    {dish.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link to="/thuc-don">
                Xem toàn bộ thực đơn
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary lg:text-3xl">
              Khách hàng nói gì về chúng tôi
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-hover border-2 border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-secondary-foreground lg:text-3xl">
            Đói bụng rồi? Đặt món ngay thôi!
          </h2>
          <p className="mt-2 text-secondary-foreground/80">
            Giao hàng nhanh chóng, đảm bảo nóng hổi
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
          >
            <Link to="/dat-mon">
              Đặt món ngay
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
