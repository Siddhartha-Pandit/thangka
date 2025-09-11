import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/categories.css"

// 示例产品数据
const allProducts = [
    // 唐卡
    { id: 1, name: "金刚界曼达拉", desc: "精美手工绘制金刚界曼达拉唐卡", price: "¥8,800", image: "/images/thangka/1.jpeg", hot: true, category: "唐卡", subcategory: "曼达拉" },
    { id: 2, name: "时轮曼达拉", desc: "传统彩绘时轮曼达拉唐卡", price: "¥7,200", image: "/images/thangka/2.jpeg", hot: false, category: "唐卡", subcategory: "曼达拉" },
    { id: 3, name: "释迦牟尼佛唐卡", desc: "手工绘制释迦牟尼佛像唐卡", price: "¥6,800", image: "/images/thangka/3.jpeg", hot: true, category: "唐卡", subcategory: "佛像画" },
    { id: 4, name: "阿弥陀佛唐卡", desc: "传统描金阿弥陀佛唐卡", price: "¥9,200", image: "/images/thangka/4.jpeg", hot: false, category: "唐卡", subcategory: "佛像画" },
    { id: 5, name: "大黑天唐卡", desc: "威严庄重的大黑天护法唐卡", price: "¥12,500", image: "/images/thangka/5.jpeg", hot: true, category: "唐卡", subcategory: "护法神像" },
    { id: 6, name: "马头明王唐卡", desc: "马头明王手绘唐卡", price: "¥11,300", image: "/images/thangka/6.jpeg", hot: false, category: "唐卡", subcategory: "护法神像" },

    // 木雕
    { id: 7, name: "木雕观音像", desc: "楠木精雕观音立像", price: "¥4,500", image: "/images/thangka/4.jpeg", hot: true, category: "木雕", subcategory: "佛像" },
    { id: 8, name: "木雕弥勒佛", desc: "笑口常开的弥勒佛木雕", price: "¥3,800", image: "/images/thangka/4.jpeg", hot: false, category: "木雕", subcategory: "佛像" },
    { id: 9, name: "传统木窗格", desc: "尼泊尔工匠手工雕刻窗花", price: "¥2,600", image: "/images/thangka/4.jpeg", hot: true, category: "木雕", subcategory: "窗花" },
    { id: 10, name: "木质家用神龛", desc: "红木雕刻佛龛", price: "¥5,200", image: "/images/thangka/4.jpeg", hot: false, category: "木雕", subcategory: "神龛" },

    // 金属工艺
    { id: 11, name: "铜鎏金释迦牟尼佛像", desc: "铜胎鎏金佛像，庄严华美", price: "¥15,000", image: "/images/thangka/4.jpeg", hot: true, category: "金属工艺", subcategory: "佛像" },
    { id: 12, name: "铜供碗套装", desc: "手工敲制铜供碗一套七只", price: "¥2,200", image: "/images/thangka/4.jpeg", hot: false, category: "金属工艺", subcategory: "供器" },
    { id: 13, name: "金刚杵", desc: "精致雕花金刚杵", price: "¥1,800", image: "/images/thangka/4.jpeg", hot: true, category: "金属工艺", subcategory: "法器" },
    { id: 14, name: "法铃", desc: "配套法铃，工艺精美", price: "¥1,600", image: "/images/thangka/4.jpeg", hot: false, category: "金属工艺", subcategory: "法器" },

    // 首饰
    { id: 15, name: "绿松石耳环", desc: "藏式绿松石镶银耳环", price: "¥950", image: "/images/thangka/4.jpeg", hot: true, category: "首饰", subcategory: "耳环" },
    { id: 16, name: "珊瑚佛珠项链", desc: "天然红珊瑚手工项链", price: "¥2,500", image: "/images/thangka/4.jpeg", hot: true, category: "首饰", subcategory: "项链" },
    { id: 17, name: "铜镶嵌手镯", desc: "镶嵌绿松石的藏式手镯", price: "¥1,200", image: "/images/thangka/4.jpeg", hot: false, category: "首饰", subcategory: "手镯" },

    // 传统服饰
    { id: 18, name: "手工藏袍", desc: "传统花纹手工织造藏袍", price: "¥3,500", image: "/images/thangka/4.jpeg", hot: true, category: "传统服饰", subcategory: "藏袍" },
    { id: 19, name: "羊毛披肩", desc: "尼泊尔羊毛披肩，柔软保暖", price: "¥1,200", image: "/images/thangka/4.jpeg", hot: false, category: "传统服饰", subcategory: "披肩" },
    { id: 20, name: "藏式绣花帽", desc: "手工绣花藏式帽子", price: "¥600", image: "/images/thangka/4.jpeg", hot: false, category: "传统服饰", subcategory: "帽子" },

    // 手工艺品
    { id: 21, name: "手工藏纸笔记本", desc: "环保手工藏纸制作", price: "¥180", image: "/images/thangka/4.jpeg", hot: true, category: "手工艺品", subcategory: "纸艺" },
    { id: 22, name: "陶制茶壶", desc: "尼泊尔传统陶艺茶壶", price: "¥450", image: "/images/thangka/4.jpeg", hot: false, category: "手工艺品", subcategory: "陶艺" },
    { id: 23, name: "经幡挂饰", desc: "五色经幡挂饰", price: "¥250", image: "/images/thangka/4.jpeg", hot: true, category: "手工艺品", subcategory: "挂饰" },

    // 佛具用品
    { id: 24, name: "手持转经轮", desc: "铜质镶嵌宝石转经轮", price: "¥900", image: "/images/thangka/4.jpeg", hot: true, category: "佛具用品", subcategory: "转经轮" },
    { id: 25, name: "铜酥油灯", desc: "传统供佛铜酥油灯", price: "¥750", image: "/images/thangka/4.jpeg", hot: false, category: "佛具用品", subcategory: "酥油灯" },
    { id: 26, name: "菩提子念珠", desc: "108颗菩提子念珠", price: "¥1,100", image: "/images/thangka/4.jpeg", hot: true, category: "佛具用品", subcategory: "念珠" },
];

function Categories() {
    const [categories, setCategories] = useState({});
    const [activeFilters, setActiveFilters] = useState({});
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });
    const carouselRefs = useRef({});
    const navigate = useNavigate();

    // 初始化分类和设置默认活动筛选器
    useEffect(() => {
        const categoryData = {};
        allProducts.forEach(product => {
            if (!categoryData[product.category]) {
                categoryData[product.category] = new Set();
            }
            categoryData[product.category].add(product.subcategory);
        });
        setCategories(categoryData);

        const initialFilters = {};
        Object.keys(categoryData).forEach(cat => {
            initialFilters[cat] = '全部';
        });
        setActiveFilters(initialFilters);
    }, []);

    // 显示通知
    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 3000);
    };

    // 添加到购物车
    const addToCart = (product, event) => {
        event.stopPropagation(); // 防止触发产品点击事件
        
        // 这里你可以实现实际的购物车逻辑
        // 例如：使用Context API, Redux, 或者localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existingItem = cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        showNotification(`${product.name} 已添加到购物车！`, 'success');
        
        // 触发自定义事件，通知其他组件购物车已更新
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    };

    // 处理产品卡片点击
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    // 移动轮播图
    const moveCarousel = (categoryId, direction) => {
        const carouselContainer = carouselRefs.current[categoryId];
        if (!carouselContainer) return;

        const wrapper = carouselContainer.querySelector('.carousel-wrapper');
        if (!wrapper) return;

        const cardWidth = 320;
        const containerWidth = carouselContainer.offsetWidth;
        const visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
        const totalCards = wrapper.children.length;

        let currentIndex = parseInt(carouselContainer.dataset.currentIndex || '0', 10);
        currentIndex += direction * visibleCards;

        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= totalCards) {
            currentIndex = Math.max(0, totalCards - visibleCards);
        }

        carouselContainer.dataset.currentIndex = currentIndex.toString();
        const translateX = -currentIndex * cardWidth;
        wrapper.style.transform = `translateX(${translateX}px)`;
    };

    // 处理筛选按钮点击事件并更新活动筛选器
    const handleFilterClick = (category, subcategory) => {
        setActiveFilters(prevFilters => {
            const newFilters = { ...prevFilters, [category]: subcategory };

            // 重置轮播图索引
            const carouselId = `carousel-${category.replace(/\s+/g, '-')}`;
            const carouselContainer = carouselRefs.current[carouselId];
            if (carouselContainer) {
                carouselContainer.dataset.currentIndex = '0';
                const wrapper = carouselContainer.querySelector('.carousel-wrapper');
                if (wrapper) {
                    wrapper.style.transform = 'translateX(0px)';
                }
            }
            return newFilters;
        });
    };

    // 根据当前活动筛选器过滤产品
    const getFilteredProducts = (category) => {
        const activeSubcategory = activeFilters[category];
        if (!activeSubcategory || activeSubcategory === '全部') {
            return allProducts.filter(p => p.category === category);
        }
        return allProducts.filter(p => p.category === category && p.subcategory === activeSubcategory);
    };

    // 渲染单个产品卡片
    const renderProductCard = (product) => (
        <div 
            className="product-card" 
            key={product.id}
            onClick={() => handleProductClick(product.id)}
        >
            <div className="product-image">
                {product.hot && <div className="hot-badge">热销</div>}
                {product.image ? (
                    <img src={product.image} alt={product.name} />
                ) : (
                    <div className="image-placeholder">图片</div>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="product-price">{product.price}</div>
                <div className="product-actions">
                    <button 
                        className="add-to-cart-btn"
                        onClick={(e) => addToCart(product, e)}
                    >
                        加入购物车
                    </button>
                    <Link 
                        to={`/product/${product.id}`} 
                        className="view-details-btn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        查看详情
                    </Link>
                </div>
            </div>
        </div>
    );

    // 渲染给定类别的轮播图
    const renderCarousel = (category) => {
        const filteredProducts = getFilteredProducts(category);
        const carouselId = `carousel-${category.replace(/\s+/g, '-')}`;

        if (filteredProducts.length === 0) {
            return (
                <div className="empty-state">
                    <p>暂无该分类商品</p>
                </div>
            );
        }

        return (
            <div 
                className="carousel-container" 
                ref={el => carouselRefs.current[carouselId] = el} 
                data-current-index="0"
            >
                <button 
                    className="carousel-btn prev" 
                    onClick={() => moveCarousel(carouselId, -1)}
                >
                    ❮
                </button>
                <div className="carousel-wrapper">
                    {filteredProducts.map(renderProductCard)}
                </div>
                <button 
                    className="carousel-btn next" 
                    onClick={() => moveCarousel(carouselId, 1)}
                >
                    ❯
                </button>
            </div>
        );
    };

    // 渲染特定类别的筛选按钮
    const renderFilterButtons = (category) => {
        const subcategories = Array.from(categories[category] || []);
        const currentActiveSubcategory = activeFilters[category];

        return (
            <>
                <button
                    className={`filter-btn ${currentActiveSubcategory === '全部' ? 'active' : ''}`}
                    onClick={() => handleFilterClick(category, '全部')}
                >
                    全部
                </button>
                {subcategories.map(sub => (
                    <button
                        key={sub}
                        className={`filter-btn ${currentActiveSubcategory === sub ? 'active' : ''}`}
                        onClick={() => handleFilterClick(category, sub)}
                    >
                        {sub}
                    </button>
                ))}
            </>
        );
    };

    return (
        <>
            {/* 购物车通知 */}
            <div className={`cart-notification ${notification.show ? 'show' : ''} ${notification.type}`}>
                {notification.message}
            </div>

            <main className="container" id="main-content">
                {Object.keys(categories).length === 0 ? (
                    <div className="loading">正在加载精美商品...</div>
                ) : (
                    Object.keys(categories).map(category => (
                        <section className="category-section" key={category}>
                            <h2 className="category-title">{category}</h2>
                            <div className="filter-container">
                                {renderFilterButtons(category)}
                            </div>
                            {renderCarousel(category)}
                        </section>
                    ))
                )}
            </main>
        </>
    );
}

export default Categories;