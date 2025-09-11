import React from 'react';
import "../assets/css/story.css"

const statsData = [
  { number: '30+', label: '专业艺术家与工匠' },
  { number: '500+', label: '精美艺术品收藏' },
  { number: '15+', label: '年传统工艺传承' },
];

const Story = () => {
  return (
    <section className="story">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-subtitle">我们的传承</div>
      </div>

      <div className="story-container">
        {/* Image Column */}
        <div className="story-image">
          <img 
            src="./images/painter.webp" 
            alt="尼泊尔传统工艺艺术家正在精心绘制唐卡" 
            loading="lazy"
          />
        </div>

        {/* Content Column */}
        <div className="story-content">
          <div className="story-icon" aria-label="传统工艺象征">⚱️</div>
          
          <h2 className="story-title">我们的故事与工艺</h2>
          
          <p className="story-text">
            我们传承尼泊尔百年传统的制造工艺，是一家专门致力于尼泊尔传统手工艺术的制造商与销售商。每一件作品都承载着匠人的心血与智慧。
          </p>
          
          <p className="story-text">
            哲竹手工艺品致力于传播快乐与自然灵感的艺术创作，制作正宗的尼泊尔传统工艺品。我们秉承传承与发扬传统手工艺的使命，以精湛技艺与匠心精神，向世界展示尼泊尔文化的独特魅力。
          </p>

          {/* Statistics */}
          <div className="stats" role="group" aria-label="我们的成就统计">
            {statsData.map((stat, index) => (
              <div className="stat" key={index} tabIndex="0">
                <span className="stat-number" aria-label={`数字 ${stat.number}`}>
                  {stat.number}
                </span>
                <span className="stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;