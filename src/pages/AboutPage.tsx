import { Layout } from "@/components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Về O Hoèn
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Câu chuyện về tình yêu ẩm thực và hương vị truyền thống
          </p>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="py-16">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Khởi nguồn từ tình yêu
              </h2>
              <p className="mt-4 text-muted-foreground">
                Cháo Nghêu O Hoèn được thành lập từ tình yêu ẩm thực và mong muốn 
                mang đến cho thực khách những bát cháo nghêu thơm ngon, đậm đà 
                hương vị truyền thống Việt Nam.
              </p>
              <p className="mt-4 text-muted-foreground">
                Tên gọi "O Hoèn" được lấy cảm hứng từ cách gọi thân thương của 
                người miền Trung, thể hiện sự gần gũi, ấm áp như một người bạn, 
                một người thân trong gia đình.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="aspect-video overflow-hidden rounded-lg border-4 border-primary/20">
                <img
                  src="/placeholder.svg"
                  alt="Câu chuyện O Hoèn"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="bg-card py-16">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="aspect-video overflow-hidden rounded-lg border-4 border-secondary/20">
                <img
                  src="/placeholder.svg"
                  alt="Nguyên liệu tươi sống"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-secondary md:text-3xl">
                Nguyên liệu tươi sống mỗi ngày
              </h2>
              <p className="mt-4 text-muted-foreground">
                Chúng tôi cam kết sử dụng 100% nghêu tươi sống, được nhập trực tiếp 
                từ các vùng biển sạch mỗi ngày. Mỗi bát cháo đều được nấu từ nguyên 
                liệu tươi ngon nhất.
              </p>
              <p className="mt-4 text-muted-foreground">
                Gạo được chọn lọc kỹ càng, nước dùng được hầm từ xương và nghêu 
                trong nhiều giờ để tạo nên hương vị đậm đà, thơm ngon đặc trưng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 3 */}
      <section className="py-16">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Công thức gia truyền
              </h2>
              <p className="mt-4 text-muted-foreground">
                Công thức nấu cháo nghêu của O Hoèn được truyền lại qua nhiều thế hệ, 
                kết hợp với những bí quyết riêng được nghiên cứu và hoàn thiện suốt 
                nhiều năm.
              </p>
              <p className="mt-4 text-muted-foreground">
                Chúng tôi tự hào khi giữ gìn được hương vị truyền thống, đồng thời 
                không ngừng cải tiến để phù hợp với khẩu vị hiện đại mà vẫn giữ 
                được cái hồn của món ăn.
              </p>
            </div>
            <div>
              <div className="aspect-video overflow-hidden rounded-lg border-4 border-primary/20">
                <img
                  src="/placeholder.svg"
                  alt="Công thức gia truyền"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold text-primary-foreground md:text-3xl">
            Giá trị cốt lõi
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-primary-foreground/10 p-6 text-center backdrop-blur">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground">
                <span className="text-3xl">🍲</span>
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">
                Chất lượng
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Cam kết sử dụng nguyên liệu tươi sống, chất lượng cao nhất
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-6 text-center backdrop-blur">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">
                Tận tâm
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Phục vụ khách hàng bằng cả trái tim và sự nhiệt huyết
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-6 text-center backdrop-blur">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">
                Uy tín
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Xây dựng thương hiệu bằng sự tin tưởng của khách hàng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-3xl">
            Hành trình phát triển
          </h2>
          <div className="mx-auto max-w-2xl">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2020
                  </div>
                  <div className="h-full w-0.5 bg-primary/30" />
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-foreground">Khởi đầu</h3>
                  <p className="text-sm text-muted-foreground">
                    Mở cửa hàng đầu tiên với mong muốn mang đến hương vị cháo nghêu 
                    truyền thống cho mọi người.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    2022
                  </div>
                  <div className="h-full w-0.5 bg-secondary/30" />
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-foreground">Mở rộng</h3>
                  <p className="text-sm text-muted-foreground">
                    Mở thêm chi nhánh thứ 2 và 3, nhận được sự yêu thương của 
                    hàng ngàn khách hàng.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2024
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Phát triển mạnh mẽ</h3>
                  <p className="text-sm text-muted-foreground">
                    Tiếp tục mở rộng hệ thống, phát triển nhượng quyền và mang 
                    hương vị O Hoèn đến nhiều nơi hơn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
