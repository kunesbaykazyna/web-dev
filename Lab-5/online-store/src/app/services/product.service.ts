import { Category } from "../models/category.models";
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    categories: Category[] = [{ id: 1, name: 'Computers' },
    { id: 2, name: 'Household Goods' },
    { id: 3, name: 'Clothes' },
    { id: 4, name: 'Smartphones' }
    ];

    products: Product[] = [
        {
            id: 1,
            name: 'Teclast P50 2025',
            price: 108990,
            description: 'Teclast P50 2025 - это 11-дюймовый планшет, работающий на Android 15, с разрешением экрана 1280x800 (HD) и IPS-матрицей. Встроенный процессор Tiger T606 (8 ядер) с тактовой частотой 1.6 ГГц. ',
            link: 'https://kaspi.kz/shop/p/teclast-p50-2025-11-djuim-8-gb-128-gb-goluboi-podarok-140264375/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p84/44446056.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pf3/p84/44446056.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p84/44446057.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pba/p84/44446058.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9e/p84/44446059.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 1
        },
        {
            id: 2,
            name: 'PIXEL i5-10400F ',
            price: 335000,
            description: 'Представляем вам мощный системный блок PIXEL, который идеально подходит для игр и работы. С видеокартой NVIDIA GeForce RTX 3060 ипроцессором Intel Core i5-10400Fвы получите отличную производительность и плавный игровой процесс.',
            link: 'https://kaspi.kz/shop/p/pixel-i5-10400f-rtx-3060-16gb-512-gb-ssd-win-10-103421555/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6d/hb0/64048536518686.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h5b/64048538484766.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 1
        },
        {
            id: 3,
            name: 'LINEUP i5-14400',
            price: 679000,
            description: 'Полный комплект ПК — всё, что нужно для игр и работы!',
            link: 'https://kaspi.kz/shop/p/lineup-5060140222-chernyi-140465557/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p43/45177693.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p68/p43/45177693.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p1a/p27/98411362.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p53/p27/98411364.png?format=gallery-medium'],
            likes: 0,
            categoryId: 1
        },
        {
            id: 4,
            name: 'MacBook Air 13 ',
            price: 525121,
            description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность.',
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 1
        },
        {
            id: 5,
            name: 'ASUS Vivobook',
            price: 398997,
            description: 'ASUS Vivobook 15 (X1504) – мощный, универсальный, инновационный ноутбук с отличными характеристиками и передовой функциональностью.',
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h89/h93/85775243313182.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he5/h06/85775243378718.jpg?format=gallery-large'],
            likes: 0,
            categoryId: 1
        },
        {
            id: 6,
            name: 'Сушилка отдельностоящая многоярусная',
            price: 4999,
            description: 'Отдельностоящая сушилка для посуды — незаменимый помощник на вашей кухне, который обеспечит эффективное сушка и организацию пространства.',
            link: 'https://kaspi.kz/shop/p/otdel-nostojaschaja-979079-nerzhavejuschaja-stal--113162471/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/h0b/83580691808286.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h84/h0b/83580691808286.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h85/hc3/83580694757406.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 2
        },
        {
            id: 7,
            name: 'Чайник TEA POT',
            price: 1098,
            description: 'Двухслойные бумажные полотенца станут незаменимым помощником в доме благодаря своим отличным впитывающим свойствам.',
            link: 'https://kaspi.kz/shop/p/chainik-tea-pot-61termo-1-l-steklo-103262843/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h92/64165549178910.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h4e/h92/64165549178910.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h49/64165551669278.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h10/h7e/84732780511262.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 2
        },
        {
            id: 8,
            name: 'Safeguard Family Germ Protection',
            price: 479,
            description: 'Попробуйте очищающее твердое мыло Safeguard (Сейфгард) Классическое Ослепительно Белое в упаковке 90 г.',
            link: 'https://kaspi.kz/shop/p/kuskovoe-mylo-tualetnoe-safeguard-family-germ-protection-90-g-100709977/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/p6b/55024182.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p0f/p6b/55024182.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p6a/55024183.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p6a/55024184.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 2
        },

        {
            id: 9,
            name: 'Exsanta крючок',
            price: 1650,
            description: 'Крючки настенные самоклеящиеся Exsanta – универсальный аксессуар для хранения вещей в доме, квартире, даче или на работе.',
            link: 'https://kaspi.kz/shop/p/exsanta-krjuchok-829210174-4-sht-nerzhavejuschaja-stal--129855100/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p75/pb1/95928400.jpeg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p75/pb1/95928400.jpeg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pd0/p6a/7673298.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p9d/p20/7673300.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 2
        },
        {
            id: 10,
            name: 'Зеркало напольное Element',
            price: 13999,
            description: 'Практичное зеркало напольное на колесиках подойдет для установки как в залах небольших бутиков, так и огромных торговых площадей.',
            link: 'https://kaspi.kz/shop/p/element-zerkalo-312-5-50x160-sm-napol-noe-143855631/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pc6/pa4/58218594.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pc6/pa4/58218594.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pe2/pa4/58218595.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pff/pa4/58218596.png?format=gallery-medium'],
            likes: 0,
            categoryId: 2
        },

        {
            id: 11,
            name: 'Клеш QSQR черный',
            price: 4991,
            description: 'QSQR клеш леггинсы – жоғары бел, жұмсақ және серпінді мата, фигураны мінсіз көрсетеді.',
            link: 'https://kaspi.kz/shop/p/klesh-qsqr-chernyi-147564148/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p41/103927679.jpeg?format=gallery-medium', images: ['https://resources.cdn-kaspi.kz/img/m/p/p55/p41/103927679.jpeg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p47/pe3/84264062.jpeg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pb1/pe6/84264063.jpeg?format=gallery-medium'],
            likes: 0,
            categoryId: 3
        },
        {
            id: 12,
            name: 'Рубашка темно-синий',
            price: 2998,
            description: 'Рубашка 30293315 — стильный выбор для создания элегантного образа. Изготовленная из полиэстера, она сочетает в себе комфорт и долговечность, что делает её идеальной для повседневного ношения.',
            link: 'https://kaspi.kz/shop/p/rubashka-temno-sinii-122145805/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h73/86723068231710.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hd9/h73/86723068231710.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h2e/ha8/86723068297246.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hcd/h29/86723068362782.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 3
        },
        {
            id: 13,
            name: 'Пиджак приталенный 1Promo ',
            price: 4199,
            description: 'Пиджак 1Promo однотонный — стильный элемент гардероба, который подчеркнёт вашу индивидуальность и элегантность.',
            link: 'https://kaspi.kz/shop/p/pidzhak-1promo-chernyi-130193262/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p53/pd2/81470041.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p53/pd2/81470041.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p6f/pd2/81470042.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p8c/pd2/81470043.png?format=gallery-medium'],
            likes: 0,
            categoryId: 3
        },
        {
            id: 14,
            name: 'Комплект коричневый',
            price: 2088,
            description: 'Комплект 006244491 — стильный и комфортный выбор для домашнего уюта. Изготовленный из вискозы с добавлением шелка, этот комплект обеспечивает невероятную мягкость и воздухопроницаемость.',
            link: 'https://kaspi.kz/shop/p/komplekt-korichnevyi-139000484/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h4a/85596199944222.jpg?format=gallery-medium', images: ['https://resources.cdn-kaspi.kz/img/m/p/hd1/h4a/85596199944222.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p88/p23/95026288.bin?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p6c/p23/95026289.bin?format=gallery-medium'],
            likes: 0,
            categoryId: 3
        },
        {
            id: 15,
            name: 'Джинсы свободного ркая',
            price: 18900,
            description: 'Джинсы свободного кроя KINSTONE 303 — стильный и комфортный выбор для повседневного ношения, который сочетает в себе высокое качество и удобство.',
            link: 'https://kaspi.kz/shop/p/dzhinsy-svobodnogo-kroja-kinstone-temno-seryi-132061761/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/paa/112044384.jpeg?format=gallery-medium', images: ['https://resources.cdn-kaspi.kz/img/m/p/pc7/paa/112044384.jpeg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p1c/pa9/46785856.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p71/pa9/46785859.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 3
        },
        {
            id: 16,
            name: 'Кабель A-case USB TypeC ',
            price: 2381,
            description: 'Кабель A-case USB TypeC (M) - Lightning (M) – это надёжный и удобный аксессуар для зарядки и синхронизации данных ваших устройств Apple.',
            link: 'https://kaspi.kz/shop/p/kabel-a-case-usb-typec-m-lightning-m-1-m-ac-cb01-l-t-belyi-124414441/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/pfd/44066258.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pa4/pfd/44066258.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pc0/pfd/44066259.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pd3/pff/44066260.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 4
        },
        {
            id: 17,
            name: 'Iphone 17 Pro',
            price: 801891,
            description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'],
            likes: 0,
            categoryId: 4
        },
        {
            id: 18,
            name: 'Iphone 15',
            price: 399886,
            description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 4
        },
        {
            id: 19,
            name: 'Samsung Galaxy A07 ',
            price: 98666,
            description: 'Samsung Galaxy A07 6 ГБ/128 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти для хранения ваших данных.',
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p28/pd7/61291244.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 4
        },
        {
            id: 20,
            name: ' Redmi A3x',
            price: 50000,
            description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном, которое идеально подходит для повседневного использования.',
            link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 4
        }
    ];


    selectCategoryId!: number;


    getCategories(): Category[] {
        return this.categories;
    }
    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter(p => p.categoryId === categoryId);
    }

    selectCategories(id: number): void {
        this.selectCategoryId = id;
    }

    getProducts(): Product[] {
        return this.products;
    }

}