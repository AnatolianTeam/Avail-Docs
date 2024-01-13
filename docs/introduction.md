---
id: introduction
title: Avail Nedir?
sidebar_label: Avail Nedir?
sidebar_position: 2
description: Learn about Avail's data availability chain
keywords:
  - docs
  - avail
  - availability
  - scale
  - rollup
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Avail: **Data Availability’e<sup>1</sup> odaklanan bir temel katman.**

Avail, yeni nesil, trust-minimized<sup>**2**</sup> uygulamaların ve sovereign rollup'ların ihtiyaçlarını karşılamak üzere tasarlanmış, data availability’e odaklanan bir temel katmandır. Avail'in gücü, light client’ların peer-to-peer<sup>**3**</sup> ağ üzerinden sampling<sup>**4**</sup> yoluyla veri kullanılabilirliğini kolayca doğrulamasını sağlayan yenilikçi güvenlik yaklaşımında yatmaktadır. Avail'in modüler yaklaşımı, geliştiricilerin validator setleri veya token ekonomisiyle ilgili endişelenmelerine gerek kalmaması nedeniyle blokzinciri entegrasyonunu basitleştirir. Avail'in benzersiz veri kullanılabilirliği arayüzü ve güçlü güvenlik özellikleri sayesinde, geliştiriciler zero-knowledge<sup>**5**</sup> veya fraud-proof<sup>**6**</sup> temelli blokzinciri uygulamalarını daha fazla verimlilik ve kolaylıkla oluşturabilirler.

Avail, temelde işlem sıralamasına ve yayımlanmasına öncelik verirken, kullanıcıların tüm blokları indirmeleri gerekmeden blok verilerinin kullanılabilirliğini doğrulamalarını sağlar. Avail'in veri agnostik yapısı, onu tanımlayan özelliklerden biridir. EVM, WASM ve yeni bir custom runtimes’da dahil olmak üzere çeşitli execution<sup>**7**</sup> ortamlarını destekler, bu da çeşitli blokzinciri uygulamaları için çok yönlü bir temel oluşturur.
:::info
<sup>**1**</sup>data availability: verinin erişilebilir/kullanılabilir olup olmaması ile ilgili durum.<br />
<sup>**2**</sup>trust-minimized: üçüncü taraf güveni gerektirmeyen çözüm.<br />
<sup>**3**</sup>peer to peer (P2P): eşler arası, her yazılım çalıştıran bilgisayarın, yazılım çalıştıran diğer bilgisayar ile eşit düzeyde ağa katılıp aynı kaynağı kullanması.<br />
<sup>**4**</sup>data availability sampling: bütün halindeki verinin, küçük bir parçasına bakılarak yapılan kontrol.<br />
<sup>**5**</sup>zero knowledge: sıfır bilgi kanıtı.<br />
<sup>**6**</sup>fraud-proof: hile kanıtı.<br />
<sup>**7**</sup>execution: yürütme.
:::
<details>
<summary>L2 ölçeklenebilirliğine genel bakış:</summary>

Geleneksel blokzinciri ağlarında, full node’lar* tüm işlemleri gerçekleştirerek bütünlüğü ve güvenliği sağlar. Ancak, güvenli olsa da bu model, kapsamlı işlem gereksinimleri nedeniyle verimi ve ölçeklenebilirliği sınırlar. Katman 2 (L2) çözümleri, bu kısıtlamaları ele almak için ortaya çıkmış ve işlem yürütmenin büyük kısmını ana zincirden (Katman 1) uzaklaştırarak gelişmiş performans sunmuştur.

Avantajlarına rağmen L2 çözümleri, özellikle hem verimli hem de uygun maliyetli bir şekilde veri kullanılabilirliğini ve işlem bütünlüğünü korumada zorluklarla karşılaşmaktadır. Rollup'lar, işlemleri zincir dışında gerçekleştirerek ve ardından toplu sonuçları ana zincire geri göndererek bu zorlukları azaltmayı amaçlar. Bu yaklaşım, Katman 1 üzerindeki yükü önemli ölçüde azaltarak daha düşük operasyonel maliyetlere ve daha düşük işlem ücretlerine yol açar ve blokzinciri ağları için daha ölçeklenebilir bir çözüm sunar.

Rollup'lar iki ana biçimden meydana gelir:

**Optimistic Rollups:**

Optimistic Rollup’lar, aksi kanıtlanmadıkça işlemlerin geçerli olduğunun varsayıldığı “presumed validity” ilkesine göre çalışır. Yaşam döngüleri şunları içerir:

1. **İşlemleri Toplama**: İşlemler sıralayıcılar(sequencer) tarafından toplanır ve bir rollup bloğu haline getirilir.
2. **Blok Gönderimi**: Bu blok, güvenlik önlemi olarak bir teminat ile Ethereum tabanlı bir akıllı sözleşmeye sunulur.
3. **Geçerlilik Varsayımı**: İşlemler sunulduktan sonra geçerli kabul edilir.
4. **İtiraz Süresi**: Hile kanıtlarının sunulması için bloğun geçerliliğine itiraz edilmesine izin veren bir süre.
5. **Sonuç**:
   - **İtiraz Başarılı**: Teminat kaybedilir ve blok tersine çevrilir.
   - **İtiraz Yok**: İtiraz edilmediği takdirde blok kesinleşir.


**ZK Rollups:**

ZK Rollup'ları, güvenlik ve veri bütünlüğüne odaklanarak işlem geçerliliğine ilişkin açık kriptografik kanıtlarını gerektirir. Yaşam döngüleri şunları içerir:

1. **Geçerlilik Gereksinimi**: Blok gönderiminden önce bir geçerlilik kanıtı sağlanmalıdır.
2. **Blok Gönderimi**: Bloklar gerekli geçerlilik kanıtı ile birlikte gönderilir.
3. **Geçerlilik Varsayımı**: Optimistic Rollup’ların aksine, geçerlilik kanıtı önceden talep edilir.
4. **Veri Kullanılabilirliği**: Geçerlilik kanıtları veri kullanılabilirliğinden bağımsız olsa da, zincirin güvenliği büyük ölçüde buna bağlıdır.
5. **Veri Kullanılamazlığının Sonuçları**:
    - **State<sup>1</sup> Yeniden Oluşturma**: Kullanıcılar ana zincir verilerini kullanarak durumu yeniden oluşturabilir.
    - **Sequencer<sup>2</sup> Müdahalesi**: Diğer sıralayıcılar durumu geri yüklemek ve işlemlere devam etmek için devreye girebilir.

Yine de, veri kullanılabilirliği ile ilgili kısıtlamalar vardır.
:::info
<sup>**1**</sup>State: durum<br />
<sup>**2**</sup>Sequencer: sıralayıcı
:::

</details>

## Veri Kullanılabilirliği

<details>
<summary>Veri kullanılabilirliği sorunu nedir?</summary>

Veri kullanılabilirliği sorunu, blokzinciri ve dağıtık defter teknolojilerinde kritik bir sorundur ve tüm işlem verilerinin ağ genelinde halka açık ve doğrulanabilir hale getirilmesi gerekliliğine odaklanır. Bu zorluk, blokzincirinin bütünlüğü ve güvenliğinin ayrılmaz bir parçasıdır.

Blokzinciri sistemlerinde, her bloğun işlem verilerinin node’lar* tarafından doğrulanması gerekir. Sorun, node<sup>**1**</sup>’lar işlem verilerini indirip yeni blokları doğrulamaya çalıştığında ortaya çıkar. Bu sorunun özü sadece verilerin yayınlanması değil, aynı zamanda tüm katılımcılara eşit erişimi garanti ederek ağ genelinde güvenilir bir şekilde dağıtılmasını sağlamaktır.

Veri kullanılabilirliği sorunu, çeşitli nedenlerden ötürü L2 ağlarında özellikle önemlidir:

- **Zincir Dışı İşlemler**: L2 çözümleri ölçeklenebilirliği artırmak için işlemleri ana zincir dışında işler. Ancak bu durum, L1 blokzincirine hemen kaydedilmediği için tüm işlem verilerinin eksiksiz ve doğru olduğunu doğrulama konusunda zorluklara yol açabilir.

- **Katman 1'e Güvenlik Bağımlılığı**: L2 ağları işlemleri gerçekleştirmek için bağımsız olarak çalışsa da güvenlik için L1'e bağımlıdır. L2'den L1'e eksiksiz ve doğru veri aktarımının sağlanması, genel ağın bütünlüğünün korunması için hayati önem taşır.

- **Çözüm Mekanizmaları Veriye Bağımlıdır**: L2 ağları uyuşmazlıkların çözümü için hile kanıtları gibi mekanizmalar kullanabilir. Bu mekanizmaların etkinliği, işlem verilerinin kullanılabilirliğine ve erişilebilirliğine bağlıdır.

- **Şeffaflık ve Güven Sorunları**: Şeffaflık, blokzinciri teknolojisinin temel bir ilkesidir. L2 ağlarında, kullanıcıların işlemleri bağımsız olarak doğrulaması mümkün olmayabileceğinden, veri kullanılabilirliğindeki herhangi bir taviz güven sorunlarına yol açabilir.

- **Doğrulamada Artan Karmaşıklık**: L2'nin eklenmesi, verilerin ana zincire doğru bir şekilde geri bildirilmesini sağlamada karmaşıklık yaratır. Bu da veri kullanılabilirliği sorunları riskini artırarak ağın güvenilirliğini etkiler.
:::info
<sup>**1**</sup>node: düğüm; yazılım indiren, çalıştıran, ağa katılan her bilgisayar veya makine.
:::
</details>

### Katman 2'lerde Veri Kullanılabilirliği

L2 çözümlerinde veri kullanılabilirliği iki yöntem olarak sınıflandırılabilir:

- **Zincir Üzerinde Veri Kullanılabilirliği**: Tüm işlem verileri L1 zincirinde saklanır, daha yüksek güvenlik sunar ancak daha yüksek maliyetlidir.
- **Zincir Dışı Veri Kullanılabilirliği**: Veriler zincir dışında saklanır ve yalnızca kriptografik hash<sup>1</sup>’ler zincir üzerinde bulunur. Bu yöntem uygun maliyetlidir ancak veri erişimi için harici varlıklara bağlıdır.

Bu yöntemler L2'lerin state<sup>2</sup> yönetimini ve L1 ile etkileşimi geliştirmedeki rolünü vurgular.

### Katman 2 Verilerini Zincir Dışına Çıkarma

Rollup uyarlamaları, işlem sürecinin bütünlüğünü korurken zincir dışı veri kullanılabilirliği de sunan ölçeklenebilirlik çözümleri sınıfını temsil eder. Bu çözümler aşağıdaki gibidir:

- **Validium'lar: ZK Rollup'ları + Zincir Dışı DA**
- **Optimium’lar: Optimistic Rollup’ları + Zincir Dışı DA**
- **Volition’lar: ZK Rollup'ları + Validium’lar**
- **Sovereign Rollup’ları: Özel DA ve Güvenlik Modelleri ile Bağımsız Rollup'lar**

Veri kullanılabilirliğini zincir dışına taşımak, harici veri yöneticilerine güvenme ihtiyacı nedeniyle, doğası gereği ek güven bağımlılıklarını da beraberinde getirir.

:::info
<sup>**1**</sup>hash: işlem özeti; verileri rastgele bir sayı ve harf dizisine dönüştürmek için algoritmik bir işlem uygulanmasını ifade eder. Böylece, blokzincirine girilmek istenen veri, zincir içerisinde yer edinmesini sağlayan dijital bir parmak izi haline gelir. <br />
<sup>**2**</sup>state: durum; ağın son durumunu ifade eder; bir programdaki tüm değişkenlerin kümesi ve herhangi bir zamandaki değerleridir.
:::
<details>
<summary>Validium’lar nedir?</summary>

Validium'lar, geçerlilik kanıtlarını kullanmaya devam ederken veri kullanılabilirliğini zincir dışına kaydıran ZK Rollup<sup>**1**</sup>'larının doğrudan bir uyarlamasıdır.

Zincir dışı hesaplama ve sağlam geçerlilik kanıtları ile karakterize edilen bir ölçeklendirme çözümleri sınıfını temsil ederler. Geleneksel yaklaşımların aksine, Validium'lar Ethereum ana zincirinde veri depolamaz ve bu da işlem verimini önemli ölçüde artırır. Bu sistemlerin temel taşı, ZK-SNARK<sup>**2**</sup>'lar veya ZK-STARK<sup>**3**</sup>'lar gibi sıfır bilgi kanıtlarını kullanmaktır. Bu kriptografik araçlar, bir tarafın beyanının doğruluğunu, beyanın geçerliliğinin dışında herhangi bir ek bilgi vermeden diğerine teyit etmesini sağlar. 

Validium'larda, tüm işlemlerin bütünlüğü bu geçerlilik kanıtları aracılığıyla güvence altına alınırken, veri kullanılabilirliği zincir dışında korunur. Bu mimari, kullanıcıların bir Merkle kanıtı sağlayarak para çekme işlemlerini gerçekleştirmelerine olanak tanır. Bu tür kanıtlar, bir kullanıcının para çekme işlemini içerdiğini doğrulayabilir ve zincir üzerindeki sözleşmenin para çekme işlemini kolaylaştırmasını sağlar.

Validium'lar ve Ethereum arasındaki etkileşimler bir dizi akıllı sözleşme aracılığıyla düzenlenir. Bu kurulumdaki birincil bileşen ana tasdik sözleşmesidir. Bu sözleşme, blok üreticilerinin sunduğu Merkle veri kökleri olarak temsil edilen durum beyanlarını saklar. Ek olarak, bir doğrulama sözleşmesi, durum geçişleri sırasında geçerlilik kanıtlarının doğrulanmasında kritik öneme sahiptir ve Validium'ların Ethereum ekosistemi içinde sorunsuz entegrasyonunu ve çalışmasını sağlar.

:::info
<sup>**1**</sup>ZK-Rollup’lar: Elindeki bir bilginin tamamını göstermeden, bilgiyi doğrulamak isteyenlere, bu bilginin yalnızca gereken kısmını göstererek bilgiye sahip olunduğunu kanıtlamaya yarayan sıfır bilgi kanıtı teknolojisini kullanan Rollup’ları ifade eder.<br />
<sup>**2**</sup>ZK-SNARK'lar (Zero-Knowledge Succinct Non-interactive ARgument of Knowledge): Zero-knowledge “sıfır bilgi” demektir. SNARK ise; Succint “kısa ve öz”, Non-interactive “etkileşimsiz”, ARgument of Knowledge “bilgi kanıtları” demektir.<br />
<sup>**3**</sup>ZK-STARK'lar (Zero-Knowledge Scalable Transparent ARgument of Knowledge): Ölçeklenebilir ve Şeffaf Sıfır Bilgi Kanıtları. ZK-STARK temelde yine bir SNARK’tır. SNARK’tan farklı olmasının sebebi ise, kanıt üretirken kullandığı yöntemdir.
:::
</details>

<details>
<summary>Optimium nedir?</summary>

Optimium, Optimistic rollup'ların doğrudan bir uyarlamasıdır ve ayrıca veri kullanılabilirliğini zincir dışına çıkarır. Ölçeklenebilirliği artırırken doğrulama için hileye karşı koruma mekanizmalarını korumayı sürdürürler.

Optimium'ların temelinde varsayılan işlem geçerliliği ilkesi yatmaktadır. Bu sistemdeki işlemlerin başlangıçta geçerli olduğu varsayılır. Bu varsayım, hileye karşı koruma mekanizmaları tarafından aksi kanıtlanana kadar geçerlidir. Bu mekanizmalar, ağın bütünlüğünü ve güvenilirliğini korumak için çok önemlidir. Bir işleme itiraz edilir ve hileli olduğu tespit edilirse, işlem geri alınır ve ağın güvenliği ve doğruluğu sağlanır.

Optimium'ları geleneksel benzerlerinden ayıran en önemli özellik, işlem verilerinin zincir dışı depolanmasıdır. Bu stratejik değişim, ana Ethereum zinciri üzerindeki veri yükünü azaltarak ağ verimliliğini ve ölçeklenebilirliğini önemli ölçüde artırmaktadır. Bununla birlikte, bu aynı zamanda hileye karşı koruma sistemi aracılığıyla ustalıkla ele alınan yeni veri alma ve doğrulama hususlarını da beraberinde getirmektedir.

Optimiums'ta kullanıcılar işlemleri gerçekleştirebilir ve sistemle sorunsuz bir şekilde etkileşime girebilir. Para çekme işlemleri, işlemin gerçekliğini doğrulayan hile kanıtları gönderilerek işlenir. Bu kanıtlar, ağ içindeki tüm işlemlerin meşru ve belirlenmiş kurallar çerçevesinde yapılmasını sağlamak için temel taş görevi görür.

Optimium'ların Ethereum ana zinciri ile entegrasyonu, bir dizi özel akıllı sözleşme aracılığıyla yönetilmektedir. Bu sözleşmeler, gönderimden sonuçlandırmaya kadar işlem yaşam döngüsünü toplu olarak denetlerken, tüm verilerin zincir dışında depolanmasına rağmen gerektiğinde erişilebilir ve doğrulanabilir kalmasını sağlar.

</details>

<details>
<summary>Volition nedir?</summary>

Volition'lar ölçeklendirme çözümleri alanında çok yönlü bir yaklaşımı temsil eder. ZK-Rollup'ların ve Validium'ların özelliklerini harmanlarlar. Bu hibrit model, veri depolamada esneklik sunarak kullanıcıların kendi özel gereksinimlerine ve tercihlerine göre zincir içi ve zincir dışı veri kullanılabilirliği arasında seçim yapmasına olanak tanır.

Volition'lar özünde, işlemlerin bütünlüğünü ve geçerliliğini sağlamak için ZK-SNARK'lar veya ZK-STARK'lar gibi sıfır bilgi kanıtlarından yararlanır. Bu mekanizma, gizlilikten ödün vermeden veya altta yatan verileri açığa çıkarmadan işlem doğrulamasını sağlar.

Volition’ların benzersiz özelliği çift modlu çalışmasında yatmaktadır. Kullanıcılar, işlem verilerinin zincir üzerinde depolandığı ZK-Rollup modunu tercih edebilir ve böylece Ethereum ana zincirinin güvenliğinden ve merkeziyetsizliğinden faydalanabilir. Alternatif olarak, kullanıcılar işlem verilerini zincir dışında depolayan Validium modunu seçerek ölçeklenebilirliği ve verimi artırırken sağlam geçerlilik kanıtlarını koruyabilirler.

Her iki modda da işlem bütünlüğü sıfır bilgi kanıtları ile korunur, ancak veri kullanılabilirliği modunun seçimi ölçeklenebilirlik, güvenlik ve maliyet verimliliği arasında özelleştirilebilir bir denge sağlar.

Volition’ların Ethereum ekosistemi ile etkileşimi, kapsamlı bir akıllı sözleşmeler seti aracılığıyla da kolaylaştırılmıştır. Bu sözleşmeler, durum beyanlarını ve geçerlilik kanıtı doğrulamalarını yöneterek, seçilen veri kullanılabilirliği modundan bağımsız olarak sistemin güvenli, verimli ve Ethereum ile sorunsuz bir şekilde entegre kalmasını sağlar.

</details>

<details>
<summary>Sovereign Rollups nedir?</summary>

Sovereign Rollups, her bir rollup'ın kendi validatör<sup>**1**</sup> seti ve consensus<sup>**2**</sup> kuralları ile kendi kendini yöneten bir varlık olarak çalıştığı farklı bir blokzinciri ölçeklendirme çözümleri sınıfını temsil eder. Belirli bir ana zincirin güvenlik ve veri kullanılabilirliği modeline bağlı olan geleneksel rollup'ların aksine, Sovereign Rollup'lar bu hususlar üzerinde özerkliklerini korurlar.

Bu rollup'lar ölçeklenebilirlik ve egemenliğin benzersiz bir kombinasyonunu sağlayarak altyapılarını belirli kullanım durumlarına veya topluluk ihtiyaçlarına göre uyarlamalarına olanak tanır. Sovereign Rollup'lar, zincir içi veya zincir dışı kendi veri kullanılabilirliklerini yöneterek performans, maliyet ve güvenliği kendi gereksinimlerine göre optimize edebilirler.

Sovereign Rollup'ların en önemli özelliği yükseltmeler, token ekonomisi ve yönetişim modelleri ile ilgili karar alma süreçlerinde bağımsız olmalarıdır. Bu özerklik, blokzinciri ölçeklenebilirliğine daha esnek ve uyarlanabilir bir yaklaşım sağlayarak çeşitli ve gelişen ekosistem ihtiyaçlarını karşılar.

Sovereign Rollup'larda işlem bütünlüğü genellikle özelleştirilmiş consensus mekanizmaları veya kriptografik kanıtlar aracılığıyla korunur ve ana zincirlerle etkileşimleri (varsa) kendilerine özgü yönetişim protokolleri tarafından tanımlanır. Bu yapı, rollup teknolojisinin ölçeklenebilirlik özelliklerinden faydalanmaya devam ederken bağımsız blokzincirleri olarak çalışmalarını sağlar.

:::info
<sup>**1**</sup>Validatör: doğrulayıcı; blok üreterek consensus’a katılan node grubu; full node’lar veriyi depolarken consensus’a katılmayabilir; consensus node'larda full node’lara kıyasla daha çok bilgi bulunur.<br />
<sup>**2**</sup>Consensus: fikir birliği; ağa giren datalarla ilgili yapılan işlemlerin doğruluğu ve ağa dağıtımı konusunda, ağdaki bütün node’ların uzlaşı içinde bir mutabakata varması.
:::
</details>

Avail, sağlam ve güvenilir bir zincir dışı veri kullanılabilirliği mekanizması sağlayarak bu güven varsayımlarını ele alır. Bu entegrasyon, işlem veri bütünlüğünü ve erişilebilirliğini önemli ölçüde güçlendirirken güvene dayalı veri yönetimine olan bağımlılığı en aza indirir, böylece çeşitli ölçeklendirme çözümlerinin genel güvenliğini ve verimliliğini artırır.

## Sistem Tasarımına Genel Bakış

Veri barındırma, yürütme ve doğrulamayı birbirinden ayıran Avail, modülerliğin doğrudan bir sonucu olarak her bir bileşenin verimliliğini ve etkinliğini optimize eder.

###  Veri Barındırma ve Sıralama Katmanı (DA Katmanı)

Temel düzeyde, DA Katmanı işlem verilerini almak ve düzenlemekle görevlidir. Bu katman işlemlerin yürütülmesiyle ilgilenmez ancak verileri depolamaya ve kullanılabilirliğini garanti etmeye adanmıştır. DA Katmanı, sistemin işlemleri yürütmek için her full node’a ihtiyaç duymamasını sağlamak ve böylece geleneksel blok zincirlerindeki darboğaz sorunlarını hafifletmek için çok önemlidir.

### Yürütme Katmanı (Exec Katmanı)

Yürütme Katmanı, sıralı işlemlere erişmek için DA Katmanı ile arayüz oluşturur. Daha sonra bu işlemleri işler ve gerekli kontrol noktalarını, iddiaları veya kanıtları oluşturur. Bunlar daha sonra Avail ekosisteminin güvenlik çapası olarak kabul edilebilecek Doğrulama/Uyuşmazlık Çözüm Katmanına (DR Katmanı) iletilir.

### Doğrulama/Uyuşmazlık Çözüm Katmanı (DR Katmanı)

DR Katmanı, Yürütme Katmanı tarafından sunulan kontrol noktalarının veya kanıtların doğrulandığı karar verici bileşen olarak hizmet eder. Bu, ağ içinde yalnızca geçerli durum geçişlerinin kabul edilmesini sağlar.

### Ağ Katılımcıları
Avail ağı üç tip düğümden oluşmaktadır:

- **Full node’lar (tam düğümler)**:Bu node’lar blokları indirir ve doğruluğunu teyit eder ancak consensus (fikir birliği) sürecine katılmazlar. Rolleri, ağın bütünlüğünü korumak için çok önemlidir.
- **Validatör node’ları (doğrulayıcı düğümler)**: Validatör node’ları Avail'in consensus mekanizmasının merkezinde yer alır. Blokların oluşturulmasından, işlemlerin dahil edilmesine karar verilmesinden ve düzenin korunmasından sorumludurlar. Doğrulayıcı node'lar consensus’a katılım yoluyla teşvik edilir ve DA Katmanının operasyonları için temel unsurdur.
- **Light client’lar (hafif istemciler)**: Kısıtlı kaynaklarla çalışan hafif istemciler, ağa katılmak için blok başlıklarına güvenirler. Gerektiğinde belirli işlem verileri için full node’ları sorgulayabilirler, merkezi olmayan ve erişilebilir bir ağın sürdürülmesi için çok önemlidirler.

### Consensus 

Avail, ölçeklenebilirlik ve enerji verimliliği avantajları nedeniyle Nominated Proof-of-Stake (NPoS) consensus (fikir birliği) modelini tercih etmektedir. Özellikle, Substrate<sup>**1**</sup>'in BABE/GRANDPA mutabakatını kullanarak hızlı blok üretimi ve kanıtlanabilir kesinliğin bir karışımını sunar.
:::info
<sup>**1**</sup>Substrate: Geliştiricilerin kolayca kendi blokzincirlerini oluşturabilmeleri için kullandığı framework’tür. Önceden geliştirilmiş consensus sistemlerini, iletişim protokollerini, akıllı kontrat ortamlarının kolaylıkla entegre edilmesini sağlar.
:::

## Avail Nasıl Çalışır?

Avail, dünya standartlarında veri kullanılabilirliği garantileri sunmak için silme kodlaması, KZG polinom taahhütleri ve veri kullanılabilirliği örneklemesini birleştirerek blokzinciri ölçeklenebilirliğini yeniden tanımlar. Temel bir katman olarak işlev görür ve özellikle rollup'lar için işlem yürütme olmadan ölçeklenebilir veri barındırma sunar.

### İşlem Yaşam Döngüsü

1. **İşlem Gönderimi**
2. **Veri Genişletme ve Silme Kodlaması**
3. **Taahhüt Oluşturma**
4. **Blok Yayılımı**
5. **Hafif İstemci Ağı**
6. **Kanıt Doğrulama**

### İşlem Gönderimi ile Başlamak

Avail'in birincil tüketicileri olan rollup'lar, işlemleri Avail'e göndererek sürece başlar. Her işlem, daha geniş bir ekosistem içinde kaynağını ve amacını belirten benzersiz bir [<ins>application ID</ins>](/appid) (veya kısaca appID)* taşır.

### Silme Kodlaması ile Veri Kullanılabilirliğini Artırma

İşlemler Avail'e ulaştığında, silme kodlaması yoluyla işlenir. Bu prosedür fazlalık ekleyerek verilerin güvenilirliğini ve bütünlüğünü artırır. Bloklar n orijinal parçaya bölünür ve 2n parçadan herhangi bir n parçadan yeniden yapılandırmaya izin verecek şekilde 2n'ye genişletilir. Avail, hile kanıtları için mekanizmalar içeriyor olsa da, veri bütünlüğü için birincil güven doğrulayıcıların fikir birliğidir. Bir fikir birliğine varmak için validatörlerin 2/3'ünden fazlasının dürüst olması gerekir, bu da silme kodlu veriler için sağlam bir güvenlik sağlar.

Silme kodlu parçaların yanlış yapılandırılmasıyla mücadele etmek için, full node’lar **hile kanıtları** oluşturabilir ve dağıtabilir, böylece hafif istemcilerin blok başlıklarının özgünlüğünü doğrulayabilmesini sağlar.

### Commitment Oluşturma ile Veri Bütünlüğünü Sağlamlaştırma

Avail gereksiz verileri alır ve her bloğa KZG polinomial commitment<sup>**1**</sup> uygular. Bu commitment’ler, verilerin bütünlüğünün kriptografik kanıtları olarak işlev görür ve depolananların doğru ve tamper-proof<sup>**2**</sup> olmasını sağlar. Commitment’ler, Avail'in [<ins>veri doğrulama köprüsü</ins>](/glossary#veri-do%C4%9Frulama) aracılığıyla onaylanmadan ve ana zincire iletilmeden önce, [<ins>validatörler</ins>](#konsens%C3%BCs-ve-blok-yay%C4%B1l%C4%B1m%C4%B1n%C4%B1n-sa%C4%9Flanmas%C4%B1) tarafından verilerin bütünlüğünü teyit etmek için kullanılır.

> Blok üreticileri, veri parçalarından bir **Kodlanmış Merkle Ağacı (CMT)** oluşturur ve kökü blok başlığına ekleyerek istemciler tarafından hızlı ve güvenli veri doğrulamasını kolaylaştırır.

> CMT tabanlı tasarım, her Merkle ağacı katmanında sistematik silme kodlarına sahiptir, bu da sabit boyutlu taahhütlere ve logaritmik boyutlu hile kanıtlarına yol açar. Bu yapı, minimum dürüstlükteki full node varsayımı altında bile verimli veri yeniden yapılandırması ve blok bütünlüğü doğrulaması sağlar.
:::info
<sup>**1**</sup>commitment: blok başlıklarına eklenen, sahte hile kanıtlarının oluşmasını engelleyen, kısa ve öz doğrulama yapan eliptik eğri şeması; kriptografik kanıt.<br />
<sup>**2**</sup>tamper-proof: yetkisiz erişime karşı koruma, kavramsal olarak yetkisiz erişimi veya bir güvenlik sisteminin atlatılmasını engellemek, caydırmak veya tespit etmek için kullanılan yöntem.
:::


### Konsensüs ve Blok Yayılımının Sağlanması
Validatörler, Avail'in ekosisteminde çok önemli bir rol oynamaktadır. Commitment yüklü blokları alırlar, kesin ve tam olduklarını doğrulamak için commitment’leri yeniden oluştururlar ve blok üzerinde en az üçte ikisinin (süper çoğunluk) onayını gerektiren bir fikir birliğine varırlar. Validatörler yalnızca doğrulanmış ve üzerinde fikir birliğine varılmış verilerin ağ üzerinden yayılmasını sağlar. Bu evre, doğrulandıktan sonra verilerin Avail'in veri doğrulama köprüsü üzerinden iletilebilmesini sağlamak için hayati önem taşır.


### Hafif İstemciler: DAS Kullanan DA Koruyucuları

Avail'in ekosistemindeki hafif istemciler, blok veri bütünlüğünü doğrulamak için [<ins>Veri Kullanılabilirliği Örneklemesi (DAS)</ins>](/glossary#veri-kullan%C4%B1labilirli%C4%9Fi-%C3%B6rneklemesi-das) kullanır. Örneklenen her hücre için blok başlığındaki commitment’lerin karşılığı olan KZG polinom şemasının açıklamalarını kontrol ederek veri kullanılabilirliğini bağımsız olarak ve anında doğrulamalarını sağlarlar. Bu yöntem, tam KZG commitment’lerini yeniden oluşturma veya hile kanıtlarına güvenme ihtiyacını ortadan kaldırarak Avail'in merkezi olmayan doğrulama ile sağlanan yüksek güvenlik ve veri bütünlüğü standartlarının temelini oluşturur. Bununla birlikte, daha kapsamlı veri bütünlüğü kontrolleri için, özellikle veri matrisi içindeki satır bütünlüğü için, uygulama istemcileri KZG yeniden yapılandırması gerçekleştirir. Bu yaklaşım, tek tek hücreleri doğrulamak yerine tüm satırların bütünlüğünü doğrulamak için daha uygundur.

> Diğer taraftan, full node’lar Kate commitment’lerini iki temel amaç için kullanır: ağ genelinde doğrulama için tüm verileri yeniden yapılandırılması veya verilerdeki herhangi bir tutarsızlığa itiraz etmek için hile kanıtları oluşturulması. Hafif istemciler ve full node’ların birlikte çalıştığı bu ikili mekanizma, ağın genel güvenliğini ve güvenilirliğini de güçlendirir.

### Kanıt Doğrulama: Son Kontrol Noktası

Yolculuk, hafif istemcilerin kanıt doğrulaması yapmasıyla sonuçlanır. Bu süreç, veri matrisinden hücre düzeyinde kanıtlar üretmeyi içerir ve hafif istemcilerin blokzincirinin durumunu verimli ve bağımsız bir şekilde doğrulamasını sağlar. Doğrulamaya yönelik bu merkezi olmayan yaklaşım, Avail ekosisteminin güvenliğinin ve bütünlüğünün temelini oluşturur.

> Avail'de kurulum, temel olarak rollup’lar için veri kullanılabilirliğini sağlamakla ilgilidir. Gerçek işlemin yürütülmesi ve sonuçlandırılması rollup katmanında gerçekleşirken, Avail gerekli veri altyapısını sağlar.

## Sırada Ne Var?

Avail ile ilgili temel bilgilerinizle birlikte, ekosistemde yeniyseniz, [<ins>Başlarken</ins>](/category/ba%C5%9Flarken-1) bölümünü ziyaret ettiğinizden emin olun.

Ek olarak, hafif bir istemci ile denemeler yapmayı düşünün. Bunun için [<ins>Hızlı Başlangıç</ins>](/get-started/quickstart) kılavuzu harika bir kaynaktır. Bir Avail hafif istemcisi çalıştırmak için tek yapmanız gereken Avail CLI'yı yüklemek ve kullanmaktır.

CLI'yi `npm`'den yüklemek için aşağıdaki komutu çalıştırın:

```bash
npm i -g @availproject/cli
```

Sonra aşağıdaki kodu çalıştırın:

```bash
avail lc up
```

İşte bu kadar!

### Clash of Nodes Kampanyasına Katılın

Avail'in ekosisteminin derinliklerine indikçe, sizi heyecan verici bir fırsat bekliyor. Avail, modüler blokzincirlerinin sınırlarını geliştiriyor ve node operatörlerini dinamik Clash of Nodes kampanyasına katılmaya davet ediyoruz. Bu kampanya, Avail ağının yeteneklerini test etmede bir mihenk taşıdır ve gerçek zamanlı, teşvik edilmiş bir test ağı ortamı sunar. Bu, blokzinciri altyapısının geleceğini şekillendiren bir topluluğun parçası olma şansıdır. Avail ile yolculuğunuzu ilerletmeye ve bu yenilikçi kampanyaya katılmaya hazırsanız, belgelerdeki [<ins>Clash of Nodes</ins>](/category/clash-of-nodes-1) bölümünü ziyaret edin.