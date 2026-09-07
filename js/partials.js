// Shared Header, Mobile Menu overlay and Footer markup for all pages.
// Injected on DOMContentLoaded by main.js so the markup lives in one place only.

const NAV_LINKS = [
  { label: "Trang chủ", href: "index.html", key: "home" },
  { label: "Về chúng tôi", href: "about.html", key: "about" },
  { label: "Dịch vụ", href: "services.html", key: "services" },
  { label: "Khóa học", href: "services.html#education", key: "courses" },
  { label: "Tin tức", href: "#", key: "news" },
];

function renderHeader(active) {
  const navHtml = NAV_LINKS.map((n) => {
    const isActive = n.key === active;
    return `<a href="${n.href}" class="flex items-center justify-center px-4 py-2 text-sm ${isActive ? "text-[#0078c0] font-semibold" : "text-[#333] hover:text-[#0078c0]"} transition-colors">${n.label}</a>`;
  }).join("");

  return `
  <div class="w-full">
    <div class="flex items-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]">
      <a href="index.html" class="hidden md:flex items-center gap-2 bg-white border-b border-l border-[#d9d9d9] rounded-bl-2xl px-5 py-4 shrink-0" style="width:260px">
        <img src="assets/images/company-logo-71cdd965.png" alt="Daigakudoori" class="h-12 w-auto object-contain" />
        <span class="font-jp font-bold text-[19px] leading-none text-black">大学通り合同会社</span>
      </a>
      <a href="index.html" class="flex md:hidden items-center gap-2 bg-white px-4 py-3">
        <img src="assets/images/company-logo-71cdd965.png" alt="Daigakudoori" class="h-9 w-auto object-contain" />
        <span class="font-jp font-bold text-[14px] leading-none text-black">大学通り合同会社</span>
      </a>

      <div class="hidden md:flex flex-col flex-1 bg-white/95 border-b border-r border-[#d9d9d9] rounded-br-2xl overflow-hidden">
        <div class="flex items-center justify-end gap-4 px-4 py-2 border-b border-black/10 text-[12px] text-[#5a5964]">
          <span class="flex items-center gap-2"><img src="assets/images/icon-26bc27c9.svg" class="size-4" alt="" />+81 428-088-089</span>
          <span class="flex items-center gap-2"><img src="assets/images/icon1-744ee765.svg" class="size-4" alt="" />daigakudoori@gmail.com</span>
          <span class="flex items-center gap-2"><img src="assets/images/icon2-fa006205.svg" class="size-4" alt="" />Thứ 2 → Thứ 7: 9:00 → 18:00</span>
          <span class="w-px h-4 bg-[#d9d9d9]"></span>
          <span class="flex items-center gap-3">
            <img src="assets/images/facebook-e41917ed.svg" class="size-4" alt="Facebook" />
            <img src="assets/images/linked-in-67cca380.svg" class="size-4" alt="LinkedIn" />
            <img src="assets/images/zalo-icon1-100ec35a.png" class="size-[18px]" alt="Zalo" />
          </span>
          <span class="w-px h-4 bg-[#d9d9d9]"></span>
          <span class="flex items-center gap-2">
            <img src="assets/images/flag-pack-50de9cf5.svg" class="size-4" alt="VN" />
            <img src="assets/images/flag-pack1-bd03650b.svg" class="size-4" alt="JP" />
          </span>
        </div>
        <div class="flex items-center justify-between px-2 py-1">
          <nav class="flex items-center flex-1 justify-center">${navHtml}</nav>
          <div class="flex items-center gap-1 pr-1 shrink-0">
            <a href="#" class="flex items-center justify-center gap-1 bg-[#f5f5f5] border border-black/10 rounded text-[11px] text-[#5a5964] px-3 py-2 whitespace-nowrap">
              <img src="assets/images/svg-228ba6c6.svg" class="size-4" alt="" />Địa chỉ
            </a>
            <a href="#" class="flex items-center justify-center gap-1 bg-[#f5f5f5] border border-black/10 rounded text-[11px] text-[#5a5964] px-3 py-2 whitespace-nowrap">
              <img src="assets/images/svg1-403109a4.svg" class="size-4" alt="" />Biểu mẫu
            </a>
            <a href="#contact" class="flex items-center justify-center gap-1 bg-[#1570ef] rounded-tl rounded-tr rounded-br-2xl rounded-bl text-[12px] text-white px-4 py-3 whitespace-nowrap">
              <img src="assets/images/svg2-55ce1dc1.svg" class="size-4" alt="" />Liên hệ
            </a>
          </div>
        </div>
      </div>

      <button id="menu-open-btn" aria-label="Mở menu" class="flex md:hidden items-center justify-center bg-[#438cd8] text-white w-16 shrink-0 flex-col gap-1">
        <span class="flex flex-col gap-1.5">
          <span class="block w-6 h-0.5 bg-white"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </span>
        <span class="text-[10px] mt-1 tracking-wide">MENU</span>
      </button>
    </div>
  </div>`;
}

function renderMobileMenu() {
  const navHtml = NAV_LINKS.filter((n) => n.key !== "home")
    .map(
      (n) => `
      <div class="border-b border-white/30 py-5">
        <a href="${n.href}" class="flex items-center justify-between text-white text-base">
          <span>${n.label}</span>
          <span class="text-xl leading-none">+</span>
        </a>
      </div>`
    )
    .join("");

  return `
  <div id="mobile-menu" class="fixed inset-0 z-50 bg-gradient-to-br from-[#5b9fe0] to-[#3b7bc4] overflow-y-auto">
    <div class="flex justify-end p-6">
      <button id="menu-close-btn" aria-label="Đóng menu" class="text-white flex flex-col items-center gap-1">
        <span class="text-2xl leading-none">&times;</span>
        <span class="text-[11px] tracking-wide">MENU</span>
      </button>
    </div>
    <div class="px-6 pb-10 max-w-md mx-auto">
      <div class="mb-2">
        <p class="font-jp font-bold text-xl text-white leading-tight">大学通り合同会社</p>
        <p class="text-white/90 text-sm tracking-wide">DAIGAKUDOORI</p>
      </div>
      <div class="mt-2">${navHtml}</div>

      <div class="bg-white rounded-2xl p-5 mt-6 flex flex-col gap-4 text-sm">
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-2 text-[#333]"><img src="assets/images/icon-calendar-days-8b28dd23.svg" class="size-4" alt="" />Ngày khám</span>
          <span class="text-[#0078c0]">Thứ 2 - Thứ 7</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-2 text-[#333]"><img src="assets/images/icon-calendar-days-8b28dd23.svg" class="size-4" alt="" />Ngày nghỉ</span>
          <span class="text-[#5a5964] text-right">Chủ Nhật · Ngày lễ · Ngày quốc lễ</span>
        </div>
        <div>
          <span class="flex items-center gap-2 text-[#333]"><img src="assets/images/icon-clock3-0132b3b9.svg" class="size-4" alt="" />Giờ khám</span>
          <span class="text-[#5a5964] block mt-1">Ngày thường 9:00 ~ 18:00</span>
        </div>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <a href="services.html" class="bg-white text-[#0078c0] font-medium rounded-full py-3 text-center">Tìm hiểu Dịch vụ Y tế →</a>
        <a href="#contact" class="border border-white text-white font-medium rounded-full py-3 text-center">Liên hệ với Daigakudoori</a>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="bg-[#f8f8f8]">
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10">
      <div class="flex flex-col gap-5 max-w-sm">
        <a href="index.html" class="flex items-center gap-2">
          <img src="assets/images/company-logo-71cdd965.png" alt="Daigakudoori" class="h-10 w-auto object-contain" />
          <span class="font-jp font-bold text-base text-black">大学通り合同会社</span>
        </a>
        <div class="flex flex-col gap-4 text-[12.5px]">
          <div>
            <p class="font-semibold text-[#333] mb-1">TẠI NHẬT BẢN</p>
            <p class="text-[#5a5964] leading-relaxed">〒186-0003 Tokyo, Kunitachi, Fujimidai 2-15-9-201
              <a href="https://maps.google.com" target="_blank" rel="noopener" class="text-[#096fc8] underline">(Googlemap)</a>
            </p>
            <p class="text-[#5a5964] mt-1">Số điện thoại:
              <a href="tel:+81428088089" class="text-[#096fc8] underline">+(81)-42-808-8089</a> (đại diện Nhật Bản)<br />
              <a href="tel:+818040083911" class="text-[#096fc8] underline">+81-80-4008-3911</a> (Zalo, Viber, Line)
            </p>
          </div>
          <div>
            <p class="font-semibold text-[#333] mb-1">TẠI VIỆT NAM</p>
            <p class="text-[#5a5964] leading-relaxed">Phòng 2207, tòa nhà 34T phố Hoàng Đạo Thúy, Trung Hoà, Cầu Giấy
              <a href="https://maps.google.com" target="_blank" rel="noopener" class="text-[#096fc8] underline">(Googlemap)</a>
            </p>
            <p class="text-[#5a5964] mt-1">Số điện thoại:
              <a href="tel:+84932893951" class="text-[#096fc8] underline">+(84)-09-3289-395</a> (Ms.Trang)
            </p>
          </div>
          <p class="text-[#5a5964]">*Vui lòng liên hệ trước qua điện thoại</p>
        </div>
        <div>
          <p class="text-[#5a5964] text-xs mb-2">Theo dõi chúng tôi tại:</p>
          <div class="flex items-center gap-2">
            <img src="assets/images/group-8b137e9d.svg" alt="Facebook" class="size-6" />
            <img src="assets/images/image2-000c8819.png" alt="LinkedIn" class="size-6 object-cover" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        <ul class="divide-y divide-[#d9d9d9]">
          <li><a href="services.html" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Tư vấn liên quan đến Y tế</a></li>
          <li><a href="services.html" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Điều phối lịch khám bệnh và điều trị</a></li>
          <li><a href="services.html" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Biên, phiên dịch Y tế</a></li>
          <li><a href="services.html" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Cấp thư bảo lãnh Y tế</a></li>
        </ul>
        <ul class="divide-y divide-[#d9d9d9]">
          <li><a href="services.html" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Dịch vụ y tế</a></li>
          <li><a href="services.html#education" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Khóa học</a></li>
          <li><a href="about.html" class="flex justify-between py-4 text-sm text-[#5a5964] hover:text-[#096fc8]">Thông tin doanh nghiệp</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-black/10 bg-white">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-[#5a5964]">
        <div class="flex items-center gap-2">
          <a href="#" class="hover:text-[#096fc8]">Chính sách bảo mật</a>
          <span>/</span>
          <a href="#" class="hover:text-[#096fc8]">Điều khoản & Điều kiện</a>
        </div>
        <p>Copyright © 2019 daigakudoori All Rights Reserved.</p>
      </div>
    </div>
  </footer>`;
}
