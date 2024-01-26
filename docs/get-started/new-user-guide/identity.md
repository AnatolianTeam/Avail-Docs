---
id: identity
title: Zincir Üzerinde Kimlik Nasıl Ayarlanır?
sidebar_label: Kimliğinizi Ayarlayın
sidebar_position: 4
description: 'Goldberg test ağında zincir üstü kimliğin nasıl ayarlanacağını öğrenin.'
keywords:
  - docs
  - avail
  - explorer
  - identity
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

## Giriş

Bu rehber, Goldberg test ağında zincir üstü kimlik oluşturma sürecinde size yol gösterecektir.

## Kimlik Bağlama Teminatı

Kişisel bilgilerin zincir üzerinde saklanması için kullanıcıların belirli miktarda parayı fon olarak kilitlemeleri gerekiyor. Bu teminat, kimlik tespitinin ardından iade edilir.

Retrieve the necessary bond amounts by querying the [<ins>Chain state constants</ins>](https://goldberg.avail.tools/#/chainstate) on the [<ins>Goldberg Explorer</ins>](/docs/get-started/Yeni Kullanıcı Rehberi/explorer.md).

Goldberg Explorer [<ins>Goldberg Explorer</ins>](/docs/get-started/Yeni Kullanıcı Rehberi/explorer.md) üzerinde [<ins>Chain state constants</ins>](https://goldberg.avail.tools/#/chainstate) sorgulayarak gerekli teminat miktarlarını alın.

### Zincir Durumu Sabitlerine Erişim

Aşağıdakileri yaparak zincirin arayüzü aracılığıyla fon miktarlarını belirleyin:

1. Gezinti çubuğundaki "Developer" menüsüne gidin ve "Chain state"i seçin.
2. "Constants" sekmesi altında, "selected constant query" menüsünden `identity` seçin. `basicDeposit: u128` parametresi varsayılan olacaktır.
3. Görünüme sabitler eklemek için "artı" ("+") simgesine tıklayın.

Her bilgi alanı 32 byte ile sınırlıdır. [<ins>UTF8 to bytes converter</ins>](https://onlinetools.com/utf8/convert-utf8-to-bytes) kullanıcı arayüzü aracılığıyla verileri manuel olarak girerken [<ins>Extrinsics UI</ins>](https://goldberg.avail.tools/#/extrinsics)'den bayta dönüştürücü kullanın.

## Zincir Üstü Kimliğinizi Ayarlayın

Kullanıcı arayüzü üzerinden yasal adınız, görünen adınız ve web siteniz gibi kişisel bilgilerinizi ekleyin:

1. Hesabınızın yanındaki üç dikey noktaya tıklayın ve "Set on-chain identity"i seçin.
2. Açılır pencerede istediğiniz alanları değiştirin ve doldurun.
3. "Set Identity"e tıklayarak onaylayın ve zincir üstü kimliğinizi kesinleştirmek için işlemi gönderin.
4. Bilgilerinizi onaylayın ve devam etmek için "Set Identity"e tıklayın.
5. İşlemi imzalayın ve kimlik belirleme işlemini tamamlamak için gönderin.
