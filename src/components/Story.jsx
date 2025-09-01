import React from 'react';


const statsData = [
  { number: '30+', label: '艺术家与工' },
  { number: '500+', label: '满意艺术品' },
  { number: '15+', label: '年传统工艺' },
];

const Story = () => {
  return (
    <section className="story">
      <div className="story-container">
        <div className="story-image">
          <img src="./images/painter.webp" alt="Painter" />
        </div>
        <div className="story-content">
          <div className="story-icon">⚱️</div>
          <h2 className="story-title">我们的故事与工艺</h2>
          <p className="story-text">
            我们尼泊尔百年传统的制造工艺与马德布瓦斯工厂，是一家专门致力于尼泊尔传统的手艺艺术的制造商与销售商。
          </p>
          <p className="story-text">
            哲竹手工艺品传播快乐与大自然鼓舞艺术手工艺，制作尼泊尔传统工艺成就，我们秉承传承与发扬光大传统手工艺，向前迈奉与手工艺与制造传统尼泊尔技艺与精良。
          </p>

          <div className="stats">
            {statsData.map((stat, index) => (
              <div className="stat" key={index}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
