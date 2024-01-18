---
id: overwiev
title: Node'ların Çatışmasına Hoş Geldiniz
sidebar_label: Başlarken
sidebar_position: 1
description: 'Clash of Nodes kampanyasına katılmak için başlangıç kılavuzu ve ilk adımlar.'
keywords:
  - docs
  - avail
  - node
  - data availability
  - da
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Amaç

Avail, modüler blokzincirlerini hızla geliştiriyor ve node operatörlerini Clash of Nodes kampanyasına katılmaya çağırıyoruz. Bu kampanya, katılımcılara teşvik veren gerçek zamanlı bir test ağı ortamı sağlayarak Avail ağı için önemli bir kanıtlama alanı görevi görmektedir. Yeni nesil rollup merkezli blok zinciri altyapısını desteklemeye hazır temel katman olarak Avail'in yeteneklerini titizlikle test etmek için tasarlanmıştır.

## Clash of Nodes Kimin İçin?

Herkes için bir kampanya.

### Hafif İstemciler

Hafif istemci çalıştırarak Clash of Nodes'a katılın ve Avail'in ölçeklenebilir bir blokzinciri altyapısı oluşturma misyonunda yer alın. Avail'in hafif istemci işlevi, herkesin, her yerde ağa katılmasını sağlamak için benzersiz bir şekilde tasarlanmıştır.

### Validatörler

Clash of Nodes teşvikli test ağı, doğrulayıcıların Avail'in altyapısıyla simüle edilmiş bir üretim ortamında etkileşime girmeleri için bir fırsattır. Katılımcılar, performanslarına ve katılımlarına bağlı olarak ödül kazanma potansiyeli ile bir dizi zorlu görev aracılığıyla ağın dayanıklılığını artırmaya katkıda bulunacaklardır.

## Temel Kampanya Kavramları

Aşağıdaki tablo, Clash of Nodes kampanyasını oluşturan çeşitli unsurları anlamak için hızlı bir referans görevi görür.

Avail ile ilgili net olmayan kavramlar varsa, tanımlar ve açıklamalar için sözlüğe [<ins>glossary</ins>](/docs/glossary.md) gidin.

| Kavram                  | Tanım                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Zorlu Görevler**           | Katılımcıların ağı test etmek ve güçlendirmek için tamamladıkları görevler veya hedefler. Zorlu görevler, Avail'in veri kullanılabilirliği garantileriyle ilgili olarak performans, güvenlik ve güvenilirliği değerlendirmek için tasarlanmıştır. |
| **Puanlar**               | Katılımcıları zorlu görevleri tamamladıkları için ödüllendiren bir puanlama sistemi. Puanlar bir liderlik tablosunda toplanır ve en iyi performans gösterenler için potansiyel ödüller verilir.                                                                   |
| **Aday Gösterenlerin Havuzları**      | Katılımcıların bir doğrulayıcıyı desteklemek için toplu olarak token yatırdığı gruplar. Bu, kullanıcıların tam bir node çalıştırmadan ağ doğrulamasına katılmalarına ve ödüller kazanmalarına olanak tanır.                                         |
| **Rollapps**             | Avail'in veri kullanılabilirliği katmanını kullanan merkezi olmayan uygulamalar. Bunlar, ağın uygulama verilerini işleme kapasitesini test etmek için kilit öneme sahiptir.                                                                       |
| **DHT**                  | Dağıtılmış Karma Tablo, hafif istemciler tarafından verimli veri depolama ve alma için kullanılan, veri kullanılabilirliğini ve bütünlüğünü korumak için çok önemli olan bir sistemdir.                                                                |
| **Vektör İşlevselliği** | Ağın diğer blok zincirleriyle etkileşime girme kabiliyeti, zincirler arası veri doğrulama ve birlikte çalışabilirlik gibi işlevleri mümkün kılar.                                                                           |

## Katılım Şartları

:::caution İlgili Hükümler, Koşullar ve Kampanya Kurallarına uymayı kabul ettiğinizden emin olun.

Lütfen ilgili Hükümler ve Koşullara bakın. **[<ins>here</ins>](/docs/clash-of-nodes/toc.md)**.

Lütfen Clash of Nodes kampanyası için belirlenmiş kuralları ve rehberleri okuduğunuzdan ve bunlara uyduğunuzdan emin olun. **[<ins>here</ins>](/docs/clash-of-nodes/rules.md)**.
Bu, tüm katılımcılar için adil ve keyifli bir deneyim sağlayacaktır.
:::

Avail'te yeniyseniz, Yeni Kullanıcı [<ins>New User</ins>](/category/get-started/new-user-guide/) ve Hızlı Başlangıç [<ins>Quickstart</ins>](/build/quickstart/) rehberlerine göz atın.

### 1. İlginizi Gösterin

Bu çığır açan test ağına katılmaya hazırsanız ve henüz kaydolmadıysanız, şimdi bir adım öne çıkmanın tam zamanı.

- Teşvikli test ağına katılmak isteyen bir doğrulayıcı iseniz, lütfen Doğrulayıcı İlgi Formunu
  [<ins>Validator Interest Form</ins>](https://docs.google.com/forms/d/e/1FAIpQLScvgXjSUmwPpUxf1s-MR2C2o5V79TSoud1dLPKVgeLiLFuyGQ/viewform) doldurarak ilginizi belirtin.

- Hafif istemci operatörü olmakla ilgileniyorsanız, Hafif İstemci Operatörü İlgi Formunu
  [<ins>Light Client Operator Interest Form</ins>](https://docs.google.com/forms/d/e/1FAIpQLSeL6aXqz6vBbYEgD1cZKaQ4vwbN2o3Rxys-wKTuKySVR-oS8g/viewform) kullanarak kaydolarak bize bildirin.

### 2. Kurulumunuzu Ayarlayın

Clash of Nodes kampanyasında node’unuzun istikrarlı ve verimli bir şekilde çalışmasını sağlamak için aşağıdaki donanım özellikleri önerilir:

| Şartname        | Minimum Şartlar       | Validatörlere Tavsiye Edilen Şartlar |
| -------------------- | -------------------------- | -------------------------- |
| **CPU**              | 2 çekirdekli               | 4 çekirdekli veya üstü     |
| **RAM**              | 4 GB                       | 8 GB veya üstü             |
| **Disk Alanı**       | 20–40 GB                   | 40 GB SSD veya üstü        |
| **İşletim Sistemi**  | Ubuntu 20.04 LTS veya üstü | Ubuntu 20.04 LTS veya üstü |

### 3. Node'unuzu Kurun

Avail ağında node'ların kurulması ve çalıştırılması ile ilgili talimatlar için lütfen aşağıdaki rehberlere bakın:

| Node Çeşidi      | Rehber Dosyası                                                                  |
| -------------- | ------------------------------------------------------------------------------- |
| Hafif İstemci   | [<ins>How to Run a Light Client</ins>](/docs/operate-a-node/run-a-light-client/0010-light-client.md) |
| Validatör Node'u | [<ins>How to Become a Validator</ins>](/category/become-a-validator/)           |

Avail ağındaki node türleri hakkında daha fazla bilgiye ihtiyacınız varsa, lütfen Node Türleri Karşılaştırma belgesine
[<ins>Node Types Comparison document</ins>](/docs/operate-a-node/node-types.md) bakın.

## Katılmaya Hazır?

Katılmaya başlamak için Zorlu Görevler [<ins>Challenges page</ins>](/docs/clash-of-nodes/challenges.md) sayfasına gidin.

Aşağıda, kampanyada yolunuzu bulmanıza yardımcı olacak temel kaynakların bir listesi yer almaktadır.

<!--add link to blog post -->

| Kaynak                                                                            | Tanım                                                                                                     |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Zorlu görevler listesi[<ins>Challenges List</ins>](/docs/clash-of-nodes/challenges.md#list-of-challenges) | Hedefler, uygunluk ve puanlama ayrıntıları dahil olmak üzere aktif ve yaklaşan zorlu görevler hakkında ayrıntılı bilgiler. |
| Sık sorulan sorular [<ins>FAQs</ins>](/docs/clash-of-nodes/faqs.md)                                     | Clash of Nodes kampanyası hakkında teknik ve programla ilgili yaygın sorulara yanıtlar.                    |
| Liderlik Sıralaması [<ins>Clash of Nodes Leaderboard</ins>](http://leaderboard.availproject.org/)       | Clash of Nodes için node sıralamalarını ve istatistiklerini gösteren liderlik tablosu.                                   |
| Web Sitesi[<ins>Clash of Nodes Website</ins>](http://clash.availproject.org/)                 | Clash of Nodes için genel bilgiler ve güncellemeler içeren ana web sitesi.                                   |
| Discord Topluluğu [<ins>Discord Community</ins>](https://discord.com/invite/y6fHnxZQX8)               | Discord'da sohbete katılın ve Avail ekibinden ve topluluğundan destek alın.                             |
