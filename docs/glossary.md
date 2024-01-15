---
id: glossary
title: SÖZLÜK
sidebar_label: Sözlük
sidebar_position: 7
description: 'Avail ile ilgili temel terimler, tanımlar ve kavramların sözlüğü.'
keywords:
  - docs
  - avail
  - Glossary
  - Monolithic
  - data availability
image: https://availproject.github.io/img/avail/AvailDocs.png
---

:::note KAVRAMLAR İÇİN REFERANS SÖZLÜK

Sözlük, Avail belgeleri geliştirilme aşamasındayken, temel kavramların doğru kullanılması için detaylandırılmıştır. Herhangi bir sorunuz veya şüpheniz varsa lütfen Avail ekibiyle iletişime geçmekten çekinmeyin.

:::

## Uygulama Zinciri (App-Chain)

Uygulama zincirleri, geliştiricilerin, paylaşılan blokzincirinin kısıtlamaları olmaksızın, kullanım ihtiyaçlarına göre özelleştirerek uygulamalarını optimize etmelerine olanak tanır. Belirli uygulamalara hizmet eden bağımsız zincirler olarak işlev görerek gelişmiş performans ve ölçeklenebilirlik sağlarlar. Uygulama zincirleri ayrıca geliştiricilerin bir validatör setini yönetme ve sürdürme ihtiyacını ortadan kaldırarak geliştirme sürecini basitleştirir. Avail, farklı katman 2 veya 3 ölçeklendirme çözümlerini temel alabilen modüler uygulama zinciri mimarilerinin oluşturulmasına olanak tanır.

## AVL

AVL, Avail ağının yerel token'ıdır. Şu anda, parasal değeri olan halka açık bir "AVL" token’i yoktur; yalnızca testnet amaçları için kullanılmaktadır.

## Avail JS Uygulamaları

Avail JS Apps UI, Avail ağını görselleştirmek ve etkileşimde bulunmak için kullanılan [<ins>Polkadot JS Apps UI</ins>](https://polkadot.js.org/apps/)'nin çatallanmış bir sürümüdür.

## BABE

Substrate altyapısının bir parçası olan BABE (Blind Assignment for Blockchain Extension), Avail'in kullandığı blok üretim mekanizmasıdır. Daha fazla ayrıntı için lütfen [<ins>Polkadot Wiki</ins>](https://wiki.polkadot.network/docs/learn-consensus#block-production-babe)'ye bakın.

## Fon Bağlama (Bonding)

Fon bağlama, Avail ağının operasyonlarına katılmak için tokenleri kilitleme veya yatırma işlemidir. Bu, fikir birliği sürecine katılmayı ve ağın güvenliğini sağlamayı içerir.

## Adaylıktan Çekilme (Chilling)

Chilling, aday gösterme veya doğrulama rollerinden kasıtlı olarak çekilme eylemini ifade eder. Hem validatörler hem de aday gösterenler, bir sonraki dönemde etkili olacak şekilde adaylıktan çekilmeyi başlatabilir. Buna ek olarak, çekilme, bir validatörün diğer validatörler tarafından aktif kümeden dışlanmasını ifade edebilir ve onları yaklaşan fikir birliği döngüsü için aday olarak uygunsuz hale getirebilir.

## Komisyon
Validatörler ağdaki blok üretimi için ödüller kazanır. İlk önce toplam ödüllerinden düşülen bir komisyon oranı belirlerler. Kalan ödüller daha sonra bu komisyon oranına göre o validatörü destekleyen adaylara dağıtılır.

## Fikir Birliği (Consensus)
Fikir birliği, node’ların blokzincirindeki hangi verilerin gerçek ve doğru olarak doğrulanabileceği konusunda bir anlaşmaya vardığı mekanizmayı ifade eder. Fikir birliği protokolü, işlemlerin nasıl düzenleneceğini ve Avail’deki [<ins>NPoS</ins>](#nominated-proof-of-stake) ile zincire yeni blokların nasıl ekleneceğini belirler.

## Denetleyici Hesabı (Controller Account)

Denetleyici hesabı, staking faaliyetlerini yönetmek ve ağdaki işlemleri yürütmekle görevlidir. Bu, validatörleri aday gösterme, fonları bağlama ve çözme ve işlem ücretlerini ödeme gibi sorumlulukları içerir. Aktif rolü göz önüne alındığında, denetleyici anahtarı daha sık kullanılır ve hesabın günlük işlemleri için gereklidir.

## Veri Doğrulama (Data Attestation)

Veri doğrulama, verilerin doğruluğunun ve bütünlüğünün onaylanmasını içerir. Avail'deki bu süreç, zincirdeki verilerin hem erişilebilir hem de doğru olmasını sağlar. Bir Avail blok başlığı iki doğrulamayı içerir: KZG polinom commitment’leri ve Merkle ağacı kökünden yapılanmış yaprak niteliğindeki veri blobları. Avail validatörlerinin nitelikli çoğunluğu, [<ins>GRANDPA</ins>](#grandpa) protokolünü kullanan başlıklardan oluşan zinciri imzalayarak başlıklar üzerinden kesinliğe ulaşırlar.

## Veri Kullanılabilirliği Komitesi (DAC)

Veri Kullanılabilirliği Komitesi (DAC), zincir dışı verilerin kopyalarını korumaktan ve talep üzerine erişilebilirliğini sağlamaktan sorumlu bir grup node’dan oluşur. DAC'ler, genellikle zincir dışı ölçeklendirme olarak adlandırılan farklı bir katmandaki işlemleri yöneterek bir blokzincirinin verimini artıran ölçeklendirme çözümlerinin ayrılmaz bir parçası olabilir. Genellikle belirli Katman 2 (L2) çözümlerine hitap eden DAC'lerin aksine Avail, evrensel olarak uygulanabilir bir veri kullanılabilirliği katmanı olarak öne çıkmaktadır. Otonom bir zincir olarak çalışarak veri kullanılabilirliğine daha tarafsız ve çok yönlü bir yaklaşım sağlar.

## Veri Kullanılabilirliği Örneklemesi (DAS)

Veri kullanılabilirliği örneklemesi, hafif istemcilerin tüm blokları indirmeden verilerin kullanılabilirliğini onaylamasına olanak tanır. Bu yöntem sayesinde, ışık istemcileri küçük blok veri parçaları için birkaç tur rastgele örnekleme yapar. Her başarılı turda, verilerin kullanılabilir olduğuna dair güven artar. Işık düğümü belirli bir güven eşiğine ulaştığında, blok verilerinin erişilebilir olduğunu kabul eder.

## DHT (Dağıtılmış İşlem Özeti Tablosu)

Dağıtılmış İşlem Özeti Tablosu (DHT), geleneksel işlem özeti tablosuna benzer bir arama hizmeti sunan merkezi olmayan bir sistemdir. Anahtar-değer çiftlerini tutarak eşlerin belirli bir anahtara karşılık gelen değeri hızlıca bulmasını sağlar. DHT, özellikle rastgele örnekleme ve kanıt doğrulama için veri hücrelerinin paylaşılması sürecinde çok önemlidir. Node’ların sağlayıcılar hakkında bilgi depolamasını ve tanımlamasını kolaylaştırır. DHT aracılığıyla ağdaki node’lar birbirine bağlanır, hücre keşfi ve erişimi kolaylaştırır.

## Ayrıştırma (Decoupling)

Blokzinciri bağlamında ayrıştırma, farklı işlevlerin bağımsız modüllere veya katmanlara stratejik olarak ayrılması anlamına gelir. Bu sayede modüler bir blok zinciri, her işlevi yerine getirme ihtiyacının yükünü taşımak yerine belirli görevlerde uzmanlaşabilir ve mükemmelleşebilir. Bu modüler yaklaşım verimliliği, esnekliği ve ölçeklenebilirliği artırarak her bir bileşenin bağımsız olarak gelişmesine ve optimize edilmesine olanak tanır.

## İkircikli onay (Equivocation)

İkircikli onay, bir validatörün iki veya daha fazla çelişkili blok veya mesajı imzalamasıdır. Bu kasıtlı veya kasıtsız olarak yapılabilir.

## Dönem (Era)

Avail'de bir dönem, validatör setinin belirlendiği ve ödüllerin dağıtıldığı önceden tanımlanmış sayıda oturumu temsil eder. Her dönemin başlangıcında, validatörler yatırdıkları miktara göre aktif kümenin bir parçası olmak üzere seçilir. Seçim yapılırken, validatörün bir önceki dönemdeki performansı gibi diğer faktörleri de göz önünde bulundurulur - özellikle, adaylıktan çekilme veya ilişiği kesilme nedeniyle inaktif değillerse. Yeni bir validatör mevcut validatörlerden daha yüksek bir miktar stake ederse ya da aktif bir validatör düşük performans gösterirse, gelecek dönem için aktif sette değiştirilebilir.

## Devir (Epoch)

Epoch, belirli bir doğrulama node’ları grubunun işlemleri doğrulama ve bunları blokzincirine ekleme görevini üstlendiği belirlenmiş bir zaman dilimidir. Bir devirin süresi farklı blokzinciri ağlarında değişiklik gösterebilir.

## Yürütme (Execution)

Geleneksel blokzincirlerinde yürütme, node'ların blokzincirini durumlar arasında geçişini sağlamak için işlemleri nasıl işlediğini ifade eder. Ancak Avail farklı şekilde çalışır. Modüler bir temel zincir olan Avail, genel amaçlı bir yürütme katmanına sahip değildir. Bunun yerine, yürütme, rollup'lar gibi diğer katmanlarda gerçekleşir ve elde edilen veriler, Avail'in kendisinde yürütmeye tabi tutulmadan ham haliyle Avail'e gönderilir.

Avail'in bağlamında "Fikir Birliği", entegre yürütme katmanlarına sahip tipik blokzincirlerine kıyasla daha özel bir anlam taşır. Avail için fikir birliği, verilerin uygun şekilde yayınlandığına dair ağın mutabakat sağladığını ifade eder. Açık söylemek gerekirse, Avail'teki doğrulayıcı node'lar, blokların geçerliliğini onaylamak için bir ön koşul olarak işlem yürütmez. Bakiye transferleri gibi birkaç istisna dışında, validatörler öncelikle bloklar içinde yayınlanan verilerin doğru paketlendiğini onaylar. Bu kolaylaştırılmış yaklaşım, Avail'in daha büyük blok boyutlarını barındırabilmesinin temel nedenidir. Validatörler blok başına daha az iş üstlendiğinden, blok boyutunun artırılması diğer blokzincirlerine kıyasla daha düşük bir etkiye sahiptir.

## Kesinlik Aracı (Finality Gadget)

Kesinlik aracı, validatörlerin imzalı mesajlar aracılığıyla taahhütte bulunmasını gerektirerek blokzinciri durumunun kesinliğini sağlayan bir mekanizmadır. Yeterince doğrulandıktan sonra durum (state) son halini alır ve kötü niyetli değişikliklere karşı güvenli hale gelir.

## Hile Kanıtları (Fraud Proofs)

Hile kanıtları, Avail üzerinde bir işlemin veya durum geçişinin meşruiyetini doğrulamak için kullanılan kriptografik kanıtlardır. Herhangi bir node, P2P ağ üzerinden bir hile kanıtı oluşturabilir ve paylaşabilir. Uygulama istemcileri daha sonra bu kanıtları değerlendirebilir ve buna göre yanıt verebilir.

## GRANDPA

Substrate altyapısının bir parçası olan GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement), Avail'in kullandığı kesinlik aracıdır. Protokolün tam açıklaması için lütfen [the GRANDPA paper](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) makalesine bakınız.

## KZG Taahhütleri (KZG Commitments)

Aniket Kate, Gregory M. Zaverucha ve Ian Goldberg tarafından 2010’da öncülük edilen KZG taahhütleri, polinomlara taahhütte bulunmaları için özlü bir yöntem sunar. Bu taahhütler son zamanlarda özellikle PLONK benzeri sıfır bilgi çerçevelerinde önem kazanmıştır.

Avail'in tasarımında, KZG taahhütleri birkaç temel nedenden dolayı kullanılmaktadır:

- Blok başlıklarına dahil etmek için ideal olan kısa ve öz taahhütler sağlarlar.
- Kısa açılışları destekleyerek hafif istemci kullanılabilirlik doğrulamasını kolaylaştırırlar.
- Güçlü kriptografik bağları, sahte taahhütlerin oluşturulmasını hesaplama açısından zorlaştırarak hile kanıtlarının önlenmesini sağlar.

## Kademlia DHT (Kad-DHT)

Kad-DHT, node'ları ve verileri akor halkasına -kimliklerine göre sıralanmış node'ların mantıksal düzenlemesine- göre düzenleyen özel bir Dağıtılmış İşlem Özeti Tablosu (DHT) varyantıdır. Avail, veriyi depolama ve veriyi yeniden alma için merkezi olmayan bir ağ oluşturmak üzere Kad-DHT'yi kullanır. Bu yapıda, her node verilerin bir kısmını tutmakla görevlidir. Node'lar verilere erişmek için doğrudan iletişim kurabilirler. Avail, veri hücrelerini depolamak ve hangi eşin belirli bir veri segmentine sahip olduğunu belirlemek için Kad-DHT'yi kullanır ve matris veri hücreleri benzersiz bir şekilde Eş Kimlikleriyle eşleştirilir.

## libp2p

libp2p,[<ins>libp2p</ins>](https://libp2p.io/), eşler arası (P2P) uygulamalar oluşturmak için tasarlanmış açık kaynaklı modüler bir ağ yığınıdır. Çeşitli transfer protokolleri arasında veri aktarımı için esnek bir çerçeve sunar. Avail, veri kullanılabilirliğine adanmış merkezi olmayan bir ağ kurmak için libp2p'yi entegre ederek işlem verilerinin verimli bir şekilde depolanmasını ve validatörlere ve tam node'lara dağıtılmasını sağlar.

## Hafif İstemci (Light Client)

Hafif istemciler, kullanıcıların tüm blokzincirini senkronize etmeden bir blokzinciri ağıyla etkileşime girmesini sağlayarak hem merkeziyetsizliği hem de güvenliği korur. Tipik olarak, tam blok içeriğini atlayarak yalnızca blokzinciri başlıklarını alırlar. Avail'in hafif istemcileri, Veri Kullanılabilirliği Örneklemesi kullanarak bunu geliştirir. Bu yöntem, bir bloğun rastgele segmentlerini indirip doğrulayarak blok içeriğinin kullanılabilirliğini sağlar.

## Ana Ağ (Mainnet)

Bir ana ağ, tamamen operasyonel ve halka açık bir blokzinciri ağıdır. Bir blokzinciri ağının "üretim" versiyonudur ve gerçek dünya işlemlerinin ve uygulamalarının dağıtıldığı yerdir.  Avail'in ana ağı hakkında daha fazla bilgi için  [Roadmap to Mainnet blog post](https://blog.availproject.org/road-to-mainnet-september-2023/) Mainnet'e Giden Yol Haritası blog gönderisini inceleyiniz.

## Modüler Blokzinciri (Modular Blockchain)

A modular blockchain specializes in managing specific tasks while delegating other responsibilities to distinct layers or components.

## Monolitik Blokzinciri (Monolithic Blockchain)

Monolitik bir blokzinciri, tüm temel işlevleri (Yürütme, Mutabakat, Emir Verme, Veri Kullanılabilirliği) tekil bir blok zinciri yapısı içinde kapsar.

## Aday Gösterilen Hisse İspatı (Nominated Proof of Stake)

Nominated Proof of Stake (NPoS), kullanıcıların kendileri için blokları işlemek üzere validatörleri aday gösterdikleri bir fikir birliği algoritmasıdır. Bu validatörler işlemleri doğrular ve blokzincirine ekler. Validatörler, hizmetleri karşılığında ilgili ağın tokenlerini ödül olarak alırlar. Daha sonra bu ödüllerin bir kısmını, belirlenen bir komisyon oranına göre aday gösterenlere komisyon olarak verirler. Avail, Substrate içinde uygulandığı şekliyle NPoS kullanır.

## Aşırı Başvuru Talebi (Oversubscribed)

Aşırı talep, fikir birliği sürecine katılmak isteyen adayların sayısının mevcut slotları aştığı bir durumu ifade eder.

## Ölçeklenebilirlik (Scalability)

Avail'deki ölçeklenebilirlik, katılımcıların ve kullanıcıların deneyimlerinin etkilenmemesini sağlayarak zincir tarafından dağıtılan veri hacmini artırma kapasitesiyle ilgilidir. Avail bunu, DA'yı zincir dışına çıkaran modüler bir yaklaşım benimseyerek başarır ve bu da ana ağın öncelikle yürütmeye odaklanmasına olanak tanır. Bu modüler tasarım, temel yapıların bireysel optimizasyonunu kolaylaştırarak her bir bileşenin kendi benzersiz gereksinimlerine göre ölçeklendirilmesini sağlar.

## Oturum (Session)

Oturum, sabit bir validatör setinin çalıştığı belirli bir süreyi ifade eder. Validatörler yalnızca oturumlar arasındaki geçişlerde kümeye girebilir veya çıkabilir.

## Mutabakat (Settlement)

Avail ve modüler blokzincirleri bağlamında mutabakat, modüler katmanların doğru yürütülmüş işlem sonuçları üzerinde anlaştığı süreci ifade eder. Bu, gerekli tüm uyuşmazlıkların çözüm süreçlerini içerir. Avail, modüler bir temel zincir olarak çalıştığından, ham işlem verilerini yürütmeden yalnızca alır ve depolar. Bu veriler, geçerli işlemlerden potansiyel spam'lere kadar geniş bir yelpazeyi kapsayabilir.

Bu işlemlerin fiilen yürütülmesi ve sonuçlarının daha sonra doğrulanması diğer katmanlarda veya sistemlerde gerçekleşir. Bu katmanlar sonuç üzerinde bir anlaşmaya vardığında sonuçlar "karara bağlanır". Örneğin, bir validium söz konusu olduğunda, işlem verileri Avail'de yayınlanır, sıralayıcılar daha sonra bu işlemleri yürütür ve son olarak, bu yürütmelerin kanıtları mutabakat için Ethereum'a gönderilir. Farklı modüler yapılar mutabakat için farklı mekanizmalar veya platformlar kullanabilir, ancak temel prensip aynı kalır: işlemlerin doğru sonucunun belirlenmesi ve üzerinde mutabık kalınması.

## İlişiği Kesme (Slashing)

Kesme, hatalı davranan validatörlere uygulanan bir cezadır. Örneğin, bir validatör ikircikli davranırsa, yani iki veya daha fazla çelişkili bloğu imzalarsa ağır ceza kesilebilir. Kesme cezası, validatörün hissesinin bir kısmını kaybetmesine neden olabileceğinden ciddi bir ceza olabilir.

## Sovereign Rollup

Sovereign rollup, işlemlerini genellikle emir verme ve veri kullanılabilirliği için başka bir blokzincirine yayınlayan, ancak kendi mutabakatını gerçekleştiren bir blokzinciri türüdür. Bu, sovereign rollup'ların kendi kanonik zincirlerine ve geçerlilik kurallarına sahip olduğu ve hangi işlemlerin geçerli olduğunu belirlemek için bir mutabakat katmanına güvenmeleri gerekmediği anlamına gelir.

## Zula Hesabı (Stash Account)

Zula hesabı, stake etmek/bağlamak istediğiniz tokenları tutar. Bu hesap bir soğuk cüzdan hesabı gibidir ve tokenları bağlamak ve çözmek için ve ayrıca denetleyici hesabını belirlemek için kullanılır.

## Testnet

Testnet, blokzinciri uygulamalarını ana ağa dağıtılmadan önce test etmek ve hatalarını ayıklamak için kullanılan simüle edilmiş bir blokzinciri ağıdır. Test ağları genellikle halka açıktır ve herkes bunlara katılabilir.

## Validium

Validium’lar, Ethereum (L1) gibi birincil katmandaki işlem verilerini, zincir dışında depolamak için tasarlanmıştır. Avail'in ölçeklenebilir ve özel modülünün avantajlarından sorunsuz bir şekilde yararlanabilirler. İşlem verilerini bir DAC'ye [<ins>DAC</ins>](#data-availability-committee-dac) veya diğer alternatiflere yönlendirmek yerine, Validium'lar bu verileri Avail'e işleyebilir.

Rollup gibi bir katman 2 çözümü, ana zincir yerine zincir dışı veri depolamayı seçerek bir Validium'a dönüşebilir. Bir Validium geleneksel anlamda tam olarak bir "katman 2" olmadığı için bu ayrım inceliklidir; verileri L1'e göndermez ve farklı güven hususları ortaya çıkarır. Bununla birlikte, birçok bağlamda, yine de bir katman 2 çözümü olarak kategorize edilir. Temel olarak Validium, Avail'in yaklaşımına benzer şekilde zincir dışı veri kullanılabilirliği ile birleştirilmiş bir rollup olarak tanımlanabilir.

## Validator

Avail validatörü, işlemleri doğrulamaktan ve bunları blokzincirine eklemekten sorumlu olan full node’dur.

## Volition

Volition'lar, zero-knowledge rollup'ların gelişmiş bir formunu temsil eder ve geliştiricilere işlem verileri için ister zincir üzerinde ister zincir dışında olsun depolama konumuna karar verme esnekliği sunar. Bu uyarlanabilirlik, geliştiricilerin uygulamalarının özel gereksinimlerine göre hem maliyet hem de DA açısından optimizasyon yapabilmelerini sağlar. Avail bağlamında volition'lar, platformun sağlam DA katmanından yararlanarak zincir dışı verilerin kolayca erişilebilir ve doğrulanabilir kalmasını sağlayabilir ve böylece merkezi olmayan uygulamaların güvenliğini ve verimliliğini artırabilir.
