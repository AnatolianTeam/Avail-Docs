---
id: networks
title: Ağ Bilgisi
sidebar_label: Ağ Bilgisi
sidebar_position: 1
description: 'Avail ile İlgili Ağlara İlişkin Bilgiler'
keywords:
  - docs
  - avail
  - node
  - networks
  - testnet
  - rpc
  - chainspec
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

|                          | **Goldberg Testnet**                                                                 | **Kate Testnet**                                                                     | **Testnet Phase 1**                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Status**               | **Active**                                                                           | **Deprecating**                                                                      | **Retired**                                                                                    |
| **Explorer**             | [<ins>https://goldberg.avail.tools</ins>](https://goldberg.avail.tools)              | [<ins>https://kate.avail.tools</ins>](https://kate.avail.tools)                      | [<ins>https://testnet.avail.tools</ins>](https://testnet.avail.tools)                          |
| **RPC Endpoint**         | [<ins>https://goldberg.avail.tools/api</ins>](https://goldberg.avail.tools/api)      | [<ins>https://kate.avail.tools</ins>](https://kate.avail.tools)                      | [<ins>https://kate.avail.tools/</ins>](https://kate.avail.tools/)                              |
| **WS Endpoint**          | [<ins>wss://goldberg.avail.tools/ws</ins>](wss://goldberg.avail.tools/ws)            | [<ins>wss://kate.avail.tools/ws</ins>](wss://kate.avail.tools/ws)                    | [<ins>wss://testnet.avail.tools/ws</ins>](wss://testnet.avail.tools/ws)                        |
| **Chain Spec**           | [<ins>chainspec.raw.json</ins>](https://goldberg.avail.tools/chainspec.json)         | [<ins>chainspec.raw.json</ins>](https://kate.avail.tools/#/explorer/chainspec)       | -                                                                                              |
| **Chain Info**           | [<ins>chaininfo.txt</ins>](https://goldberg.avail.tools/chaininfo.txt)          | [<ins>chaininfo.txt</ins>](https://kate.avail.tools/chaininfo.txt)                   | -                                                                                              |
| **Node Version**         | [<ins>v1.8.0.4</ins>](https://github.com/availproject/avail/releases/tag/v1.8.0.4)   | [<ins>v1.7.2</ins>](https://github.com/availproject/avail/releases/tag/v1.7.2)       | [<ins>v1.5.0-303f39d</ins>](https://github.com/availproject/avail/releases/tag/v1.5.0-303f39d) |
| **Light Client Version** | [<ins>v1.7.4</ins>](https://github.com/availproject/avail-light/releases/tag/v1.7.4) | [<ins>v1.7.4</ins>](https://github.com/availproject/avail-light/releases/tag/v1.7.4) | [<ins>1.3.1</ins>](https://github.com/availproject/avail-light/releases/tag/v1.3.1)            |

## Blokzinciri Modülerliğine Öncülük Etmek

**Goldberg Testnet, Avail Projesi'nin en son test ağıdır.**

### Birinci Evre: Temelin Atılması

Avail'in test ağının açılış evresi, zincir içi işlevlerin yürütülmesi ve protocol yönetişiminin başlatılması da dahil olmak üzere temel işlemler için bir sanal alan görevi gördü. Bu evre, daha gelişmiş test senaryolarına zemin hazırlanmasında etkili oldu.

### İkinci Evre: Test Ekosisteminin Genişletilmesi

İkinci evre, validatörlerin katılımının artmasını teşvik etmek için tasarlanmış sağlam bir test ortamı sağlamayı amaçlamaktadır. Validatörler, işlemleri doğrulamak ve ağ güvenliğini güçlendirmek için genellikle token tabanlı ödüller karşılığında bilgi işlem kaynaklarından yararlanan önemli ağ katılımcılarıdır.

#### Testnet'e Kullanıcı Katılımı

Kate testneti, kullanıcı katılımı için çok sayıda yol sunar:

- **Token Edinme**: Kullanıcılar, stake etme ve aday gösterme işlevlerini keşfetmek için AVL test ağı tokenlerini alabilirler.
- **Blokzinciri Geliştirme**: Kullanıcılar, Avail'in veri katmanı ile entegre olan modüler blokzinciri uygulamaları veya zincirleri geliştirme özgürlüğüne sahiptir.
- **Ağ Rolleri**: Kullanıcılar test ağına validatör veya hafif istemci olarak katılmayı tercih ederek veri doğrulama süreçlerini kolaylaştırabilir.

### Üçüncü Evre: Teşvikli Test Ağı

Avail şimdi Goldberg test ağını kullanarak [<ins>Clash of Nodes</ins>](/category/clash-of-nodes/) kampanyasını başlatıyor. Bu kampanya, node operatörlerinin teşvikli, gerçek zamanlı bir test ağı ortamına katılmaları için bir eylem çağrısıdır. Bu, Avail'in altyapısı için kritik bir test ortamıdır ve bir sonraki rollup merkezli blokzinciri ekosistemleri dalgası için temel bir katman olarak kapasitesini titizlikle değerlendirmek üzere tasarlanmıştır.
