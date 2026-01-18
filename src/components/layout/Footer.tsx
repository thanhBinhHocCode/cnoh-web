import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <span className="text-lg font-bold text-primary">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Cháo Nghêu
                </span>
                <span className="text-sm font-semibold leading-tight opacity-90">
                  O Hoèn
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-90">
              Đậm đà hương vị truyền thống. Mang đến cho bạn những bát cháo nghêu 
              thơm ngon, đậm đà nhất.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/thuc-don" className="opacity-90 transition-opacity hover:opacity-100">
                  Thực đơn
                </Link>
              </li>
              <li>
                <Link to="/ve-o-hoen" className="opacity-90 transition-opacity hover:opacity-100">
                  Về O Hoèn
                </Link>
              </li>
              <li>
                <Link to="/dat-mon" className="opacity-90 transition-opacity hover:opacity-100">
                  Đặt món
                </Link>
              </li>
              <li>
                <Link to="/cua-hang" className="opacity-90 transition-opacity hover:opacity-100">
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/tuyen-dung" className="opacity-90 transition-opacity hover:opacity-100">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to="/nhuong-quyen" className="opacity-90 transition-opacity hover:opacity-100">
                  Liên hệ nhượng quyền
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1900 xxxx xx</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>lienhe@chaongheuohoen.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>Số XX, Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theo dõi chúng tôi</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform hover:scale-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform hover:scale-110"
              >
                <span className="text-xs font-bold">Zalo</span>
              </a>
            </div>
            <p className="text-sm opacity-90">
              Giờ mở cửa: 6:00 - 22:00 hàng ngày
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 Cháo Nghêu O Hoèn. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
