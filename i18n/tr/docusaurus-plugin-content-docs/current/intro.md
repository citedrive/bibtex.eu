---
title: BibTeX Kaynakça Yönetimi - LaTeX için Detaylı Kılavuz
description: "LaTeX ile BibTeX'i kaynakça yönetiminde nasıl etkili bir şekilde kullanabileceğinizi öğrenin, .bib dosyası oluşturmaktan LaTeX belgenize entegrasyona kadar."
sidebar_label: LaTeX ile BibTeX Kaynakça Yönetimi (Başlangıç Rehberi)
sidebar_position: 1
slug: "/"
---

# LaTeX'te BibTeX Kaynakça Yönetimi

Başlangıç için **BibTeX**, pek çok özelliği ve formatıyla zorlayıcı görünebilir. Ancak bu rehber, basit bir bakış açısı sunar ve BibTeX'i LaTeX ile nasıl etkili bir şekilde kullanabileceğinizi gösterir.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bHD94qM0vyg" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Adım 1: .bib Dosyası Oluşturma ve Doldurma

Başlamak için bir `.bib` dosyası oluşturun, örneğin `bibliography.bib`, ve BibTeX girdileri ekleyin. Tipik bir örnek, Ernest Hemingway'in "Yaşlı Adam ve Deniz" için bir referans eklemektir:

```latex
@book{Hemingway1952,
  title={Yaşlı Adam ve Deniz},
  author={Hemingway, Ernest},
  year={1952},
  publisher={Charles Scribner's Sons}
}
```

Bu girişin "anatomisini" çözümlediğinizde, her BibTeX girişinin nasıl tanımlandığını anlamak için aşağıdaki üç bileşene bakmanız yeterlidir:

- **Giriş türü**: `@book` ile referansın türünü tanımlarız, bu durumda bir kitap.
- **Giriş alanları**: bu örnekte `title`, `author`, `year` ve `publisher`.
- **Alıntı anahtarı**: Bu örnek için `Hemingway1952` ve LaTeX'te metin içi alıntı yapmak, yani kaynağa atıfta bulunmak için kullanılır. Aynı örnek ile bunu `\cite{Hemingway1952}` ile yaparız.

## Adım 2: Bir LaTeX Belgesine Entegrasyon

Referanslarınızı LaTeX'te kullanmak için aşağıdaki örneği takip edin:

```latex
\documentclass{article}
\usepackage[utf8]{inputenc}

\title{BibTeX referansları \LaTeX'te}
\author{John Yılmaz}

\begin{document}

\maketitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \cite{Hemingway1952}
\medskip

\bibliographystyle{unsrt}
\bibliography{bibliography}

\end{document}
```

LaTeX belgesini derledikten sonra, `\cite{Hemingway1952}` komutunun BibTeX dosyasındaki bu kimlikle belirtilen referansla, bu örnekte `[1]` olarak değiştirildiğini göreceksiniz.

![BibTeX - LaTeX - Overleaf](@site/static/img/tutorial/LaTeX_Overleaf_BibTeX-Example.png)

Adını `bibliography.bib` olarak koyduğumuz .bib dosyası `\bibliography{bibliography}`'da tanımlanmıştır ve alıntı/bibliyografi stili `\bibliographystyle{unsrt}`'dir.

## Kaynakça Yöneticisi Önerileri

BibTeX dosyalarını manuel olarak düzenlemek zaman alabilir. İşinizi kolaylaştırabilecek bazı önerilen referans yöneticileri şunlardır:

- [CiteDrive](https://www.citedrive.com/) BibTeX tabanlı, işbirlikçi ve web tabanlı bir araçtır.
- [Zotero](https://www.zotero.org/) geniş özellikler sunar ve [Better BibTeX For Zotero](https://retorque.re/zotero-better-bibtex/) eklentisi ile BibTeX'e iyi bir entegrasyon sağlar.
- [JabRef](https://www.jabref.org/) platformlar arası çalışabilen BibTeX tabanlı bir referans yöneticisidir.