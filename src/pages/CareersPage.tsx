import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Banknote, Users } from "lucide-react";

// Job listings - replace with actual data
const jobs = [
  {
    id: 1,
    title: "Nhân viên phục vụ",
    location: "Tất cả chi nhánh",
    type: "Full-time / Part-time",
    salary: "4.5 - 6 triệu/tháng",
    description: "Phục vụ khách hàng, dọn dẹp bàn ghế, hỗ trợ bếp khi cần.",
    requirements: [
      "Nam/Nữ từ 18 tuổi trở lên",
      "Nhanh nhẹn, thân thiện",
      "Có tinh thần làm việc nhóm",
      "Ưu tiên có kinh nghiệm F&B",
    ],
  },
  {
    id: 2,
    title: "Nhân viên bếp",
    location: "Nam Ô",
    type: "Full-time",
    salary: "6 - 8 triệu/tháng",
    description: "Chuẩn bị nguyên liệu, nấu nướng, đảm bảo vệ sinh an toàn thực phẩm.",
    requirements: [
      "Nam/Nữ từ 18 tuổi trở lên",
      "Có kinh nghiệm nấu ăn tối thiểu 6 tháng",
      "Chịu được áp lực công việc",
      "Có tinh thần học hỏi",
    ],
  },
  {
    id: 3,
    title: "Quản lý cửa hàng",
    location: "Tất cả chi nhánh",
    type: "Full-time",
    salary: "10 - 15 triệu/tháng",
    description: "Quản lý hoạt động cửa hàng, nhân sự, đảm bảo chất lượng dịch vụ.",
    requirements: [
      "Nam/Nữ từ 25 tuổi trở lên",
      "Có kinh nghiệm quản lý tối thiểu 2 năm",
      "Kỹ năng lãnh đạo, giao tiếp tốt",
      "Có khả năng làm việc dưới áp lực",
    ],
  },
  {
    id: 4,
    title: "Nhân viên thu ngân",
    location: "Tất cả chi nhánh",
    type: "Full-time",
    salary: "5 - 7 triệu/tháng",
    description: "Xử lý thanh toán, chào đón khách hàng, hỗ trợ các công việc khác.",
    requirements: [
      "Nữ từ 18 tuổi trở lên",
      "Trung thực, cẩn thận",
      "Giao tiếp tốt",
      "Biết sử dụng máy tính cơ bản",
    ],
  },
];

export default function CareersPage() {
  const handleApply = (jobTitle: string) => {
    // Open email client with job title
    window.location.href = `mailto:tuyendung@chaongheuohoen.vn?subject=Ứng tuyển vị trí: ${jobTitle}&body=Xin chào,%0A%0ATôi muốn ứng tuyển vị trí ${jobTitle}.%0A%0AHọ tên:%0ASố điện thoại:%0AKinh nghiệm:%0A%0AXin cảm ơn.`;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Tuyển Dụng
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Gia nhập đội ngũ Cháo Nghêu O Hoèn - Nơi bạn phát triển và tỏa sáng
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
            Tại sao chọn O Hoèn?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">💰</div>
                <h3 className="font-bold text-foreground">Thu nhập hấp dẫn</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lương cạnh tranh + thưởng theo doanh số
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">🍲</div>
                <h3 className="font-bold text-foreground">Ăn uống miễn phí</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Được ăn tại chỗ trong giờ làm việc
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">📈</div>
                <h3 className="font-bold text-foreground">Cơ hội thăng tiến</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lộ trình phát triển rõ ràng
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">🎉</div>
                <h3 className="font-bold text-foreground">Môi trường vui vẻ</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Đồng nghiệp thân thiện, năng động, đặc biệt có Bình Sếp Lớn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-card py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
            Vị trí đang tuyển
          </h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="card-hover overflow-hidden border-2 border-border">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary lg:text-2xl">
                        {job.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Banknote className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        {job.description}
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold text-foreground">Yêu cầu:</h4>
                        <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        onClick={() => handleApply(job.title)}
                        size="lg"
                        className="w-full lg:w-auto"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        Ứng tuyển ngay
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="container text-center">
          <h2 className="text-xl font-bold text-primary md:text-2xl">
            Liên hệ tuyển dụng
          </h2>
          <p className="mt-2 text-muted-foreground">
            Email: food.langnamo@gmail.com | Hotline: 096 756 44 41
          </p>
        </div>
      </section>
    </Layout>
  );
}
