// ============================================
// SMOOTH SCROLL VE YUMUŞAK GEÇİŞLER
// ============================================

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    
    // Yumuşak kaydırma animasyonu için
    // (Gerekirse navigasyon linkleri eklendiğinde kullanılabilir)
    initSmoothScroll();
    
    // Kartlara hover efekti için ek animasyonlar
    initCardAnimations();
});

// ============================================
// YUMUŞAK KAYDIRMA FONKSİYONU
// ============================================

function initSmoothScroll() {
    // Tüm anchor linklerini bul ve yumuşak kaydırma ekle
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Sadece # ile başlayan linkler için çalış
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// KART ANİMASYONLARI
// ============================================

function initCardAnimations() {
    // Intersection Observer ile kartlar görünür olduğunda animasyon ekle
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animasyon uygulanacak elementleri seç
    const animatedElements = document.querySelectorAll(
        '.feature-card, .team-card, .problem-box, .solution-box, .step'
    );
    
    // Başlangıç durumunu ayarla
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// HERO ARKA PLAN ANİMASYONU (Opsiyonel)
// ============================================

// Hero bölümündeki arka plan deseninin yavaş hareket etmesi
// CSS'te zaten tanımlı, burada ek kontrol için kullanılabilir