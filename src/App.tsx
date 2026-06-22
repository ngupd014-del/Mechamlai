import React, { useState, useEffect } from 'react';
import { 
  Lock, Hourglass, ShieldCheck, Star, Zap, Eye, HeartPulse, 
  MessageCircle, CheckCircle2, Table, Feather, Headphones, 
  ArrowDown, ChevronRight, XCircle, Heart, ChevronDown, 
  Info, Mail, Facebook, Youtube, ShieldAlert
} from 'lucide-react';

export default function App() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathText, setBreathText] = useState("Bấm để thở");
  const [breathSubText, setBreathSubText] = useState("");
  const [breathScale, setBreathScale] = useState("scale(1)");
  const [breathBg, setBreathBg] = useState("rgba(92, 111, 90, 0.1)");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  
  const [countdown, setCountdown] = useState("");

  // Breathing widget logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isBreathing) {
      let seconds = 0;
      interval = setInterval(() => {
        const cycleSec = seconds % 12;
        
        if (cycleSec < 4) {
            setBreathScale(`scale(${1 + (cycleSec / 4) * 0.18})`);
            setBreathBg("rgba(92, 111, 90, 0.25)");
            setBreathText("Hít vào...");
            setBreathSubText("Hít sâu bằng mũi, phình bụng nhẹ");
        } else if (cycleSec < 8) {
            setBreathScale("scale(1.18)");
            setBreathBg("rgba(92, 111, 90, 0.2)");
            setBreathText("Giữ hơi");
            setBreathSubText("Giữ sự yên lặng trong cơ thể");
        } else {
            const shrinkFactor = (12 - cycleSec) / 4;
            setBreathScale(`scale(${1 + shrinkFactor * 0.18})`);
            setBreathBg("rgba(212, 129, 96, 0.15)");
            setBreathText("Thở ra...");
            setBreathSubText("Thở sạch hết phiền muộn qua miệng");
        }
        seconds++;
      }, 1000);
    } else {
      setBreathScale("scale(1)");
      setBreathBg("rgba(92, 111, 90, 0.1)");
      setBreathText("Bấm để thở");
      setBreathSubText("");
    }
    
    return () => clearInterval(interval);
  }, [isBreathing]);

  // Countdown timer
  useEffect(() => {
    const countdownDate = new Date("July 4, 2026 23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("ĐÃ ĐÓNG ĐĂNG KÝ BẢN BETA");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown(`${days} ngày ${hours} giờ ${minutes} phút`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const emailInput = document.getElementById('parentEmail') as HTMLInputElement;
    if (emailInput) setRegisteredEmail(emailInput.value);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const toggleFaq = (idx: number) => {
    if (activeFaq === idx) setActiveFaq(null);
    else setActiveFaq(idx);
  };

  return (
    <div className="bg-cream-50 text-charcoal font-sans selection:bg-sage-200 selection:text-sage-800">
      <nav className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-sage-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <a href="#" className="font-serif text-2xl font-bold text-sage-700 tracking-tight flex items-center gap-2">
                  Mẹ Chậm Lại<span className="w-1.5 h-1.5 rounded-full bg-terracotta-400"></span>
              </a>
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-sage-700">
                  <a href="#lo-khoan" className="hover:text-terracotta-500 transition">Vòng Lặp</a>
                  <a href="#khoang-lang" className="hover:text-terracotta-500 transition">Một Khoảng Dừng</a>
                  <a href="#lo-trinh" className="hover:text-terracotta-500 transition">Hành Trình 4 Tuần</a>
                  <a href="#nguoi-dong-hanh" className="hover:text-terracotta-500 transition">Người Đồng Hành</a>
                  <a href="#faq" className="hover:text-terracotta-500 transition">FAQ</a>
              </div>
              <a href="#dang-ky" className="bg-sage-600 hover:bg-sage-700 text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full transition duration-300 transform hover:-translate-y-0.5 premium-shadow">
                  Đăng Ký Beta (299k)
              </a>
          </div>
      </nav>

      <header className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-12 pb-20 md:py-24">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-sage-100/40 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-terracotta-400/5 blur-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Content */}
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                          <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-pulse"></span>
                          Mở Đăng Ký Bản Thử Nghiệm (Beta)
                      </div>
                      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.15] tracking-tight">
                          Dừng lại một nhịp,<br />
                          <span className="text-sage-600 italic font-normal">để thương con trọn vẹn.</span>
                      </h1>
                      <p className="text-base md:text-lg text-sage-700 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                          Hành trình 4 tuần qua email, audio và worksheet thực hành riêng tư. Giúp mẹ có con 2–6 tuổi nhận diện vòng lặp quát mắng, hiểu tín hiệu phía sau hành vi của con và thực hành một cách phản ứng mới mỗi tuần.
                      </p>
                      
                      {/* Highlights & Trust Elements */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                          <a href="#dang-ky" className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-base px-8 py-4 rounded-xl transition duration-300 transform hover:-translate-y-1 premium-shadow text-center">
                              Nhận 1 Suất Beta Ngay
                          </a>
                          <a href="#lo-trinh" className="border border-sage-600/30 text-sage-700 hover:bg-sage-100/50 font-medium px-8 py-4 rounded-xl transition text-center">
                              Khám phá lộ trình
                          </a>
                      </div>

                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 pt-4 text-xs text-sage-600 border-t border-sage-200/60 max-w-md mx-auto lg:mx-0">
                          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-terracotta-400" /> Hoàn toàn riêng tư</span>
                          <span className="flex items-center gap-1.5"><Hourglass className="w-3.5 h-3.5 text-terracotta-400" /> Chỉ cần 20 phút mỗi tuần</span>
                          <span className="flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5 text-terracotta-400" /> Không phán xét</span>
                      </div>
                  </div>

                  {/* Hero Image Display */}
                  <div className="lg:col-span-5 relative">
                      <div className="relative z-10 rounded-2xl overflow-hidden premium-shadow bg-[#CCD3C9] border-4 border-white h-[320px] md:h-[450px] flex items-center justify-center">
                          <h2 className="font-serif text-[42px] lg:text-[54px] text-[#556956] font-semibold tracking-tight relative z-10 select-none">
                              Mẹ Chậm Lại
                          </h2>
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
                          <div className="absolute bottom-6 right-8 text-white/90 italic font-serif text-[17px] opacity-80 select-none text-right">
                              "Cơn giận không bắt đầu từ con, nó bắt đầu từ sự quá tải chưa được gọi tên của mẹ."
                          </div>
                      </div>
                      <div className="absolute -bottom-6 -left-6 bg-cream-100 border border-sage-200/80 p-4 rounded-xl max-w-[240px] premium-shadow hidden sm:block z-20">
                          <div className="flex gap-1.5 text-terracotta-400 mb-1">
                              <Star className="fill-current w-3.5 h-3.5" />
                              <Star className="fill-current w-3.5 h-3.5" />
                              <Star className="fill-current w-3.5 h-3.5" />
                              <Star className="fill-current w-3.5 h-3.5" />
                              <Star className="fill-current w-3.5 h-3.5" />
                          </div>
                          <p className="text-xs text-charcoal italic leading-relaxed">"Nghe xong tập audio đầu tiên, mình nhận ra điều mình cần không phải là mẹo phạt con, mà là khoảng dừng cho chính mình."</p>
                          <span className="block text-[10px] text-sage-600 mt-2 font-semibold">— Mẹ Hà My (Bé Kem, 3 tuổi)</span>
                      </div>
                  </div>

              </div>
          </div>
      </header>

      <section id="lo-khoan" className="py-20 bg-white border-t border-sage-100">
          <div className="max-w-4xl mx-auto px-6">
              <div className="text-center space-y-4 mb-16">
                  <span className="text-terracotta-500 font-semibold text-xs tracking-widest uppercase">Nhận diện thực tế</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                      Vòng lặp mà dường như mẹ nào có con 2-6 tuổi cũng đang đi qua...
                  </h2>
                  <div className="w-16 h-0.5 bg-sage-200 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                      <p className="text-sage-700 leading-relaxed font-light">
                          Con ăn vạ ngay giữa siêu thị, nằm rạp ra sàn la hét. Con không hợp tác lúc mặc đồ đi học, đẩy bát cơm từ chối ăn, bám chặt lấy mẹ không rời nửa bước hoặc giật đồ chơi rồi cào cấu bạn bè...
                      </p>
                      
                      <div className="p-6 bg-sage-50 rounded-2xl border-l-4 border-sage-600">
                          <p className="text-charcoal font-medium italic text-sm leading-relaxed">
                              "Bạn biết lý thuyết là phải bình tĩnh, phải thủ thỉ tâm sự. Nhưng khi tiếng khóc thét vang lên liên tục, cơ thể bạn dường như phản ứng trước cả khi lý trí kịp can thiệp. Bạn quát mắng."
                          </p>
                      </div>

                      <p className="text-sage-700 leading-relaxed font-light">
                          Sau tiếng quát là một khoảng lặng đầy sợ hãi của con, và sau đó là một <span className="font-semibold text-terracotta-500">cơn bão tội lỗi dội ngược vào lòng mẹ</span>. Bạn tự trách mình tồi tệ, tự hứa ngày mai sẽ khác. Nhưng ngày mai, vòng lặp ấy lại bắt đầu.
                      </p>
                  </div>

                  <div className="bg-cream-50 p-8 rounded-2xl border border-sage-100 premium-shadow space-y-6">
                      <h3 className="font-serif text-lg font-bold text-sage-700 flex items-center gap-2">
                          <Zap className="text-terracotta-400 w-5 h-5 fill-current" /> Những "ngòi nổ" quen thuộc của con:
                      </h3>
                      
                      <div className="space-y-3">
                          <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-sage-100">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center text-xs font-semibold">1</span>
                              <div>
                                  <h4 className="text-sm font-semibold text-charcoal">Hành vi chống đối trực diện</h4>
                                  <p className="text-xs text-sage-600 mt-1">Con hét "Không!", ném đồ chơi, đẩy bát cơm từ chối ăn dứt khoát.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-sage-100">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center text-xs font-semibold">2</span>
                              <div>
                                  <h4 className="text-sm font-semibold text-charcoal">Khủng hoảng ăn vạ kéo dài</h4>
                                  <p className="text-xs text-sage-600 mt-1">Nằm lì ra sàn khóc ròng rã 30 phút vì một lý do rất nhỏ (như gãy bánh quy).</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-sage-100">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center text-xs font-semibold">3</span>
                              <div>
                                  <h4 className="text-sm font-semibold text-charcoal">Bám mẹ & khóc nhè liên tục</h4>
                                  <p className="text-xs text-sage-600 mt-1">Không rời mẹ nửa bước khi mẹ cần làm việc, nói bằng tông giọng mè nheo mệt mỏi.</p>
                              </div>
                          </div>
                      </div>

                      <div className="pt-2 text-center">
                          <span className="text-xs text-sage-600 italic">Mẹ có thấy hình bóng mình và con ở đây không?</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="khoang-lang" className="py-24 bg-cream-100 border-t border-b border-sage-100/60 relative overflow-hidden">
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-sage-200/30 text-[200px] pointer-events-none select-none font-serif">
              🌿
          </div>
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8 relative z-10">
              <span className="text-terracotta-500 font-semibold text-xs tracking-widest uppercase">Thông điệp gửi mẹ</span>
              
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 leading-relaxed italic">
                  "Đã đến lúc mẹ không chỉ cố làm đúng."
              </h3>
              
              <p className="text-lg md:text-xl text-sage-700 font-light leading-relaxed max-w-2xl mx-auto">
                  Mẹ cũng cần được nhìn thấy, được thở ra, được có một khoảng dừng trước khi bước vào vòng lặp cũ. Vì nuôi dạy con không bắt đầu từ việc mẹ hoàn hảo hơn, mà từ khoảnh khắc mẹ nhận ra mình có thể chọn một phản ứng khác.
              </p>

              <div className="w-12 h-1 bg-terracotta-400 mx-auto rounded-full"></div>
          </div>
      </section>

      <section className="py-20 bg-cream-50 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-sage-200/20 rounded-full blur-2xl"></div>
          
          <div className="max-w-5xl mx-auto px-6">
              <div className="text-center space-y-4 mb-16">
                  <span className="text-sage-600 font-semibold text-xs tracking-widest uppercase">Triết lý của tôi</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                      Mục tiêu không phải là gửi thật nhiều thông tin,<br className="hidden md:block" />
                      mà là giúp mẹ nhìn lại, gọi tên và thử một phản ứng khác.
                  </h2>
                  <p className="text-sm text-sage-600 max-w-2xl mx-auto font-light leading-relaxed">
                      Trong bản thử nghiệm Beta này, mục tiêu của tôi không phải là gửi thật nhiều thông tin gây thêm áp lực cho mẹ. Mục tiêu duy nhất là giúp mẹ nhìn lại một tình huống quen thuộc trong tuần, gọi tên điều đang diễn ra bên trong mình, rồi thử một phản ứng nhỏ khác đi với con.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-sage-100 premium-shadow space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center text-xl">
                          <Eye className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-charcoal">Gọi tên điều đang diễn ra</h3>
                      <p className="text-xs text-sage-600 leading-relaxed font-light">
                          Không dừng lại ở việc khuyên "mẹ hãy nhịn giận". Tôi giúp mẹ tìm thấy gốc rễ: Sự mệt mỏi thể xác, áp lực cuộc sống hay một kỳ vọng vô hình nào đang châm ngòi cho cơn giận ấy?
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-sage-100 premium-shadow space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center text-xl">
                          <HeartPulse className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-charcoal">Tạo một khoảng dừng nhỏ</h3>
                      <p className="text-xs text-sage-600 leading-relaxed font-light">
                          Nhận diện khoảnh khắc cơ thể bắt đầu "nóng lên" (tim đập nhanh, thở nông) trước khi bùng nổ, để mẹ kích hoạt cơ chế tự vệ dịu dàng, trì hoãn phản ứng quát mắng tự động.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-sage-100 premium-shadow space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center text-xl">
                          <MessageCircle className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-charcoal">Thực hành phản ứng mới</h3>
                      <p className="text-xs text-sage-600 leading-relaxed font-light">
                          Thay thế những mẫu câu kích hoạt trạng thái phòng thủ của con bằng cách công nhận cảm xúc của bé trước, sau đó thiết lập ranh giới rõ ràng mà không cần lớn tiếng.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section id="lo-trinh" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
              <div className="text-center space-y-4 mb-12">
                  <span className="text-terracotta-500 font-semibold text-xs tracking-widest uppercase">Hành trình chi tiết</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                      4 tuần kiến tạo sự thay đổi thầm lặng
                  </h2>
                  <p className="text-sm text-sage-600 max-w-md mx-auto">
                      Mỗi tuần bạn chỉ cần dành 20-30 phút riêng tư để lắng nghe, thấu cảm và điền vào bản ghi chép cá nhân.
                  </p>
              </div>

              <div className="bg-cream-50 rounded-2xl border border-sage-100 premium-shadow overflow-hidden">
                  <div className="flex border-b border-sage-100 overflow-x-auto no-scrollbar">
                      {[1, 2, 3, 4].map((num) => (
                          <button 
                              key={num}
                              onClick={() => setActiveWeek(num)}
                              className={`flex-1 min-w-[120px] py-4 px-6 text-center text-sm transition ${
                                  activeWeek === num 
                                  ? 'font-semibold border-b-2 border-sage-600 text-sage-700' 
                                  : 'font-medium border-b-2 border-transparent text-sage-600 hover:text-sage-800'
                              }`}
                          >
                              Tuần {num}: {num === 1 ? 'Khó Chịu' : num === 2 ? 'Mất Kiên Nhẫn' : num === 3 ? 'Không Công Bằng' : 'Tích Hợp'}
                          </button>
                      ))}
                  </div>

                  <div className="p-8 md:p-12 min-h-[350px] flex flex-col justify-between">
                      {activeWeek === 1 && (
                          <div className="space-y-6 transition-opacity duration-300 opacity-100">
                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                  <div>
                                      <span className="text-xs text-terracotta-500 font-semibold uppercase tracking-wider">Tuần 1 — Tập trung vào Mẹ</span>
                                      <h3 className="font-serif text-2xl font-bold text-charcoal mt-1">Khi mẹ khó chịu</h3>
                                  </div>
                                  <span className="bg-sage-100 text-sage-800 text-xs px-3 py-1 rounded-full font-medium">Bắt đầu từ ngày 06/07/2026</span>
                              </div>
                              <p className="text-sm text-sage-700 leading-relaxed max-w-3xl font-light">
                                  Trong tuần đầu tiên, chúng ta sẽ tạm gác hành vi của con sang một bên để nhìn lại chính mình. Phần lớn cơn giận bộc phát không đến từ lỗi của trẻ, mà đến từ sự tích tụ của những đêm thiếu ngủ kéo dài, cơ thể kiệt sức, áp lực kỳ vọng hoàn hảo hay đơn giản là một nhu cầu cơ bản chưa được đáp ứng mà mẹ chưa thể gọi tên.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-sage-100">
                                  <div className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                      <span className="text-xs text-sage-700">Hiểu rõ cơ chế "kích hoạt" của hệ thần kinh khi kiệt sức.</span>
                                  </div>
                                  <div className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                      <span className="text-xs text-sage-700">Bài tập gọi tên nhu cầu ẩn giấu (Mẹ đang thực sự thèm khát điều gì?).</span>
                                  </div>
                              </div>
                          </div>
                      )}

                      {activeWeek === 2 && (
                          <div className="space-y-6 transition-opacity duration-300 opacity-100">
                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                  <div>
                                      <span className="text-xs text-terracotta-500 font-semibold uppercase tracking-wider">Tuần 2 — Tạo khoảng thở</span>
                                      <h3 className="font-serif text-2xl font-bold text-charcoal mt-1">Khi mẹ mất kiên nhẫn</h3>
                                  </div>
                                  <span className="bg-sage-100 text-sage-800 text-xs px-3 py-1 rounded-full font-medium">Bắt đầu từ ngày 13/07/2026</span>
                              </div>
                              <p className="text-sm text-sage-700 leading-relaxed max-w-3xl font-light">
                                  Chúng ta sẽ học cách làm chậm lại khoảnh khắc ngay trước khi tiếng hét bộc phát. Khi con khóc, cơ thể mẹ lập tiếp phát đi tín hiệu căng thẳng (siết chặt tay, nghẹn cổ họng). Tuần này, mẹ sẽ học cách nhận diện sớm những tín hiệu sinh lý đó để chủ động tạo một khoảng dừng nhỏ (Nhịp 3 bước) trước khi phản ứng tự động kích hoạt.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-sage-100">
                                  <div className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                      <span className="text-xs text-sage-700">Công cụ "Nhịp 3 bước" làm dịu hệ thần kinh trong 5 giây.</span>
                                  </div>
                                  <div className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                      <span className="text-xs text-sage-700">Cách thiết lập "nút ngắt kết nối tạm thời" an toàn trước mặt trẻ.</span>
                                  </div>
                              </div>
                          </div>
                      )}

                      {activeWeek === 3 && (
                           <div className="space-y-6 transition-opacity duration-300 opacity-100">
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                   <div>
                                       <span className="text-xs text-terracotta-500 font-semibold uppercase tracking-wider">Tuần 3 — Ranh giới nhẹ nhàng</span>
                                       <h3 className="font-serif text-2xl font-bold text-charcoal mt-1">Khi mẹ thấy "không công bằng"</h3>
                                   </div>
                                   <span className="bg-sage-100 text-sage-800 text-xs px-3 py-1 rounded-full font-medium">Bắt đầu từ ngày 20/07/2026</span>
                               </div>
                               <p className="text-sm text-sage-700 leading-relaxed max-w-3xl font-light">
                                   Khi con liên tục mè nheo đòi đồ chơi mới, hoặc khóc ăn vạ tranh phần, mẹ thường có cảm giác bị đòi hỏi thái quá và thấy bất công. Tuần này, mẹ học cách nhìn thấu nhu cầu thực của con phía sau lớp vỏ ăn vạ, đồng thời thiết lập ranh giới rõ ràng một cách dịu dàng mà hoàn toàn không cần quát mắng hay nhân nhượng vô lý.
                               </p>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-sage-100">
                                   <div className="flex items-start gap-2.5">
                                       <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                       <span className="text-xs text-sage-700">Mẫu câu thay thế giúp xoa dịu phản ứng chống đối của trẻ.</span>
                                   </div>
                                   <div className="flex items-start gap-2.5">
                                       <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                       <span className="text-xs text-sage-700">Phương pháp thiết lập ranh giới "Dịu dàng nhưng Cương quyết".</span>
                                   </div>
                               </div>
                           </div>
                      )}

                      {activeWeek === 4 && (
                           <div className="space-y-6 transition-opacity duration-300 opacity-100">
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                   <div>
                                       <span className="text-xs text-terracotta-500 font-semibold uppercase tracking-wider">Tuần 4 — Tích hợp & Đồng hành</span>
                                       <h3 className="font-serif text-2xl font-bold text-charcoal mt-1">Hành trình dài lâu</h3>
                                   </div>
                                   <span className="bg-sage-100 text-sage-800 text-xs px-3 py-1 rounded-full font-medium">Bắt đầu từ ngày 27/07/2026</span>
                               </div>
                               <p className="text-sm text-sage-700 leading-relaxed max-w-3xl font-light">
                                   Một tháng trôi qua không biến bạn thành người mẹ hoàn hảo không bao giờ cáu giận. Tuần cuối cùng được thiết kế để mẹ tích hợp toàn bộ kỹ năng đã học, biết cách tự tha thứ khi lỡ mất bình tĩnh lại, và duy trì năng lượng bình an này một cách bền vững nhất trong gia đình mà không cảm thấy cô độc.
                               </p>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-sage-100">
                                   <div className="flex items-start gap-2.5">
                                       <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                       <span className="text-xs text-sage-700">Sổ tay cứu trợ khẩn cấp cho những ngày giông bão.</span>
                                   </div>
                                   <div className="flex items-start gap-2.5">
                                       <CheckCircle2 className="w-4 h-4 text-sage-600 mt-1 flex-shrink-0" />
                                       <span className="text-xs text-sage-700">Học cách kết nối lại với con (Repair) sau những lần lỡ quát mắng.</span>
                                   </div>
                               </div>
                           </div>
                      )}
                  </div>
              </div>
          </div>
      </section>

      <section id="cong-cu" className="py-20 bg-cream-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
              <div className="text-center space-y-4 mb-16">
                  <span className="text-sage-600 font-semibold text-xs tracking-widest uppercase">Các công cụ thực chiến</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                      Đồng hành nhẹ nhàng, tinh gọn mỗi tuần
                  </h2>
                  <p className="text-sm text-sage-600 max-w-md mx-auto">
                      Không tạo thêm áp lực đọc sách dày cộp. Toàn bộ tài liệu được thiết kế tối giản, dễ tiếp nhận và dễ thực hành.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                      <div className="bg-white p-6 rounded-xl border border-sage-100 flex gap-4 premium-shadow">
                          <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center text-lg flex-shrink-0">
                              <Table className="w-5 h-5" />
                          </div>
                          <div>
                              <h3 className="font-bold text-charcoal text-sm">Bảng quan sát cảm xúc</h3>
                              <p className="text-xs text-sage-600 mt-1">Ghi lại nhanh: Tình huống – Cảm xúc – Suy nghĩ – Phản ứng của mẹ. Để mẹ nhìn thấy sợi chỉ đỏ của thói quen thay vì tự trách móc "mình lại mất bình tĩnh".</p>
                          </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-sage-100 flex gap-4 premium-shadow">
                          <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center text-lg flex-shrink-0">
                              <Feather className="w-5 h-5" />
                          </div>
                          <div>
                              <h3 className="font-bold text-charcoal text-sm">Worksheet Thay Câu Nói</h3>
                              <p className="text-xs text-sage-600 mt-1">Thay thế những câu dễ làm con phòng thủ bằng câu nói công nhận cảm xúc và đặt ranh giới rõ ràng hơn.</p>
                          </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-sage-100 flex gap-4 premium-shadow">
                          <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center text-lg flex-shrink-0">
                              <Headphones className="w-5 h-5" />
                          </div>
                          <div>
                              <h3 className="font-bold text-charcoal text-sm">Audio Ngắn Vỗ Về (5-8 phút)</h3>
                              <p className="text-xs text-sage-600 mt-1">Thiết kế ở định dạng nén tinh gọn, để mẹ nghe lúc rửa bát, dọn dẹp hoặc tranh thủ 5 phút nghỉ ngơi nơi văn phòng.</p>
                          </div>
                      </div>
                  </div>

                  <div className="lg:col-span-7 bg-white rounded-2xl border border-sage-200/80 p-8 premium-shadow relative">
                      <div className="border border-sage-100 rounded-xl p-6 bg-cream-50/50 space-y-4">
                          <div className="flex justify-between items-center border-b border-sage-100 pb-3">
                              <span className="text-xs font-semibold text-sage-700">WORKSHEET THỰC HÀNH TUẦN 3</span>
                              <span className="text-[10px] bg-terracotta-400 text-white px-2 py-0.5 rounded">Mẫu thực tế</span>
                          </div>
                          
                          <div className="space-y-3">
                              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                  <span className="text-[10px] font-bold text-red-500 uppercase">Phản ứng cũ (Quen thuộc):</span>
                                  <p className="text-xs text-charcoal font-medium mt-1">"Mẹ mệt mỏi lắm rồi! Đừng có mè nheo khóc lóc nữa, im lặng ngay cho mẹ!"</p>
                              </div>
                              <div className="flex justify-center text-sage-400 my-1">
                                  <ArrowDown className="w-4 h-4" />
                              </div>
                              <div className="p-3 bg-sage-100/60 rounded-lg border border-sage-200">
                                  <span className="text-[10px] font-bold text-sage-700 uppercase">Thay thế bằng (Chậm Lại):</span>
                                  <p className="text-xs text-charcoal font-medium mt-1">"Mẹ biết con đang rất thèm món đồ chơi này và con thấy buồn vì không được mua. Nhưng ranh giới hôm nay là chúng ta chỉ ngắm thôi con nhé. Mẹ ở đây ôm con đợi con bình tĩnh."</p>
                              </div>
                          </div>
                          
                          <div className="pt-2 flex justify-between items-center text-[11px] text-sage-600">
                              <span>✓ Con cảm nhận được sự thấu hiểu</span>
                              <span>✓ Ranh giới được bảo vệ nghiêm ngặt</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
              <div className="text-center space-y-4 mb-16">
                  <span className="text-terracotta-500 font-semibold text-xs tracking-widest uppercase">Phù hợp hay không?</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                      Đây có phải là hành trình dành cho bạn?
                  </h2>
                  <div className="w-16 h-0.5 bg-sage-200 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-sage-200 rounded-2xl p-8 bg-sage-50/50 space-y-6">
                      <h3 className="font-serif text-xl font-bold text-sage-700 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-sage-600" /> Bạn nên tham gia nếu:
                      </h3>
                      <ul className="space-y-4 text-sm text-sage-700 font-light">
                          <li className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-sage-600 mt-0.5 flex-shrink-0" />
                              <span>Có con từ 2 đến 6 tuổi, thường xuyên bị mắc kẹt ở vòng lặp quát mắng rồi tự trách móc bản thân.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-sage-600 mt-0.5 flex-shrink-0" />
                              <span>Muốn tìm kiếm một phương pháp thực hành chậm, không phán xét, tôn trọng quyền riêng tư tối đa.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-sage-600 mt-0.5 flex-shrink-0" />
                              <span>Sẵn sàng dành 20-30 phút mỗi tuần tĩnh lặng để lắng nghe tiếng nói sâu bên trong cơ thể mình.</span>
                          </li>
                      </ul>
                  </div>

                  <div className="border border-red-100 rounded-2xl p-8 bg-red-50/20 space-y-6">
                      <h3 className="font-serif text-xl font-bold text-red-700 flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-500" /> Hành trình này không phù hợp nếu:
                      </h3>
                      <ul className="space-y-4 text-sm text-sage-700 font-light">
                          <li className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span>Bạn mong đợi một giải pháp dỗ con khóc ăn vạ ngay tức khắc chỉ sau 1 đêm mà không cần quan sát chính mình.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span>Gia đình đang đối mặt với các vấn đề bạo lực nghiêm trọng hoặc các sang chấn tâm lý cần can thiệp y tế chuyên sâu.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                              <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span>Chỉ muốn đọc lướt qua để tích lũy kiến thức lý thuyết chứ không sẵn lòng tự thực hành nhỏ trong tuần.</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      <section id="nguoi-dong-hanh" className="py-24 bg-cream-50 border-t border-b border-sage-100/80">
          <div className="max-w-4xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                  
                  <div className="md:col-span-5 flex justify-center">
                      <div className="relative">
                          <div className="absolute inset-0 border border-sage-600 rounded-2xl translate-x-3 translate-y-3 -z-10"></div>
                          <div className="w-64 h-80 rounded-2xl overflow-hidden bg-sage-200 premium-shadow">
                              <img src="/truc.jpg" alt="Chân dung Trúc - Người đồng hành" className="w-full h-full object-cover filter sepia-[0.15] contrast-[0.98]" />
                          </div>
                      </div>
                  </div>

                  <div className="md:col-span-7 space-y-6">
                      <span className="text-terracotta-500 font-semibold text-xs tracking-widest uppercase block">Người đồng hành cùng mẹ</span>
                      <h2 className="font-serif text-3xl font-bold text-charcoal">Tôi là Trúc.</h2>
                      <p className="text-xs font-semibold text-sage-600 uppercase tracking-wider">Người mẹ thực hành tỉnh thức</p>
                      
                      <div className="h-0.5 w-16 bg-sage-200"></div>

                      <div className="text-sage-700 text-sm font-light space-y-4 leading-relaxed">
                          <p className="text-base font-semibold text-sage-800 italic border-l-2 border-terracotta-400 pl-4 py-1 bg-white/40 rounded-r-lg">
                              "Tôi là người mẹ có 2 con nhỏ 4 & 6 tuổi, cũng đã từng quát con, nhưng giờ đây có thể nhẹ nhàng và thấu cảm với con. Tôi tin tôi làm được thì bạn cũng thế."
                          </p>
                          <p>
                              Tôi tạo ra <strong>Mẹ Chậm Lại</strong> không phải để dạy mẹ trở thành phiên bản hoàn hảo hơn, mà để cùng mẹ quan sát những khoảnh khắc rất thật: khi mình mệt, khi con không hợp tác, khi tiếng quát bật ra trước cả khi mình kịp nghĩ.
                          </p>
                          <p>
                              Với kinh nghiệm đồng hành cùng các bà mẹ và qua chính hành trình nuôi dạy con của bản thân, tôi hiểu sâu sắc rằng việc "nhịn giận" bằng ý chí thuần túy chỉ là chiếc lò xo bị nén chặt. Chúng ta cần những khoảng thở thực tế và thấu cảm sâu xa từ gốc rễ.
                          </p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-sage-100 premium-shadow">
                          <p className="text-xs text-charcoal italic leading-relaxed font-light">
                              "Mẹ không cần sửa mình ngay. Chỉ cần đặt một tay lên ngực, thở ra chậm hơn một nhịp, và gọi tên điều đang có mặt: mình đang mệt, mình đang sợ mất kiểm soát, mình đang cần được hỗ trợ."
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
              <span className="text-sage-600 text-xs font-semibold tracking-wider uppercase">Dành tặng mẹ 10 giây bình yên</span>
              <h3 className="font-serif text-2xl text-charcoal font-semibold">Tập thở chậm cùng "Mẹ Chậm Lại"</h3>
              <p className="text-xs text-sage-600 max-w-sm mx-auto font-light">Nếu bạn đang cảm thấy vội vã hoặc áp lực lúc này, hãy nhấp vào vòng tròn dưới đây và hít thở theo nhịp co giãn.</p>
              
              <div className="flex flex-col items-center justify-center pt-6 space-y-4">
                  <div 
                      onClick={() => setIsBreathing(!isBreathing)} 
                      className={`w-36 h-36 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-inner ${!isBreathing ? 'breathing-circle' : ''}`}
                      style={{ transform: breathScale, backgroundColor: breathBg }}
                  >
                      <span className="text-xs font-medium text-sage-800 uppercase tracking-widest">{breathText}</span>
                  </div>
                  <p className="text-xs text-terracotta-500 font-medium h-4 transition-opacity">{breathSubText}</p>
              </div>
          </div>
      </section>

      <section id="dang-ky" className="py-20 bg-cream-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
              <div className="bg-sage-700 text-white rounded-3xl overflow-hidden premium-shadow grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
                      <span className="text-xs font-semibold text-sage-200 tracking-wider uppercase">Cơ hội trải nghiệm sớm bản Beta</span>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                          Học cách chậm lại để ôm ấp sự bình yên bên con.
                      </h2>
                      
                      <div className="space-y-2 border-t border-sage-600/60 pt-6">
                          <p className="text-xs text-sage-200">Đăng ký tham gia ngay hôm nay để nhận quyền lợi:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white font-light">
                              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-300" /> 4 tuần email & audio</span>
                              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-300" /> Sổ tay worksheet in PDF</span>
                              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-300" /> 2 buổi Zoom Q&A trực tiếp</span>
                              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-300" /> Hỗ trợ giải đáp riêng</span>
                          </div>
                      </div>

                      <div className="bg-sage-800/80 p-5 rounded-2xl space-y-4">
                          <div className="flex justify-between items-center text-xs">
                              <span className="text-sage-200 font-medium">Thời gian mở đăng ký còn lại:</span>
                              <span className="font-bold text-terracotta-400 tracking-wider">{countdown}</span>
                          </div>
                          
                          <div className="space-y-1.5">
                              <div className="flex justify-between text-xs font-semibold">
                                  <span>Số suất ưu đãi đã đăng ký:</span>
                                  <span className="text-terracotta-400">{isSubmitted ? "12 / 15 suất" : "11 / 15 suất"}</span>
                              </div>
                              <div className="w-full bg-sage-600 h-2 rounded-full overflow-hidden">
                                  <div className="bg-terracotta-400 h-full rounded-full transition-all duration-1000" style={{width: isSubmitted ? "80%" : "73.3%"}}></div>
                              </div>
                              <p className="text-[10px] text-sage-300 text-right italic">Chỉ còn {isSubmitted ? "3" : "4"} suất ưu đãi giá Beta 299.000đ trước khi đóng cổng</p>
                          </div>
                      </div>
                  </div>

                  <div className="lg:col-span-5 bg-white p-8 text-charcoal flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-sage-100">
                      <div className="text-center lg:text-left space-y-2">
                          <span className="text-[10px] text-terracotta-500 font-bold uppercase tracking-wider">Học phí trải nghiệm bản Beta</span>
                          <div className="flex items-center justify-center lg:justify-start gap-3">
                              <span className="text-3xl font-bold text-charcoal">299.000đ</span>
                              <span className="text-sm text-sage-600 line-through">699.000đ</span>
                          </div>
                          <p className="text-xs text-sage-600 font-light leading-relaxed">Phí đóng một lần cho toàn bộ hành trình 4 tuần đồng hành.</p>
                      </div>

                      {!isSubmitted ? (
                          <form onSubmit={handleRegistration} className="space-y-4 mt-6">
                              <div>
                                  <label className="block text-xs font-semibold text-sage-700 mb-1">Họ và tên của mẹ</label>
                                  <input type="text" required placeholder="Nguyễn Thùy Dương" className="w-full px-3.5 py-2.5 rounded-lg border border-sage-200 text-sm focus:outline-none focus:border-sage-600 transition" />
                              </div>
                              <div>
                                  <label className="block text-xs font-semibold text-sage-700 mb-1">Số điện thoại Zalo</label>
                                  <input type="tel" required placeholder="0901234567" className="w-full px-3.5 py-2.5 rounded-lg border border-sage-200 text-sm focus:outline-none focus:border-sage-600 transition" />
                              </div>
                              <div>
                                  <label className="block text-xs font-semibold text-sage-700 mb-1">Địa chỉ Email nhận bài học</label>
                                  <input type="email" id="parentEmail" required placeholder="duong.nguyen@gmail.com" className="w-full px-3.5 py-2.5 rounded-lg border border-sage-200 text-sm focus:outline-none focus:border-sage-600 transition" />
                              </div>

                              <button type="submit" disabled={isSubmitting} className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold py-3.5 rounded-xl transition duration-300 premium-shadow disabled:opacity-80">
                                  {isSubmitting ? "Đang kết nối..." : "Xác Nhận Đăng Ký Bản Beta"}
                              </button>
                              <p className="text-[10px] text-sage-600 text-center font-light">Tôi cam kết bảo mật tuyệt đối thông tin cá nhân của bạn.</p>
                          </form>
                      ) : (
                          <div className="animate-in fade-in zoom-in duration-500 text-center space-y-4 py-8">
                              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 text-3xl mx-auto">
                                  <Heart className="w-8 h-8 fill-current" />
                              </div>
                              <h3 className="font-serif text-xl font-bold text-sage-700">Chào mừng bạn đồng hành!</h3>
                              <p className="text-xs text-sage-600 leading-relaxed font-light">
                                  Tôi đã ghi nhận đăng ký thành công của bạn. Email xác nhận và thông tin hướng dẫn đóng học phí sẽ được gửi về <strong className="text-charcoal">{registeredEmail}</strong> trong 2 phút tới.
                              </p>
                              <div className="p-3 bg-sage-50 rounded-lg text-[11px] text-sage-700 border border-sage-100 italic">
                                  Hãy kiểm tra cả hòm thư Spam/Quảng cáo nếu không thấy thư nhé mẹ!
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </section>

      <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
              <div className="text-center space-y-4 mb-12">
                  <span className="text-terracotta-500 font-semibold text-xs tracking-widest uppercase">Giải đáp thắc mắc</span>
                  <h2 className="font-serif text-3xl font-bold text-charcoal">Câu hỏi thường gặp</h2>
                  <div className="w-16 h-0.5 bg-sage-200 mx-auto"></div>
              </div>

              <div className="space-y-4">
                  {[
                      {
                          q: "Hành trình này kéo dài trong bao lâu và lịch trình thế nào?",
                          a: "Hành trình diễn ra trọn vẹn trong 4 tuần. Email bài học, tài liệu thực hành và audio định hướng sẽ được gửi trực tiếp vào hòm thư cá nhân của bạn vào mỗi sáng thứ Hai hàng tuần, bắt đầu từ ngày 06/07/2026. Lịch Zoom Q&A trực tiếp sẽ diễn ra vào ngày 18/07 và 31/07/2026."
                      },
                      {
                          q: "Tôi rất bận, sợ không theo kịp thì phải làm sao?",
                          a: "Nội dung của \"Mẹ Chậm Lại\" được thiết kế đặc thù cho các mẹ bận rộn. Bạn chỉ cần dành khoảng 20-30 phút mỗi tuần: nghe audio dài 5-8 phút khi đang nấu ăn, dọn dẹp hoặc trên đường đi làm, sau đó dành 5 phút điền bảng quan sát cảm xúc. Không có áp lực bài tập lớn, tất cả đều tích hợp tự nhiên vào sinh hoạt đời thực của bạn."
                      },
                      {
                          q: "Bản tin này có yêu cầu tôi phải chia sẻ chuyện cá nhân không?",
                          a: "Hoàn toàn KHÔNG. Tôi đề cao quyền riêng tư tuyệt đối của bạn. Bản tin được thiết kế để bạn tự thực hành lặng lẽ, an toàn tại nhà. Bạn có thể tự mình soi chiếu cảm xúc và hành xử khác đi với con mà không cần phơi bày câu chuyện của gia đình mình với bất kỳ ai, trừ khi bạn chủ động muốn chia sẻ để nhận tư vấn."
                      },
                      {
                          q: "Mẹ Chậm Lại có chữa khỏi hoàn toàn chứng nóng tính không?",
                          a: "Làm cha mẹ là một quá trình học hỏi không có hồi kết. Tôi không cam kết biến bạn thành một người \"hoàn hảo không bao giờ cáu giận\" vì điều đó phi thực tế. Tôi sẽ giúp bạn nhận diện sớm tín hiệu cơ thể, biết cách dừng lại trước khi bùng nổ, và học cách sửa chữa, kết nối lại dịu dàng với con sau những lần lỡ sai lầm."
                      }
                  ].map((faq, idx) => (
                      <div key={idx} className="border border-sage-100 rounded-xl overflow-hidden transition duration-300 bg-cream-50/40">
                          <button onClick={() => toggleFaq(idx)} className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-cream-100/50 transition">
                              <span className="font-semibold text-charcoal text-sm md:text-base">{faq.q}</span>
                              <ChevronDown className={`w-5 h-5 text-sage-600 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                          </button>
                          <div className={`px-6 pb-5 text-xs md:text-sm text-sage-700 font-light leading-relaxed border-t border-sage-100/50 pt-4 ${activeFaq === idx ? 'block' : 'hidden'}`}>
                              {faq.a}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="bg-cream-100 border-t border-sage-200/50 py-10">
          <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white/80 backdrop-blur-sm border border-sage-200/60 p-6 rounded-2xl text-xs text-sage-600 leading-relaxed space-y-3">
                  <span className="font-bold text-sage-800 uppercase tracking-wider flex items-center gap-2">
                      <Info className="w-4 h-4 text-terracotta-400" /> Lưu ý & Tuyên bố miễn trách:
                  </span>
                  <p>
                      <strong>Mẹ Chậm Lại</strong> là chương trình phản tư và thực hành giao tiếp trong gia đình, không thay thế trị liệu tâm lý, can thiệp hành vi chuyên sâu hoặc hỗ trợ trong tình huống bạo lực/nguy cơ an toàn. Nếu mẹ hoặc con đang ở trạng thái khủng hoảng, hãy tìm sự hỗ trợ trực tiếp từ chuyên gia hoặc các đơn vị y tế/tâm lý có thẩm quyền.
                  </p>
              </div>
          </div>
      </section>

      <footer className="bg-cream-50 border-t border-sage-200/40 py-16 text-xs text-sage-600">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
              <h3 className="font-serif text-2xl font-bold text-sage-700">Mẹ Chậm Lại.</h3>
              <p className="max-w-md mx-auto font-light leading-relaxed">
                  Hành trình chuyển hóa cơn giận, thấu hiểu con trẻ và vun đắp kết nối thâm sâu dành cho các mẹ hiện đại. Không phán xét, không bạo lực, đồng hành từng bước nhỏ mỗi tuần.
              </p>
              <div className="flex justify-center gap-6 text-lg py-4 border-y border-sage-200/55 max-w-sm mx-auto">
                  <a href="#" className="hover:text-terracotta-500 transition"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-terracotta-500 transition"><Youtube className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-terracotta-500 transition"><Mail className="w-5 h-5" /></a>
              </div>
              <div className="space-y-1 opacity-80">
                  <p>© 2026 Mẹ Chậm Lại. Bản quyền toàn bộ chương trình thuộc về đội ngũ sáng lập.</p>
                  <p>Mở đăng ký Beta giới hạn từ nay đến ngày 04/07/2026 hoặc đến khi đủ số lượng 15 người.</p>
              </div>
          </div>
      </footer>
    </div>
  );
}

