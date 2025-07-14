/**
 * AIShares官网Vue.js应用程序
 * 实现交互功能和数据管理
 */
const { createApp } = Vue;

createApp({
    data() {
        return {
            // 功能特性数据
            features: [
                {
                    id: 1,
                    icon: 'fas fa-globe',
                    title: 'All-in-one coverage',
                    description: 'ChatGPT, Claude, Gemini, Grok, Bing Copilot, DeepSeek —pick any chat, any time'
                },
                {
                    id: 2,
                    icon: 'fas fa-check-square',
                    title: 'Visual checkboxes',
                    description: 'Tiny boxes appear beside every message; use ⌘/Ctrl +A to select all, Esc to cancel'
                },
                {
                    id: 3,
                    icon: 'fas fa-expand-arrows-alt',
                    title: '2× crystal-clear render',
                    description: 'Built-in 2× scale and antialiasing keep long conversations razor-sharp'
                },
                {
                    id: 4,
                    icon: 'fas fa-magic',
                    title: 'Smart cleanup',
                    description: 'Hides buttons, inputs, and ads—your image is pure dialogue, nothing else'
                },
                {
                    id: 5,
                    icon: 'fas fa-circle',
                    title: 'Floating action button',
                    description: 'A cute blue bubble follows your scroll for instant Export / Cancel'
                },
                {
                    id: 6,
                    icon: 'fas fa-shield-alt',
                    title: 'Privacy-first build',
                    description: 'Manifest V3, minimal permissions, no background scripts, no data ever leaves your browser'
                }
            ],
            
            // 使用步骤数据
            steps: [
                {
                    title: 'Install',
                    description: 'Add AIShares to your Chrome browser with one click',
                    image: '/assets/step1.png'
                },
                {
                    title: 'Tick',
                    description: 'Select the messages you want to capture with visual checkboxes',
                    image: '/assets/step2.png'
                },
                {
                    title: 'Export',
                    description: 'Your PNG drops straight into Downloads folder instantly',
                    image: '/assets/step3.png'
                }
            ],
            
            // 用户评价数据
            testimonials: [
                {
                    id: 1,
                    text: 'Finally! Claude brainstorms now look gorgeous on Twitter.',
                    author: 'Bear',
                    role: 'Product Manager'
                },
                {
                    id: 2,
                    text: 'My thesis chats export in seconds—professor approved.',
                    author: 'Zoe',
                    role: 'Grad Student'
                },
                {
                    id: 3,
                    text: 'Way better than the DIY scripts I hacked together.',
                    author: 'Lee',
                    role: 'Front-end Dev'
                }
            ],
            
            // FAQ数据
            faqs: [
                {
                    question: 'Which browsers are supported?',
                    answer: 'Chrome 88+ officially; Edge, Brave, and any Chromium-based browser via the Chrome Web Store.',
                    isOpen: false
                },
                {
                    question: 'No checkboxes on my screen—why?',
                    answer: 'Make sure you\'re on one of the six supported sites. Refresh the page and disable conflicting user scripts or themes if needed.',
                    isOpen: false
                },
                {
                    question: 'Image feels huge—help!',
                    answer: 'Long chats? Export in chunks or run the PNG through any online compressor.',
                    isOpen: false
                },
                {
                    question: 'Does AIShares upload my chats?',
                    answer: 'Never. html2canvas runs locally; nothing is sent or stored on our servers.',
                    isOpen: false
                },
                {
                    question: 'Will you add PDF or Markdown export?',
                    answer: 'It\'s on the roadmap! ',
                    isOpen: false
                }
            ],
            
            // 移动端菜单状态
            mobileMenuOpen: false
        }
    },
    
    mounted() {
        /**
         * 组件挂载后的初始化操作
         */
        this.initializeAnimations();
        this.setupScrollEffects();
        this.setupMobileMenu();
    },
    
    methods: {
        /**
         * 安装扩展程序
         * 跳转到Chrome Web Store
         */
        installExtension() {
            // 这里应该是实际的Chrome Web Store链接
            const chromeStoreUrl = 'https://chromewebstore.google.com/detail/aishares/heanjkhnidnekbcegmdodgleikdmecdj';
            window.open(chromeStoreUrl, '_blank');
            
            // 添加点击追踪
            this.trackEvent('install_clicked', {
                source: 'website',
                timestamp: new Date().toISOString()
            });
        },
        
        /**
         * 切换FAQ项目的展开/收起状态
         * @param {number} index - FAQ项目的索引
         */
        toggleFaq(index) {
            this.faqs[index].isOpen = !this.faqs[index].isOpen;
            
            // 关闭其他FAQ项目（可选：实现手风琴效果）
            // this.faqs.forEach((faq, i) => {
            //     if (i !== index) {
            //         faq.isOpen = false;
            //     }
            // });
        },
        
        /**
         * 切换移动端菜单
         */
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        
        /**
         * 平滑滚动到指定元素
         * @param {string} elementId - 目标元素的ID
         */
        scrollToElement(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // 关闭移动端菜单
            this.mobileMenuOpen = false;
        },
        
        /**
         * 事件追踪函数
         * @param {string} eventName - 事件名称
         * @param {object} eventData - 事件数据
         */
        trackEvent(eventName, eventData) {
            // 这里可以集成Google Analytics或其他分析工具
            console.log('Event tracked:', eventName, eventData);
            
            // 示例：Google Analytics 4
            if (typeof gtag !== 'undefined') {
                gtag('event', eventName, eventData);
            }
        },
        
        /**
         * 处理导航链接点击
         * @param {Event} event - 点击事件
         * @param {string} targetId - 目标元素ID
         */
        handleNavClick(event, targetId) {
            event.preventDefault();
            this.scrollToElement(targetId);
        },
        
        /**
         * 初始化动画效果
         */
        initializeAnimations() {
            // 添加滚动触发的动画
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);
            
            // 观察需要动画的元素
            const animateElements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
            animateElements.forEach(el => observer.observe(el));
        },
        
        /**
         * 设置滚动效果
         */
        setupScrollEffects() {
            let ticking = false;
            
            const updateNavbar = () => {
                const navbar = document.querySelector('.navbar');
                const scrollY = window.scrollY;
                
                if (scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                ticking = false;
            };
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateNavbar);
                    ticking = true;
                }
            });
        },
        
        /**
         * 设置移动端菜单
         */
        setupMobileMenu() {
            // 点击菜单外部关闭菜单
            document.addEventListener('click', (event) => {
                const mobileMenu = document.querySelector('.mobile-menu');
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                
                if (this.mobileMenuOpen && 
                    mobileMenu && 
                    !mobileMenu.contains(event.target) && 
                    !menuToggle.contains(event.target)) {
                    this.mobileMenuOpen = false;
                }
            });
        }
    }
}).mount('#app');

/**
 * 添加CSS动画类
 */
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(102, 126, 234, 0.1);
    }
    
    .feature-card,
    .step,
    .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
`;
document.head.appendChild(style);

/**
 * 页面加载完成后的额外初始化
 */
document.addEventListener('DOMContentLoaded', () => {
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 预加载关键资源
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

/**
 * 性能优化：图片懒加载
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * 错误处理和用户反馈
 */
window.addEventListener('error', (event) => {
    console.error('页面错误:', event.error);
    // 这里可以添加错误报告逻辑
});

/**
 * 导出全局工具函数
 */
window.AISharesUtils = {
    /**
     * 复制文本到剪贴板
     * @param {string} text - 要复制的文本
     */
    copyToClipboard(text) {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text);
        } else {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        }
    },
    
    /**
     * 格式化数字
     * @param {number} num - 要格式化的数字
     */
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
};