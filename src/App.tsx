import * as React from 'react'
import StickerSlapFooter from './components/StickerSlapFooter'

export default function App() {
  // Interactive mini calculator demo for the Master Key case preview
  const [selectedKey, setSelectedKey] = React.useState('auto')
  
  const keyTypes: Record<string, { name: string; price: string; time: string; icon: string }> = {
    door: { name: 'Английский квартирный', price: '250 ₽', time: '3–5 минут', icon: '🔑' },
    auto: { name: 'Автомобильный с чипом', price: '1 800 ₽', time: '15–20 минут', icon: '🚗' },
    safe: { name: 'Сейфовый сувальдный', price: '950 ₽', time: '10–15 минут', icon: '🔒' },
    intercom: { name: 'Домофонный чип Dallas/RFID', price: '150 ₽', time: '1–2 минуты', icon: '🏷️' },
  }

  // Interactive lookbook model selector for Tanya Smith Atelier
  const [activeModel, setActiveModel] = React.useState(0)
  const models = [
    { title: 'Вечернее платье-бюстье', tag: 'Шёлк & Корсетная основа', fit: '1–2 примерки' },
    { title: 'Деловой твидовый костюм', tag: 'Премиальная шерсть', fit: 'По индивидуальным лекалам' },
    { title: 'Авторское пальто Maxima', tag: 'Кашемир 100%', fit: 'Идеальная посадка' },
  ]

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <header className="site-nav">
        <div className="container nav-inner">
          <a href="#" className="nav-brand">
            <span>RAf STUDIO</span>
            <span className="brand-badge">CASE STUDY</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#cases" className="nav-link">Кейсы</a></li>
              <li><a href="#services" className="nav-link">Услуги</a></li>
              <li><a href="#stack" className="nav-link">Стек & Подход</a></li>
              <li><a href="#contact" className="nav-link">Контакты</a></li>
            </ul>
          </nav>

          <a href="https://t.me/kalapad90" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Написать в TG</span>
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-pill">
            <span className="hero-pill-dot"></span>
            <span>RAf STUDIO • Открыт к коммерческим заказам</span>
          </div>

          <h1 className="hero-title">
            Создаю сайты, которые <br />
            <span className="highlight">хочется изучать</span> и <span className="serif">покупать</span>.
          </h1>

          <p className="hero-desc">
            Проектирую и разрабатываю современные веб-интерфейсы: от премиальных кутюрных ателье до сервисных продуктов с интерактивными калькуляторами и мгновенной загрузкой.
          </p>

          <div className="hero-actions">
            <a href="#cases" className="btn-primary btn-accent">
              <span>Смотреть кейсы</span>
              <span>↓</span>
            </a>
            <a href="https://github.com/kalapad90-design" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <span>GitHub репозитории</span>
              <span>↗</span>
            </a>
          </div>

          {/* Interactive Tags Strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <span className="sticker-tag orange">⚡ 0% лишнего кода</span>
            <span className="sticker-tag blue">💎 Нативная плавность</span>
            <span className="sticker-tag">🎯 Конверсионная архитектура</span>
            <span className="sticker-tag orange">📱 Идеальный Mobile-first</span>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="container">
        <div className="stats-strip">
          <div className="stat-box">
            <span className="stat-number">100/100</span>
            <span className="stat-label">Google PageSpeed производительность</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">&lt; 1 сек</span>
            <span className="stat-label">Мгновенный отклик и загрузка</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Адаптивность под все экраны</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">Clean UI</span>
            <span className="stat-label">Авторская типографика и микроинтерактив</span>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="container" style={{ paddingBottom: '40px' }}>
        <div className="section-header">
          <span className="section-pill">Избранные проекты</span>
          <h2 className="section-title">Коммерческие кейсы разработки</h2>
          <p className="section-subtitle">
            Каждый сайт решает конкретную бизнес-задачу: формирует доверие, вовлекает интерактивом и доводит пользователя до заявки.
          </p>
        </div>

        <div className="cases-grid">
          {/* CASE 1: TANYA SMITH ATELIER */}
          <article className="case-card case-card-atelier">
            <div className="case-preview">
              <div className="mockup-window">
                <div className="mockup-header">
                  <span className="mockup-dot red"></span>
                  <span className="mockup-dot yellow"></span>
                  <span className="mockup-dot green"></span>
                  <span style={{ fontSize: '11px', color: '#a8a29e', marginLeft: 'auto', fontFamily: 'monospace' }}>
                    tanya-smith.ru
                  </span>
                </div>
                <div className="mockup-body">
                  <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '12px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.05em' }}>TANYA SMITH</span>
                      <p style={{ fontSize: '10px', color: '#78716c', textTransform: 'uppercase' }}>Ателье модных идей • Пермь</p>
                    </div>
                    <span style={{ background: '#f5ebe0', color: '#8a5a36', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>★★★★★ 5.0</span>
                  </div>

                  <p style={{ fontSize: '12px', color: '#57534e', marginBottom: '12px' }}>
                    Интерактивный лукбук авторских моделей:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                    {models.map((m, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveModel(idx)}
                        style={{
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: activeModel === idx ? '1.5px solid #1c1917' : '1px solid #e7e5e4',
                          background: activeModel === idx ? '#f5f5f4' : '#ffffff',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <strong style={{ fontSize: '12px', display: 'block' }}>{m.title}</strong>
                          <span style={{ fontSize: '11px', color: '#78716c' }}>{m.tag}</span>
                        </div>
                        <span style={{ fontSize: '10px', background: '#e7e5e4', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>{m.fit}</span>
                      </div>
                    ))}
                  </div>

                  <button style={{ width: '100%', padding: '9px', background: '#1c1917', color: '#fff', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>
                    Записаться на примерку (Нативный Dialog)
                  </button>
                </div>
              </div>
            </div>

            <div className="case-info">
              <div className="case-badge-wrap">
                <span className="case-badge primary">Fashion & Haute Couture</span>
                <span className="case-badge">Editorial Typography</span>
                <span className="case-badge">Native Dialog API</span>
              </div>

              <h3 className="case-name">TANYA SMITH Atelier</h3>
              <p className="case-desc">
                Премиальный сайт для авторского ателье индивидуального пошива и коллекций женской одежды в Перми. Кутюрная эстетика, журнальная типографика и удобная запись на примерку за 1 клик.
              </p>

              <ul className="case-features-list">
                <li className="case-feature-item">
                  <span className="feature-check">✓</span>
                  <span><strong>Журнальный стиль:</strong> Шрифтовой дуэт <em>Cormorant Garamond</em> + <em>Montserrat</em> с выверенной сеткой.</span>
                </li>
                <li className="case-feature-item">
                  <span className="feature-check">✓</span>
                  <span><strong>Интерактивный Lookbook:</strong> Просмотр моделей с выбором деталей пошива и сроков готовности.</span>
                </li>
                <li className="case-feature-item">
                  <span className="feature-check">✓</span>
                  <span><strong>Нативная форма записи:</strong> Использование стандартного HTML5 <code>&lt;dialog&gt;</code> без тяжелых модальных скриптов.</span>
                </li>
              </ul>

              <div className="case-actions">
                <a 
                  href="https://github.com/kalapad90-design/tanya-smith-atelier" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <span>Исходный код репозитория</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </article>

          {/* CASE 2: MASTER KEY */}
          <article className="case-card case-card-keys reverse">
            <div className="case-preview">
              <div className="mockup-window">
                <div className="mockup-header">
                  <span className="mockup-dot red"></span>
                  <span className="mockup-dot yellow"></span>
                  <span className="mockup-dot green"></span>
                  <span style={{ fontSize: '11px', color: '#64748b', marginLeft: 'auto', fontFamily: 'monospace' }}>
                    master-key.krasnoyarsk
                  </span>
                </div>
                <div className="mockup-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div>
                      <strong style={{ fontSize: '13px', color: '#38bdf8' }}>МАСТЕР КЛЮЧ</strong>
                      <p style={{ fontSize: '10px', color: '#94a3b8' }}>Красноярск, ул. Щорса, 43</p>
                    </div>
                    <span style={{ fontSize: '10px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>
                      Изготовление от 3 мин
                    </span>
                  </div>

                  <p style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '8px' }}>
                    Интерактивный расчет стоимости:
                  </p>

                  {/* Buttons for types */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginBottom: '14px' }}>
                    {Object.entries(keyTypes).map(([k, item]) => (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setSelectedKey(k)}
                        style={{
                          padding: '8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          textAlign: 'left',
                          background: selectedKey === k ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                          border: selectedKey === k ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.08)',
                          color: selectedKey === k ? '#ffffff' : '#94a3b8',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ marginRight: '4px' }}>{item.icon}</span> {item.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Price display box */}
                  <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '8px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block' }}>{keyTypes[selectedKey].name}</span>
                      <strong style={{ fontSize: '1.25rem', color: '#38bdf8' }}>{keyTypes[selectedKey].price}</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block' }}>Срок:</span>
                      <strong style={{ fontSize: '12px', color: '#e2e8f0' }}>{keyTypes[selectedKey].time}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-info">
              <div className="case-badge-wrap">
                <span className="case-badge primary">Local Service & Conversion</span>
                <span className="case-badge">Real-time Calculator</span>
                <span className="case-badge">VisionOS Aesthetics</span>
              </div>

              <h3 className="case-name">МАСТЕР КЛЮЧ</h3>
              <p className="case-desc">
                Высокотехнологичный лендинг сервиса изготовления ключей в Красноярске. Мгновенная ориентация клиента по каталогу (квартирные, автомобильные смарт-ключи с чипом, сейфы) и прозрачный расчет стоимости.
              </p>

              <ul className="case-features-list">
                <li className="case-feature-item">
                  <span className="feature-check">✓</span>
                  <span><strong>Калькулятор в реальном времени:</strong> Клиент сразу видит цену и время изготовления без звонков и ожидания.</span>
                </li>
                <li className="case-feature-item">
                  <span className="feature-check">✓</span>
                  <span><strong>Интеграция с 2ГИС:</strong> Геолокация, точный адрес (ул. Щорса, 43) и вызов по клику.</span>
                </li>
                <li className="case-feature-item">
                  <span className="feature-check">✓</span>
                  <span><strong>Liquid Glass UI:</strong> Чистый минималистичный дизайн в стиле VisionOS с мягкими стеклянными гранями.</span>
                </li>
              </ul>

              <div className="case-actions">
                <a 
                  href="https://github.com/kalapad90-design/-" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <span>Исходный код репозитория</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Что мы делаем</span>
            <h2 className="section-title">Разработка сайтов от концепта до релиза</h2>
            <p className="section-subtitle">
              В RAf STUDIO мы объединяем визуальный дизайн высокого класса и производительный фронтенд.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">🎨</div>
              <h3>Авторский UI/UX Дизайн</h3>
              <p>
                Разработка дизайн-систем, типографики и макетов, подчеркивающих статус и ценность вашего бренда. Без однотипных шаблонов.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">⚡</div>
              <h3>Front-End Разработка</h3>
              <p>
                Чистый HTML5, современный CSS (Grid, Flexbox, Subgrid) и реактивные интерактивные элементы. Сайты летают даже при плохом мобильном интернете.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">🎯</div>
              <h3>Интерактивные калькуляторы</h3>
              <p>
                Внедрение квизов, калькуляторов стоимости и удобных форм с отправкой заявок в Telegram / CRM для максимальной конверсии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Web Platform & Tech Stack */}
      <section id="stack" className="container" style={{ paddingBottom: '90px' }}>
        <div className="section-header">
          <span className="section-pill">Стандарты разработки</span>
          <h2 className="section-title">Современный веб без компромиссов</h2>
          <p className="section-subtitle">
            Качественный код, проверенный спецификациями W3C и лучшими практиками web.dev:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(18,19,22,0.08)' }}>
            <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>text-wrap: balance</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Все заголовки сбалансированы браузером без висячих строк и искусственных разрывов.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(18,19,22,0.08)' }}>
            <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>Native Dialog & Popovers</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Встроенные браузерные модальные окна со 100% доступностью с клавиатуры и нулевым весом скрипта.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(18,19,22,0.08)' }}>
            <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>Container Queries</strong>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
              Компоненты адаптируются под размер своего контейнера, идеально выглядя в любом контексте.
            </p>
          </div>
        </div>
      </section>

      {/* The Famous Interactive Sticker Slap Footer */}
      <div id="contact">
        <StickerSlapFooter
          wordmark="raf studio"
          homeHref="#"
          navLabel="cases"
          navHref="#cases"
          chatHref="https://t.me/kalapad90"
          chatLabel="написать в telegram"
          jobsLabel="услуги & специализация"
          officeLabel="локация & время"
          contactLabel="связаться"
          email="kalapad90@gmail.com"
          copiedLabel="Email скопирован!"
          note="*Создаю сайты под ключ. Оперативно отвечаю в Telegram и по почте."
        />
      </div>
    </div>
  )
}
