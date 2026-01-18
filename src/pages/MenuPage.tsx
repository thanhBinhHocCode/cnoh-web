import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Menu categories and items - replace with actual content
const categories = [
  { id: "chao", label: "Cháo", icon: "🍲" },
  { id: "mi-tom", label: "Mì tôm", icon: "🍜" },
  { id: "tra", label: "Trà", icon: "🍵" },
];

const menuItems = {
  chao: [
    {
      id: 1,
      name: "Cháo Đặc Biệt O Hoèn 1",
      price: "40.000đ",
      description: "Nghêu - Hàu - Sườn",
      image: "/placeholder.svg",
      isPopular: true,
    },
    {
      id: 2,
      name: "Cháo Đặc Biệt O Hoèn 2",
      price: "50.000đ",
      description: "Nghêu - Hàu - Tôm",
      image: "/placeholder.svg",
      isPopular: true,
    },
    {
      id: 3,
      name: "Cháo Đặc Biệt O Hoèn 3",
      price: "60.000đ",
      description: "Nghêu - Tôm - Sườn",
      image: "/placeholder.svg",
      isPopular: false,
    },
    {
      id: 4,
      name: "Cháo Đặc Biệt O Hoèn 4",
      price: "70.000đ",
      description: "Hàu - Tôm - Sườn",
      image: "/placeholder.svg",
      isPopular: false,
    },
    {
      id: 5,
      name: "Cháo Đặc Biệt O Hoèn 5",
      price: "80.000đ",
      description: "Nghêu - Hàu - Tôm - Sườn",
      image: "/placeholder.svg",
      isPopular: false,
    },
  ],
  "mi-tom": [
    {
      id: 6,
      name: "Mì Tôm Nghêu",
      price: "20.000đ",
      description: "Mì tôm nấu cùng nghêu tươi ngon",
      image: "/placeholder.svg",
      isPopular: true,
    },
    {
      id: 7,
      name: "Mì Tôm Hàu",
      price: "25.000đ",
      description: "Mì tôm với hàu tươi ngon",
      image: "/placeholder.svg",
      isPopular: false,
    },
    {
      id: 8,
      name: "Mì Tôm Nghêu Hàu",
      price: "30.000đ",
      description: "Mì tôm với nghêu hàu",
      image: "/placeholder.svg",
      isPopular: false,
    },
    {
      id: 9,
      name: "Mì Tôm Nghêu Tôm",
      price: "50.000đ",
      description: "Combo mì tôm nghêu và tôm",
      image: "/placeholder.svg",
      isPopular: false,
    },
  ],
  tra: [
    {
      id: 10,
      name: "Trà Quế Mật Ong",
      price: "35.000đ",
      description: "Thức uống giải khát hoàn hảo",
      image: "/placeholder.svg",
      isPopular: true,
    },
    {
      id: 11,
      name: "Nước Ngọt",
      price: "15.000đ",
      description: "Các loại nước ngọt đóng chai",
      image: "/placeholder.svg",
      isPopular: false,
    },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("chao");

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Thực Đơn
          </h1>
          <p className="mt-2 text-primary-foreground/80">
            Khám phá các món ăn ngon tại Cháo Nghêu O Hoèn
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 border-b border-border bg-background py-4">
        <div className="container">
          <div className="flex justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "gap-2 transition-all",
                  activeCategory === category.id && "scale-105"
                )}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary">
              {categories.find((c) => c.id === activeCategory)?.label}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <Card
                key={item.id}
                className="card-hover group overflow-hidden border-2 border-border"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.isPopular && (
                    <span className="absolute right-2 top-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Bán chạy
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xl font-bold text-primary">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-card py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
          *Tới ngay cửa hàng gần bạn hoặc đặt món ngay hôm nay!
          </p>
        </div>
      </section>
    </Layout>
  );
}
