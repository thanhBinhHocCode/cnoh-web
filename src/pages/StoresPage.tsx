import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

// Store locations - replace with actual data
const stores = [
  {
    id: 1,
    name: "Cháo Nghêu O Hoèn - Chi nhánh 1",
    address: "Số 08, Đường An Thượng 37, Quận Ngũ Hành Sơn, TP.Đà Nẵng",
    phone: "096 756 44 41",
    hours: "6:00 - 22:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2846819293454!2d108.24235331020901!3d16.05071033987031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217f0c8c65afb%3A0x9650b93284914a39!2zQ2jDoW8gbmdow6p1IE8gSG_DqG4!5e0!3m2!1svi!2s!4v1768751827308!5m2!1svi!2s",
  },
  {
    id: 2,
    name: "Cháo Nghêu O Hoèn - Chi nhánh 2",
    address: "Số 152, Đường Triệu Nữ Vương, Quận Hải Châu, TP.Đà Nẵng",
    phone: "096 756 44 41",
    hours: "6:00 - 22:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0616283782506!2d108.2141235102092!3d16.062291439560486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142191a81e19441%3A0x8a22f708db59d71a!2zQ2jDoW8gbmdow6p1IE8gSG_DqG4gLSAxNTIgVHJp4buHdSBO4buvIFbGsMahbmc!5e0!3m2!1svi!2s!4v1768752032408!5m2!1svi!2s",
  },
  {
    id: 3,
    name: "Cháo Nghêu O Hoèn - Chi nhánh 3",
    address: "Số 87, Đường Lê Thanh Nghị, Quận Hải Châu, TP.Đà Nắng",
    phone: "096 756 44 41",
    hours: "6:00 - 22:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4627352725297!2d108.2153050102087!3d16.041459840117604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142197dab3c19b7%3A0x2847ed3d3a0af2e!2zQ2jDoW8gbmdow6p1IE8gSG_DqG4gLSA4NyBMw6ogVGhhbmggTmdo4buL!5e0!3m2!1svi!2s!4v1768752125591!5m2!1svi!2s",
  },
];

export default function StoresPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Hệ Thống Cửa Hàng
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Tìm cửa hàng Cháo Nghêu O Hoèn gần bạn nhất
          </p>
        </div>
      </section>

      {/* Store List */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {stores.map((store, index) => (
              <Card
                key={store.id}
                className="overflow-hidden border-2 border-border"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Store Info */}
                  <CardContent className={`p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h2 className="text-xl font-bold text-primary md:text-2xl">
                      {store.name}
                    </h2>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Địa chỉ</p>
                          <p className="text-muted-foreground">{store.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Điện thoại</p>
                          <a
                            href={`tel:${store.phone.replace(/\s/g, '')}`}
                            className="text-secondary hover:underline"
                          >
                            {store.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Giờ mở cửa</p>
                          <p className="text-muted-foreground">{store.hours}</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      <MapPin className="h-4 w-4" />
                      Xem trên Google Maps
                    </a>
                  </CardContent>
                  
                  {/* Map */}
                  <div className={`aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <iframe
                      src={store.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '300px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Bản đồ ${store.name}`}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-12">
        <div className="container text-center">
          <p className="text-muted-foreground">
            Không tìm thấy cửa hàng gần bạn? Đừng lo, hãy đặt món online!
          </p>
          <a
            href="/dat-mon"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            Đặt món ngay
          </a>
        </div>
      </section>
    </Layout>
  );
}
