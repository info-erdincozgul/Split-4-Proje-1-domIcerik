const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'Sorular',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Full Stack Web Developer',
    button: 'Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.',
  },
  'bottom-content': {
    'left-h4': 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.',
    'left-content':
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    'middle-h4': "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    'middle-content':
      'Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.',
    'right-h4':
      'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ',
    'right-content':
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye',
    phone: '+90 (216) 550-5905',
    email: 'bilgi@birsirketsitesi.com.tr',
  },
  footer: {
    copyright: 'Copyright Bir Şirket Sitesi 2023',
  },
  images: {
    'logo-img': 'https://i.ibb.co/42PDMF2/logo.png',
    'cta-img': 'https://i.ibb.co/XssVKxk/cta.png',
    'accent-img': 'https://i.ibb.co/5FZmL26/accent.png',
  },
};


const navLinks = document.querySelectorAll('header nav a');
let i = 0;
for (let key in siteContent.nav) {
  navLinks[i].textContent = siteContent.nav[key];
  navLinks[i].classList.add('italic');
  i++;
}

const logoImg = document.getElementById('logo-img');
logoImg.src = siteContent.images['logo-img'];

const headingBir = document.querySelector('.cta-text h1');
headingBir.textContent = siteContent.cta.h1;
const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.images['cta-img'];

const topContentDiv = document.querySelector('.top-content');
const topContentDivs = topContentDiv.querySelectorAll('.text-content');
const topLeftTextContentDiv = topContentDivs[0];
const topRightTextContentDiv = topContentDivs[1];
topLeftTextContentDiv.querySelector('h4').textContent =
  siteContent['top-content']['left-h4'];
topLeftTextContentDiv.querySelector('p').textContent =
  siteContent['top-content']['left-content'];
topRightTextContentDiv.querySelector('h4').textContent =
  siteContent['top-content']['right-h4'];
topRightTextContentDiv.querySelector('p').textContent =
  siteContent['top-content']['right-content'];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent.images['accent-img'];

const bottomContentDiv = document.querySelector('.bottom-content');
const bottomContentDivs = bottomContentDiv.querySelectorAll('.text-content');
const bottomLeftTextContentDiv = bottomContentDivs[0];
const bottomMiddleTextContentDiv = bottomContentDivs[1];
const bottomRightTextContentDiv = bottomContentDivs[2];
bottomLeftTextContentDiv.querySelector('h4').textContent =
  siteContent['bottom-content']['left-h4'];
bottomLeftTextContentDiv.querySelector('p').textContent =
  siteContent['bottom-content']['left-content'];
bottomMiddleTextContentDiv.querySelector('h4').textContent =
  siteContent['bottom-content']['middle-h4'];
bottomMiddleTextContentDiv.querySelector('p').textContent =
  siteContent['bottom-content']['middle-content'];
bottomRightTextContentDiv.querySelector('h4').textContent =
  siteContent['bottom-content']['right-h4'];
bottomRightTextContentDiv.querySelector('p').textContent =
  siteContent['bottom-content']['right-content'];

const contactSection = document.querySelector('.contact');
const contactHeading = contactSection.querySelector('h4');
const contactParagraf = contactSection.querySelectorAll('p');
contactHeading.textContent = siteContent.contact['contact-h4'];
contactParagraf[0].textContent = siteContent.contact.address;
contactParagraf[1].textContent = siteContent.contact.phone;
contactParagraf[2].textContent = siteContent.contact.email;

const footer = document.querySelector('footer a');
footer.textContent = siteContent.footer.copyright;
footer.classList.add('bold');
