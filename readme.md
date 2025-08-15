# Dinamik Web Sayfası Oluşturma
# Proje Hakkında
Bu proje, bir web sayfasının içeriğini JavaScript kullanarak dinamik bir şekilde oluşturmayı amaçlamaktadır. Projede, sayfanın metinleri ve görselleri statik HTML dosyası yerine, bir JavaScript nesnesi (siteContent) içinden alınarak sayfaya yerleştirilir.
## Proje Yapısı
Proje aşağıdaki dosyalardan oluşmaktadır:
* index.html: Sayfanın ana iskeletini ve içeriği yerleştirmek için gerekli olan boş veya placeholder HTML etiketlerini içerir.
* index.css: Sayfanın tasarımını ve stilini belirleyen CSS dosyası.
* index.js: Sayfanın tüm içeriğini (siteContent nesnesi) barındırır ve bu içeriği index.html dosyasındaki ilgili DOM elementlerine dinamik olarak atar.
## Nasıl Çalıştırılır?
Bu dinamik web sayfasını çalıştırmak için Visual Studio Code (VS Code) ve Live Server uzantısını kullanmanız en pratik yöntemdir.
1. VS Code'u açın. Eğer Live Server uzantısı yüklü değilse, VS Code içindeki uzantılar bölümünden (Ctrl+Shift+X) aratarak yükleyin.
2. Proje klasörünü VS Code'da açın.
3. index.html dosyasına sağ tıklayıp "Open with Live Server" seçeneğini seçin.
Bu adımların ardından tarayıcınız otomatik olarak açılacak ve sayfanın JavaScript ile doldurulmuş canlı halini görebileceksiniz. siteContent nesnesinde yaptığınız herhangi bir değişiklik, sayfayı yenilediğinizde anında güncellenecektir.
## Kazanımlar
Bu proje, aşağıdaki temel JavaScript ve web geliştirme konularında pratik yapmanızı sağlar:
* DOM Manipülasyonu: document.querySelector(), document.querySelectorAll(), textContent ve src gibi metot ve özelliklerle HTML elementlerini seçme ve değiştirme.
* JavaScript Nesneleri: Verileri hiyerarşik bir şekilde düzenleme ve nesneler üzerinden bu verilere erişim.
* Dinamik İçerik Yönetimi: HTML içeriğini statik olarak yazmak yerine, JavaScript üzerinden yönetmenin avantajlarını anlama.
* HTML, CSS ve JS Ayrımı: Kodun farklı sorumluluklara sahip katmanlar halinde nasıl organize edildiğini görme.
* for...in Döngüsü: Bir nesnenin anahtarları üzerinde dönerek dinamik işlemler yapma.