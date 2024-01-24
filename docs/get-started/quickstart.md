---
id: quickstart
title: Avail ile Hızlı Başlangıç
sidebar_label: Hızlı Başlangıç
sidebar_position: 2
description: "Avail'i veri kullanılabilirliği katmanı olarak nasıl kullanabileceğinizi keşfedin."
keywords:
  - documentation
  - avail
  - develop
  - build
  - data availability
  - da
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Çalıştırmaya Başlayın

Avail light istemcisini çalıştırmak için Avail CLI `npm` paketini yüklemeniz yeterlidir:

```bash
npm i -g @availproject/cli
```

Sonra, çalıştırın:

```bash
avail lc up
```

Bu kadar!

Konfigürasyon üzerinde daha fazla kontrol istiyorsanız veya full node çalıştırmakla ilgileniyorsanız, aşağıdaki kurulum kılavuzlarına göz atın.

| Eylem                                                                   | Gerekli Tokenler | Stake Etme | Gerekli Teknik Beceri | Client Binary                                                                        |
| ------------------------------------------------------------------------ | ------------- | ------- | ------------------------ | ------------------------------------------------------------------------------------ |
| Hafif İstemci Çalıştırın [<ins>Run a Light Client</ins>](/docs/operate-a-node/run-a-light-client/0010-light-client.md) | Hayır            | Hayır      | Temel Seviye                    | [<ins>v1.7.4</ins>](https://github.com/availproject/avail-light/releases/tag/v1.7.4) |
| Full Node Çalıştırın [<ins>Run a Full Node</ins>](/category/full-node/)                       | Hayır            | Hayır      | Orta Seviye                 | [<ins>v1.8.0.4</ins>](https://github.com/availproject/avail/releases/tag/v1.8.0.4)   |
| Validatör Olun [<ins>Become a Validator</ins>](/category/become-a-validator/)           | Evet           | Evet     | İleri Seviye                 | [<ins>v1.8.0.4</ins>](https://github.com/availproject/avail/releases/tag/v1.8.0.4)   |

---

## Oluşturmaya Başlayın

Avail API, uygulama geliştiricilerin Avail ağı ile sorunsuz bir şekilde etkileşim kurmasını sağlayan sağlam bir dizi özellik sunar. Bu rehber, aşağıdaki JavaScript/TypeScript, Rust ve Go örnek kod parçacıklarının derlenmiş bir listesini sunar. Bu örnekler, yerel bir node’a bağlantı kurma, ağdan veri sorgulama ve blokzinciri üzerinde işlemler yürütülmesi gibi temel görevleri kapsar.

Örneklere geçmeden önce, yerel Avail nodunun çalıştığından emin olun veya ayarlarınızı mevcut ağ ile uyumlu olacak şekilde yapılandırın.

> Bu örneklerin nasıl çalıştırılacağına ilişkin ayrıntılı talimatlar Avail GitHub bilgi havuzunda (repository) mevcuttur:

- [<ins>TypeScript Instructions</ins>](https://github.com/availproject/avail/blob/develop/examples/ts/README.md)
- [<ins>Go Instructions</ins>](https://github.com/availproject/avail/blob/develop/examples/go/README.md)
- [<ins>Rust Instructions</ins>](https://github.com/availproject/avail/blob/develop/avail-subxt/examples/README.md)

### Örnek İş Akışı

Avail'de uçtan uca veri kullanılabilirliği akışını anlamak için bu örnekteki adımları izleyin. Örnekler JavaScript, Go ve Rust için verilmiştir.

#### Adım 1: Bağlantı Kurma

Avail ağı ile etkileşime geçmeden önce, bir node ile bağlantı kurmanız gerekir.

| Dil   | Örnek Bağlantı                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------- |
| JavaScript | [<ins>Establishing Connection</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/connect.ts) |
| Go         | [<ins>Establishing Connection</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/connect)    |
| Rust       | [<ins>Headers</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/headers.rs)        |

#### Adım 2: Verilerin Gönderilmesi

Bağlandıktan sonra, bir sonraki adım ağa veri göndermektir. Bu, kullanıma sunmak istediğiniz herhangi bir veri bloğu olabilir.

| Dil   | Örnek Bağlantı                                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| JavaScript | [<ins>Submitting Blob Data</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/data_submit.ts)          |
| Go         | [<ins>Submitting Blob Data</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/dataSubmit)              |
| Rust       | [<ins>Submitting Blob Data</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/submit_data.rs) |

#### Adım 3: Veri Kökünün Gönderilmesi (İsteğe Bağlı)

Veri kökünü göndermeniz gerekiyorsa, bu aşamada yapabilirsiniz. Bu isteğe bağlıdır ve kullanım durumunuza bağlıdır.

| Dil   | Örnek Bağlantı                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| JavaScript | [<ins>Dispatching Data Root</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/dispatch_data_root.ts)                                       |
| Rust       | [<ins>Submit Data and Dispatch Data Root</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/submit_data_and_dispatch_data_root.rs) |

#### Adım 4: Verileri ve Kanıtları Sorgulama

Verilerinizi gönderdikten sonra, düzgün bir şekilde saklandığından ve geri alınabilir olduğundan emin olmak için sorgulamak isteyebilirsiniz.

| Dil   | Örnek Bağlantı                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript | [<ins>Querying Data Proof</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/query_proof_data.ts)           |
| Go         | [<ins>Querying Data Proof</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/queryProofData)                |
| Rust       | [<ins>Democracy External</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/democracy_external.rs) |

#### Adım 5: İzleme ve Ölçümler

Son olarak, yeni blokları ve diğer ölçümleri takip ederek ağı ve verilerinizi izleyebilirsiniz.

| Language   | Example Link                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| JavaScript | [<ins>Listening for New Blocks</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/listen_new_blocks.ts) |
| Go         | [<ins>Listening for New Blocks</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/listenNewBlocks)      |

### API Örnekleri

Aşağıdaki tabloda Avail ağı ile etkileşim için çeşitli kod örnekleri listelenmektedir. Bu örnekler, işlevselliğe ve desteklenen programlama dillerine göre düzenlenmiştir.

| İşlevsellik                             | Desteklenen Diller                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Veri Gönderimi                           | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/data_submit.ts), [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/dataSubmit), [<ins>Rust</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/submit_data_and_dispatch_data_root.rs) |
| Veri Kökünün Gönderilmesi                     | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/dispatch_data_root.ts)                                                                                                                                                                                                                                |
| Uygulama Anahtarı Oluşturma                  | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/app_id.ts), [<ins>Rust</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/create_app_key.rs)                                                                                                                          |
| Varlık Transferi                           | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/transfer.ts), [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/transfer)                                                                                                                                            |
| Sorgulama Kanıtı/Veri Kanıtı                 | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/query_proof.ts), [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/queryProofData)                                                                                                                                   |
| Uygulama Verilerini Sorgulama                | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/query_app_data.ts)                                                                                                                                                                                                                                    |
| Olay İzleme (Bloklar/Veri Gönderimi) | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/listen_new_blocks.ts), [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/listenNewBlocks), [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/dataSubmitWatch)                       |
| Ağ Bağlantısı ve Bilgi                 | [<ins>TypeScript</ins>](https://github.com/availproject/avail/tree/develop/examples/ts/src/connect.ts), [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/connect)                                                                                                                                              |
| Dahili Operasyonlar                      | [<ins>Go</ins>](https://github.com/availproject/avail/tree/old_develop/examples/go/internal)                                                                                                                                                                                                                                                     |
| Rust + & Substrate Örnekleri               | Data Availability Bridge Actor, Democracy External vb. gibi çeşitli  [<ins>Rust</ins>](https://github.com/availproject/avail/blob/old_develop/avail-subxt/examples/) örnekleri
