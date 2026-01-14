/**
 * River Hill Spa Wellness Center
 * Recruitment Website - Main JavaScript
 */

// ===== DOM 로드 완료 후 실행 =====
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 모바일 네비게이션 토글 =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // 메뉴 항목 클릭 시 메뉴 닫기
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // ===== FAQ 아코디언 =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 현재 열린 항목 찾기
            const currentlyActive = document.querySelector('.faq-item.active');
            
            // 다른 항목이 열려있으면 닫기
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            // 현재 항목 토글
            item.classList.toggle('active');
        });
    });
    
    // ===== 스무스 스크롤 =====
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // href가 '#'만 있는 경우 무시
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // 네비게이션 높이 고려
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== 스크롤 시 네비게이션 그림자 효과 =====
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 16px rgba(127, 168, 148, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(127, 168, 148, 0.1)';
        }
    });
    
    // ===== 스크롤 애니메이션 (Intersection Observer) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 애니메이션 적용할 요소들
    const animateElements = document.querySelectorAll('.position-card, .why-card, .interview-card, .benefit-card, .step');
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // ===== 버튼 호버 효과 강화 =====
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== 폼 유효성 검사 (있는 경우) =====
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#7FA894';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('모든 필수 항목을 입력해주세요.');
            }
        });
    });
    
    // ===== 상단으로 스크롤 버튼 (선택사항) =====
    // 페이지 하단에 버튼이 있다면 추가
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== 이메일 지원 버튼 클릭 추적 (선택사항) =====
    const applyButtons = document.querySelectorAll('a[href^="mailto:"]');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Google Analytics 등 추적 코드 추가 가능
            console.log('지원 이메일 클릭:', this.href);
        });
    });
    
    // ===== 전화번호 클릭 추적 (선택사항) =====
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Google Analytics 등 추적 코드 추가 가능
            console.log('전화번호 클릭:', this.href);
        });
    });
    
    // ===== 이미지 Placeholder 클릭 시 안내 (개발 편의용) =====
    const placeholders = document.querySelectorAll('.image-placeholder, .hero-image-placeholder');
    
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            const text = this.querySelector('.placeholder-text');
            if (text) {
                console.log('이미지 자리:', text.textContent.trim());
                // alert('이 자리에 실제 이미지를 추가해주세요:\n' + text.textContent.trim());
            }
        });
    });
    
    // ===== 페이지 로드 애니메이션 =====
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(function() {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // ===== 외부 링크 새 창으로 열기 =====
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        // 같은 도메인이 아닌 경우에만 새 창으로
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ===== 카드 호버 효과 =====
    const cards = document.querySelectorAll('.position-card, .interview-card, .why-card, .benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== 로딩 완료 메시지 =====
    console.log('%c🌿 River Hill Spa Wellness Center', 'color: #7FA894; font-size: 20px; font-weight: bold;');
    console.log('%c채용 홈페이지가 성공적으로 로드되었습니다!', 'color: #7FA894; font-size: 14px;');
    console.log('%c문의: contact@riverhillspa.com | 02-2088-0711', 'color: #5A6B62; font-size: 12px;');
});

// ===== 반응형 테이블 처리 (있는 경우) =====
function makeTablesResponsive() {
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.style.overflowX = 'auto';
        wrapper.style.marginBottom = '20px';
        
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}

// ===== 디바운스 함수 (성능 최적화) =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== 스크롤 성능 최적화 =====
let ticking = false;

function updateScrollStyles() {
    // 스크롤 관련 스타일 업데이트
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateScrollStyles);
        ticking = true;
    }
});

// ===== 페이지 언로드 시 정리 =====
window.addEventListener('beforeunload', function() {
    // 필요한 정리 작업 수행
    console.log('페이지를 떠나고 있습니다...');
});
