import { Metadata } from "next";

export const metadata: Metadata = {
  title: "trang about",
};

export default function AboutPage() {
  return (
    <div className="max-w-prose m-auto space-y-3">
      <h1 className="text-3xl text-center font-bold">About</h1>
      <p>
      Naruto[a] là một loạt manga Nhật Bản được viết và minh họa bởi Kishimoto Masashi. Manga được đăng lần đầu trên tạp chí Weekly Shonen Jump từ tháng 9 năm 1999 đến tháng 11 năm 2014, và sau đó được Shueisha phát hành thành 72 tập tankōbon. Câu chuyện xoay quanh Uzumaki Naruto, một ninja trẻ muốn tìm cách khẳng định mình để được mọi người công nhận và nuôi ước mơ trở thành Hokage - người lãnh đạo Làng Lá. Cốt truyện được chia làm hai phần – phần đầu lấy bối cảnh vài năm trước tuổi thiếu niên (Naruto Dattebayo) và phần thứ hai là ở tuổi thiếu niên của Naruto (Naruto Shippuden). Series dựa trên hai Yomikiri của Kishimoto: Karakuri (1995), đã giúp Kishimoto đạt danh hiệu Hop Step Award hàng tháng của Shueisha ở những năm tiếp theo, và Naruto (1997).
      </p>
    </div>
  );
}
