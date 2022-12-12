import axios from "axios";
import {sendEmail} from "./rootService.js"

export const sendMail = async (req, res) => {
    try {
        const {data} = await req.body;
        const api = 'https://api.kvitnychok.store/api/order';

        const prevOrder = await axios.get(api).then(response => parseInt(response.data?.data?.attributes?.order))
        const currentOrder = await axios.put(api, {
            data: {order: prevOrder + 1}
        }).then(response => response.data?.data?.attributes?.order)

        const response = await sendEmail("justcoda@gmail.com", {
            to: 'koval.develop@gmail.com',
            subject: `Замовлення з сайту, № ${currentOrder}`,
            text: 'no text',
            html: '<h1>some big text</h1>',
        })
        const response1 = await sendEmail("koval.develop@gmail.com", {
            to: 'koval.develop@gmail.com',
            subject: `Замовлення з сайту, № ${currentOrder}`,
            text: 'no text',
            html: `<div>
<h2 style="text-align: center">Замовлення № ${currentOrder}</h2>
<h3><b>Ім'я та Прізвище:</b> ${data.user?.name}</h3>
<h3><b>Телефон:</b> ${data.user?.phoneNumber}</h3>
<h3><b>Адреса</b> ${data.user?.city}</h3>
<h3><b>Відділення</b> ${data.user?.department}</h3>
<h3><b>Замовлення:</b></h3>
<div>
${data.cart.map(item => `<div style="border-bottom: 1px solid #333">
<p>назва: ${item.attributes.title}</p>
<p>кількість: ${item.attributes.count}</p>
<p>ціна: ${item.attributes.price}</p>
<p>акртикул: ${item.attributes.article}</p>
</div>`)}
</div>
<h2>Загальна вартість: <b>${data.totalPrice}</b></h2>
</div>`,
        })

        res.status(200).json({id: 1, status: "ok", user: response, client: response1})
        console.log("works", data)
    } catch (error) {
        res.status(405).error(error)
    }
}

//
const a = {
    "user": {
        "city": "Хмельницька область, Віньковецький р-н, Віньківці",
        "department": "Віньківці, Відділення №1: вул. Гагаріна, 7а",
        "name": "Коваль",
        "phoneNumber": "+380952823990"
    },
    "cart": [
        {
            "id": 1,
            "attributes": {
                "title": "Орхідея Цимбідіум алоелистий",
                "description": "Пропонуємо вам купити багаторічники від перевірених постачальників недорого. Якщо ви хочете отримати ефект моментального квітника, то беріть більше саджанців, ніж вказано в схемі. І розміщуйте їх в щільних посадках. Доставляємо багаторічники післяплатою поштою (Нова Пошта, Укрпошта). Ми завжди будемо робити все можливе, щоб відправити рослини в установлені терміни. Працюємо без передоплати.",
                "count": 2,
                "createdAt": "2022-12-11T17:04:09.743Z",
                "updatedAt": "2022-12-12T10:38:30.170Z",
                "publishedAt": "2022-12-11T17:08:31.925Z",
                "article": "1",
                "price": 100,
                "image": {
                    "data": {
                        "id": 1,
                        "attributes": {
                            "name": "kaktus.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 1000,
                            "height": 1000,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_kaktus.jpg",
                                    "hash": "thumbnail_kaktus_1870e468e0",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 156,
                                    "height": 156,
                                    "size": 4.04,
                                    "url": "/uploads/thumbnail_kaktus_1870e468e0.jpg"
                                },
                                "small": {
                                    "name": "small_kaktus.jpg",
                                    "hash": "small_kaktus_1870e468e0",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 500,
                                    "height": 500,
                                    "size": 33.02,
                                    "url": "/uploads/small_kaktus_1870e468e0.jpg"
                                },
                                "medium": {
                                    "name": "medium_kaktus.jpg",
                                    "hash": "medium_kaktus_1870e468e0",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 750,
                                    "height": 750,
                                    "size": 71.16,
                                    "url": "/uploads/medium_kaktus_1870e468e0.jpg"
                                }
                            },
                            "hash": "kaktus_1870e468e0",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 117.12,
                            "url": "/uploads/kaktus_1870e468e0.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2022-12-11T17:04:04.604Z",
                            "updatedAt": "2022-12-11T17:04:04.604Z"
                        }
                    }
                }
            }
        },
        {
            "id": 2,
            "attributes": {
                "title": "Орхідея тест",
                "description": "Орхідея тестОрхідея тестОрхідея тестОрхідея тестОрхідея тестОрхідея тестОрхідея тестОрхідея тестОрхідея тестОрхідея тест",
                "count": 5,
                "createdAt": "2022-12-12T09:34:56.225Z",
                "updatedAt": "2022-12-12T10:18:37.689Z",
                "publishedAt": "2022-12-12T09:35:03.703Z",
                "article": "2",
                "price": 200,
                "image": {
                    "data": {
                        "id": 1,
                        "attributes": {
                            "name": "kaktus.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 1000,
                            "height": 1000,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_kaktus.jpg",
                                    "hash": "thumbnail_kaktus_1870e468e0",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 156,
                                    "height": 156,
                                    "size": 4.04,
                                    "url": "/uploads/thumbnail_kaktus_1870e468e0.jpg"
                                },
                                "small": {
                                    "name": "small_kaktus.jpg",
                                    "hash": "small_kaktus_1870e468e0",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 500,
                                    "height": 500,
                                    "size": 33.02,
                                    "url": "/uploads/small_kaktus_1870e468e0.jpg"
                                },
                                "medium": {
                                    "name": "medium_kaktus.jpg",
                                    "hash": "medium_kaktus_1870e468e0",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 750,
                                    "height": 750,
                                    "size": 71.16,
                                    "url": "/uploads/medium_kaktus_1870e468e0.jpg"
                                }
                            },
                            "hash": "kaktus_1870e468e0",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 117.12,
                            "url": "/uploads/kaktus_1870e468e0.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2022-12-11T17:04:04.604Z",
                            "updatedAt": "2022-12-11T17:04:04.604Z"
                        }
                    }
                }
            }
        }
    ]
}