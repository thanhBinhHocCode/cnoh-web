import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CheckCircle, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function FranchisePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, open email client - will be replaced with actual email sending
    const emailBody = `
Họ tên: ${formData.name}
Số điện thoại: ${formData.phone}
Email: ${formData.email}
Địa điểm mong muốn: ${formData.location}
Tin nhắn: ${formData.message}
    `.trim();

    window.location.href = `mailto:nhuongquyen@chaongheuohoen.vn?subject=Liên hệ nhượng quyền từ ${formData.name}&body=${encodeURIComponent(emailBody)}`;

    toast({
      title: "Đang mở email...",
      description: "Vui lòng gửi email để hoàn tất liên hệ.",
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Nhượng Quyền Thương Hiệu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Cùng O Hoèn kinh doanh và phát triển bền vững
          </p>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
            Tại sao nên nhượng quyền O Hoèn?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  🏆
                </div>
                <h3 className="font-bold text-foreground">Thương hiệu uy tín</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Được khách hàng yêu thích với nhiều năm hoạt động và phát triển
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  📚
                </div>
                <h3 className="font-bold text-foreground">Đào tạo bài bản</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chương trình đào tạo toàn diện từ A-Z cho đối tác
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  🛠️
                </div>
                <h3 className="font-bold text-foreground">Hỗ trợ toàn diện</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hỗ trợ tìm mặt bằng, thiết kế, marketing và vận hành
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  💰
                </div>
                <h3 className="font-bold text-foreground">Vốn đầu tư hợp lý</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chi phí đầu tư phù hợp, hoàn vốn nhanh
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  🍲
                </div>
                <h3 className="font-bold text-foreground">Công thức độc quyền</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sở hữu công thức nấu cháo nghêu đặc biệt của O Hoèn
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  📈
                </div>
                <h3 className="font-bold text-foreground">Thị trường tiềm năng</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nhu cầu thị trường lớn, ít đối thủ cạnh tranh trực tiếp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
            Quy trình nhượng quyền
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {[
                { step: 1, title: "Liên hệ tư vấn", desc: "Gửi form đăng ký để được tư vấn chi tiết" },
                { step: 2, title: "Thẩm định", desc: "Đánh giá hồ sơ và năng lực đối tác" },
                { step: 3, title: "Ký kết hợp đồng", desc: "Thống nhất điều khoản và ký hợp đồng" },
                { step: 4, title: "Thiết kế & Thi công", desc: "Hỗ trợ thiết kế và giám sát thi công" },
                { step: 5, title: "Đào tạo", desc: "Đào tạo nhân viên và chuyển giao công nghệ" },
                { step: 6, title: "Khai trương", desc: "Hỗ trợ marketing và khai trương" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Form */}
              <Card className="border-2 border-border">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="mb-6 text-xl font-bold text-primary">
                    Đăng ký tư vấn nhượng quyền
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="0912 345 678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Địa điểm mong muốn *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="Quận/Huyện, Tỉnh/Thành phố"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tin nhắn</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nội dung bạn muốn trao đổi thêm..."
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-bold text-primary">
                      Thông tin liên hệ
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Hotline nhượng quyền</p>
                          <a
                            href="tel:096 756 44 41"
                            className="text-secondary hover:underline"
                          >
                            090 123 4567
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a
                            href="mailto:nhuongquyen@chaongheuohoen.vn"
                            className="text-secondary hover:underline"
                          >
                            food.langnamo@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Văn phòng</p>
                          <p className="text-muted-foreground">
                            08 An Thượng 37, Q.Ngũ Hành Sơn, TP.Đà Nẵng.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Building className="mt-1 h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-bold text-primary">
                          Vốn đầu tư dự kiến
                        </h3>
                        <p className="mt-2 text-2xl font-bold text-foreground">
                          200 - 500 triệu VNĐ
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Tùy thuộc vào quy mô và vị trí cửa hàng
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-lg bg-secondary/10 p-6">
                  <h3 className="font-bold text-secondary">Cam kết của O Hoèn</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Đào tạo nhân viên miễn phí",
                      "Hỗ trợ marketing 3 tháng đầu",
                      "Cung cấp nguyên liệu đồng nhất",
                      "Giám sát chất lượng định kỳ",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
