---
id: accounts
title: Avail Hesabı Nasıl Oluşturulur ve Yönetilir
sidebar_label: Hesap Oluşturma
sidebar_position: 1
description: Avail hesabı oluşturma ve yönetme konusunda kapsamlı kılavuz.
keywords:
  - docs
  - avail
  - explorer
  - accounts
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Giriş

Bu rehber, Avail hesabı oluşturma ve yönetme sürecinde size yol gösterecek ve aynı zamanda hesap özellikleri ve formatları hakkında bilgi verecektir.

**[<ins>Skip to Creating an Account on the Goldberg Testnet</ins>](#creating-an-account-on-the-goldberg-testnet).**

### Adres Özellikleri ve Formatı

Substrate çerçevesini temel alan Avail, kullanıcılara dijital varlıklarını ve kimliklerini yönetmek için güvenli ve etkili bir yol sağlamak amacıyla sağlam ve esnek hesap sisteminden yararlanır.

Avail adresleri, [<ins>base-58 encoding</ins>](https://en.wikipedia.org/wiki/Binary-to-text_encoding) kodlamasının geliştirilmiş bir versiyonu olan [<ins>SS58 format</ins>](https://docs.substrate.io/reference/address-formats/) formatında kodlanır. Bu format, daha kısa ve daha tanımlanabilir adresler ve ağa özgü ön ekler gibi çeşitli avantajlar sunar. Ayrıntılı bir teknik açıklama için Hesaplar, Adresler ve Anahtarlar hakkındaki Substrate belgelerine (https://docs.substrate.io/learn/accounts-addresses-keys) bakın.

### Avail JS Uygulamaları: Avail’deki Arayüzünüz

[<ins>Polkadot JS Apps</ins>](https://polkadot.js.org/apps/#/explorer)'in çatallanmış bir kolu olan [<ins>Avail JS Apps</ins>](https://goldberg.avail.tools/#/explorer), Avail ağı için birincil arayüzünüz olarak hizmet eder. Şu anda odak noktası yalnızca Goldberg test ağıdır ve bu nedenle Goldberg Testnet Explorer olarak da anılmaktadır. Avail JS Uygulamalarının kapsamı, Avail üretime hazır bir ağa dönüştükçe genişleyecektir.

Avail JS, [<ins>Polkadot-JS UI guide</ins>](https://wiki.polkadot.network/docs/polkadotjs-ui) rehberinde bulunanlara benzer işlevler sunmayı amaçlamaktadır; bunlara aşağıdakiler dahildir ancak bunlarla sınırlı değildir:

- **Hesaplar**: Hesapları oluşturun, yönetin ve kurtarın. 
- **Stake etme**: Ağda stake edin ve validatörleri yönetin. 
- **Explorer**: Blokzinciri verilerine göz atın, blok ayrıntılarını görüntüleyin ve ağ etkinliğini izleyin.
  
### Tohum Kelimeler

Bir hesap oluşturmadan önce tohum kelimeleri [<ins>seed phrases</ins>](https://en.wikipedia.org/wiki/Cryptocurrency_wallet) anlamak önemlidir. Hesap oluşturma işlemi sırasında, hesabınızı kurtarmak için kullanılabilecek bir dizi kelime alacaksınız.

> Tohum Kelimelerinin Güvenliği
ASLA tohum ifadenizi kimseyle paylaşmayın ve onu güvenli ve çevrimdışı bir konumda saklayın. Tohum kelimelere erişimi olan herkes hesabınızın kontrolünü ele geçirebilir.

## Goldberg Testnet'te Hesap Oluşturma

### 1. Explorer'u açın

[Goldberg Avail Explorer](https://goldberg.avail.tools/)'a gidin.

### 2. Accounts'a Gidin

Explorer’a girdikten sonra gezinme çubuğunda `Accounts -> Accounts`'a gidin.
<img src={useBaseUrl("img/avail/account.png")} width="100%" height="100%" />

### 3. Yeni Hesap Oluşturun

Hesap oluşturma sürecini başlatmak için sağ taraftaki`+Account` düğmesine tıklayın.
<img src={useBaseUrl("img/avail/add-account.png")} width="100%" height="100%" />

### 4. Sihirbazı Takip Edin

Hesap oluşturma işlemini tamamlamak için ekrandaki talimatları izleyin. İleride başvurmak üzere tohum kelimelerinizi güvenli bir şekilde sakladığınızdan emin olun.

### 5. JSON Dosyasını İndirin

İşlemler tamamlandığında, hesap bilgilerinizi içeren bir JSON dosyası dosya sisteminize indirilecektir. İndirme için tarayıcı izinleri vermeniz istenebilir.

#### JSON Dosyası Nedir?

JSON dosyası, hesabınızın yedeği görevini görür ve onu kurtarmak için gerekli tüm bilgileri içerir. Hesap oluşturma işlemi sırasında belirlediğiniz bir şifre ile şifrelenir.

> Yedekleme ve Kurtarma
JSON dosyanızı her zaman güvenli ve çevrimdışı bir konumda saklayın. Bu dosyayı ve şifrenizi kaybetmeniz varlıklarınızın kaybına neden olabilir.

## Sonraki Adımlar

Avail hesabınızı başarıyla oluşturduğunuz ve yönettiğiniz için tebrikler! Varlıklarınızın güvenliğini sağlamak için her zaman hesap ayrıntılarınızı, JSON dosyanızı ve tohum kelimelerinizi korumayı unutmayın.

Daha fazlasını keşfetmeye hazır mısınız? Goldberg Testnet Explorer'ın nasıl kullanılacağını öğrenmek ve ağ konusunda uygulamalı deneyim elde etmek için bir sonraki rehbere [<ins>how to use the Goldberg Testnet Explorer</ins>](/docs/get-started/new-user-guide/explorer.md) gidin.
