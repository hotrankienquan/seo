import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blog cho người yêu thích naruto - kiqi",
    template: "%s - Blog cho người yêu thích naruto - kiqi",
  },
  description: "Đàm đạo về naruto phim ở đây Truyện lấy bối cảnh bắt nguồn từ sự việc xảy ra vào mười hai năm trước, con Hồ Ly Chín Đuôi (Kyuubi-Kurama[2]) đã tấn công Làng Lá (木ノ葉隠れ (Mộc Diệp Ẩn Lý) Konohagakure / Konohagakure no Sato?). Với lượng sức mạnh khổng lồ, nó có thể dễ dàng khiến sóng thần nổi dậy và san bằng núi non chỉ với một trong số chín cái đuôi, nó đã gây ra sự hỗn loạn tột cùng và giết chết nhiều người, cho tới khi người lãnh đạo của làng Lá – ngài Hokage Đệ Tứ (Namikaze Minato) đã hi sinh để phong ấn con quái thú vào cơ thể con trai mình - Naruto khi cậu chỉ vừa mới được sinh ra, bằng cấm thuật: Kin Jutsu Ogi 'Shiki Fuin' (Thi Quỷ Phong Tận - một thuật cấm phải đánh đổi bằng tính mạng). Hokage Đệ Tứ, người được vinh danh vì đã phong ấn con yêu hồ, khi nhắm mắt xuôi tay đã mong muốn Naruto được người dân tôn trọng khi có thân xác là nơi chứa đựng con quái vật.",
  twitter: {
    card: "summary_large_image",
    description:"Hokage Đệ Tứ, người được vinh danh vì đã phong ấn con yêu hồ, khi nhắm mắt xuôi tay đã mong muốn Naruto được người dân tôn trọng khi có thân xác là nơi chứa đựng con quái vật."
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Image /> */}
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
