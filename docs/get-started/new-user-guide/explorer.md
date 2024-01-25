---
id: explorer
title: Goldberg Testnet Explorer Nasıl Kullanılır
sidebar_label: Explorer Kullanımı
sidebar_position: 2
description: Avail ağıyla etkileşimde bulunmak için Avail Explorer'ın kullanımına ilişkin kapsamlı bir kılavuz.
keywords:
  - docs
  - avail
  - explorer
  - accounts
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Giriş

[<ins>Goldberg Testnet Explorer</ins>](https://goldberg.avail.tools/) Avail ağı ile etkileşim kurmak için güçlü bir arayüz görevi görür. İster geliştirici, ister validatör veya son kullanıcı olun, Explorer size ağ etkinliklerini incelemek, hesapları yönetmek ve yönetişime katılmak için araçlar sağlar. Bu rehber, temel özellikleri hakkında size yol gösterecektir.

### Hızlı Navigasyon

- [Inspect Network Data](#inspect-network-data)
- [Manage Accounts](#manage-accounts)
- [Participate in Governance](#participate-in-governance)
- [Advanced Features](#advanced-features)

## Ağ Verilerini İnceleyin

### Son Bloklara Genel Bakış

Explorer'ın varsayılan sayfası en son üretilen blokları görüntüleyerek ağ etkinliğini gerçek zamanlı olarak izlemenize olanak tanır.

![Avail Explorer](/img/avail/explorer.png)

### Blok Ayrıntıları

Bir blok numarasına (veya blok "yüksekliğine") tıklamak, o bloğun işlemler, validatörler ve daha fazlasını içeren ayrıntılı bir görünümünü açacaktır.

![Avail Explorer Block Detail](/img/avail/explorer-block-detail.png)

## Hesabı Yönetin

Explorer, hesap oluşturmanıza, yönetmenize ve kurtarmanıza olanak tanır. Ayrıca işlemleri başlatabilir, tokenleri stake edebilir ve daha fazlasını yapabilirsiniz. Nasıl hesap oluşturacağınızı öğrenmek için [<ins>Create and Manage Accounts guide</ins>](/docs/get-started/Yeni Kullanıcı Rehberi/explorer.md) bölümüne göz atın.

## Yönetişime Katılın

Tekliflerden oylamalara kadar, Explorer size ağ yönetimine aktif olarak katılmanız için gerekli araçları sağlar.

## Gelişmiş Özellikler

### Manuel İşlemler ve RPC Çağrıları

Geliştiriciler ve ileri düzey kullanıcılar için Explorer (https://docs.substrate.io/), işlemleri manuel olarak gönderme, RPC çağrıları yapma ve hata ayıklama görevleri gibi özellikler sunar.

:::info Güven Puanına Dikkat

Explorer, veri kullanılabilirliğini doğrulamak için Veri Kullanılabilirliği Örneklemesi (DAS) gerçekleştiren hafif istemci barındırır. Bu işlem tamamlanana kadar en yeni bloklar güven puanı göstermeyebilir.
:::

## Sonuç

Avail Explorer, Avail ağında yer alan herkes için çok yönlü bir araçtır. İster blokları inceliyor, ister hesapları yönetiyor, ister yönetişime katılıyor olun, Explorer ihtiyaçlarınızı karşılayacak kapsamlı bir dizi özellik sunar.
