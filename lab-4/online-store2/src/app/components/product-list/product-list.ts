import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Чехол для Apple iPhone 13',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнение.',
      price: 63,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pc5/64215961.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p86/pc5/64215962.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=315430100'
    },

    {
      id: 2,
      name: 'Домашние тапочки',
      description: 'Тапочки 16806125 — это уютное решение для домашнего комфорта, которое сочетает в себе стильный дизайн и высокое качество материалов.',
      price: 1289,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ped/p5a/95702279.bin?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ped/p5a/95702279.bin?format=preview-large', 'https://resources.cdn-kaspi.kz/img/m/p/pf8/p61/95702257.bin?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p54/p5f/95702260.bin?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/tapochki-bezhevyi-belyi-11816303b/?c=315430100'
    },
    {
      id: 3,
      name: 'МФУ Epson EcoTank L3250',
      description: 'МФУ Epson EcoTank L3250 — это струйное устройство «3-в-1» (принтер, сканер, копир) с поддержкой Wi-Fi, предназначенное для дома и небольшого офиса. ',
      price: 106254,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h69/h7d/66594301870110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h67/66594499002398.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p1a/p9c/67212712.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000'
    },
    {
      id: 4,
      name: 'Зимняя куртка',
      description: 'Зимняя куртка JECAMIAN — стильный и комфортный выбор для холодных дней, обеспечивающий отличную защиту от низких температур до -10°C.',
      price: 6200,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hcc/84637043884062.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9f/hcc/84637043884062.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h80/ha4/84637043949598.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h2c/84637044015134.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-chernyi-115064963/?c=315430100'
    },
    {
      id: 5,
      name: 'LUXVISAGE гель для бровей',
      description: 'Представляем вам гель для бровей Brow Laminator Extreme Fix от LUXVISAGE — идеальное средство для создания безупречных бровей с эффектом ламинирования, которое сохраняет свою стойкость на протяжении всего дня.',
      price: 1290,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h41/86556430041118.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h52/h41/86556430041118.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h79/h46/86556430237726.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h8d/86556430303262.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/luxvisage-gel-brow-laminator-extreme-fix-prozrachnyi-4-ml-121516864/?c=315430100'
    },
    {
      id: 6,
      name: 'Celimax тонер',
      description: 'Барьерный кремовый тонер Celimax Dual Barrier Creamy Toner увлажняет, питает и восстанавливает, укрепляет естественный защитный слой и снижает чувствительность кожи к внешним раздражителям, успокаивая и смягчая.',
      price: 3360,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h6e/86640643702814.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hef/h6e/86640643702814.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h3b/86640324083742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h66/86640324116510.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/celimax-toner-dual-barrier-150-ml-108098827/?c=315430100'
    },
    {
      id: 7,
      name: 'Thomas Kosmala №4 Apres lAmour',
      description: 'No 4 Apres LAmour — нишевая парфюмерная вода с фужерно-древесным ароматом для женщин и мужчин, созданная в 2018 году парфюмером и основателем одноименного бренда Thomas Kosmala.',
      price: 64000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h38/64075671109662.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h52/h38/64075671109662.jpg?format=preview-large', 'https://resources.cdn-kaspi.kz/img/m/p/heb/h9a/64075676680222.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h60/h79/64075680645150.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/thomas-kosmala-4-apres-l-amour-parfjumernaja-voda-edp-100-ml-uniseks-101611285/?c=750000000'
    },
    {
      id: 8,
      name: 'Iphone 17 Pro Max',
      description: 'pple iPhone 17 Pro Max 256Gb — это воплощение инноваций и бескомпромиссного качества в мире смартфонов. Мощный процессор A19 Pro и передовая система камер открывают новые горизонты для творчества и продуктивности.',
      price: 915990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p97/pb0/64475614.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000'
    },
    {
      id: 9,
      name: 'Смарт Очки',
      description: 'Высококачественные линзы доступны в солнцезащитных, поляризационных линзах или линзах Transitions. Все линзы обеспечивают повышенную прозрачность, комфорт и 100% защиту от UVA и UVB лучей. Совместимость с рецептурными линзами.',
      price: 257805,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=preview-large', 'https://resources.cdn-kaspi.kz/img/m/p/pd3/pd8/54777417.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/pb7/pd8/54777418.jpg?format=gallery-large'],
      link: 'https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-standard-rw4006-601sm1-50-22-chernyi-116509833/?c=750000000'
    },
    {
      id: 10,
      name: 'Офисное кресло',
      description: 'Офисное кресло Element-5 CHR-01 — комфортное и стильное решение для вашего рабочего пространства, обеспечивающее поддержку и эргономику на протяжении всего рабочего дня.',
      price: 10700,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/pa8/70340168.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p5e/pa8/70340168.png?format=preview-large', 'https://resources.cdn-kaspi.kz/img/m/p/pae/p7b/53252510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pca/p7b/53252511.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ofisnoe-kreslo-01-chernyi-118725692/?c=750000000'
    },

  ];

  shareWhatsapp(product: Product) {
    const t = `Check out this product: ${product.link} `
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(t)}`;
    window.open(shareUrl, '_blank');
  }

  shareTelegram(product: Product) {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
  }

  selectedImage: Record<number, string> = {};

  getMainImage(product: Product): string {
    return this.selectedImage[product.id] ?? product.image;
  }

  selectImage(productId: number, img: string) {
    this.selectedImage[productId] = img;
  }

  amountStar(rate: number): number[] {
    return Array(Math.floor(rate)).fill(0);

  }

}