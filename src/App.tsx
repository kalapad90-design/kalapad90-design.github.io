import StickerSlapFooter from './components/StickerSlapFooter'

export default function App() {
  return (
    <main className="portfolio-app">
      <StickerSlapFooter
        wordmark="raf studio"
        homeHref="#"
        navLabel="cases"
        navHref="https://github.com/kalapad90-design"
        chatHref="https://t.me/l8254"
        chatLabel="написать в telegram"
        jobsLabel="услуги & специализация"
        jobs={[
          { title: "Заказать сайт под ключ", href: "https://t.me/l8254" },
          { title: "UI/UX & Редизайн", href: "https://t.me/l8254" },
          { title: "Разработка на React / Web", href: "https://t.me/l8254" }
        ]}
        officeLabel="локация & время"
        address={[
          "Красноярск / Пермь / Remote",
          "Пн–Вс: 09:00 — 22:00"
        ]}
        mapLabel="Смотреть проекты на GitHub"
        mapHref="https://github.com/kalapad90-design"
        contactLabel="связаться"
        email="kalapad90@gmail.com"
        copiedLabel="Email скопирован!"
        note="*Создаю сайты под ключ. Оперативно отвечаю в Telegram и по почте."
        socials={[
          { kind: "telegram", href: "https://t.me/l8254", label: "Telegram" },
          { kind: "github", href: "https://github.com/kalapad90-design", label: "GitHub" },
          { kind: "dribbble", href: "https://github.com/kalapad90-design", label: "Dribbble" }
        ]}
        credits={[
          { role: "Design & Frontend", name: "RAf STUDIO" },
          { role: "Telegram", name: "@l8254" },
          { role: "Interactive", name: "Stickers & SVG Handscript" }
        ]}
        height="100svh"
        wordmarkMaxHeight="48svh"
      />
    </main>
  )
}
