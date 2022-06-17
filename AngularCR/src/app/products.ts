import { SafeSubscriber } from "rxjs/internal/Subscriber";

export const products = [

    {
    image: 'https://cdn.pixabay.com/photo/2016/03/05/09/22/eat-1237431_960_720.jpg',
    name: 'Pizza Inferno',
    price: 15.50,
    description: 'Cook Mario itself made this delcious pizza. It is hot and spicy and super delicious nom nom nom.',
    availability: true,
    ingredients: 'tomato sauce, cheese, spicy salami, black olives, basil, olive oil'
},
{
    image: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg',
    name: 'Pizza Capricciosa',
    price: 15.50,
    description: 'Cook Luigi itself made this delcious pizza. It is hot and spicy and super delicious nom nom nom.',
    availability: true,
    ingredients: 'tomato sauce, cheese, spicy salami, black olives, basil, olive oil'
}, {
    image: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
    name: 'Pizza Margerita',
    price: 10.70,
    description: 'Cook Waluigi itself made this delcious pizza. It is hot and spicy and super delicious nom nom nom.',
    availability: false,
    ingredients: 'tomato sauce, cheese, spicy salami, black olives, basil, olive oil'
}, {
    image: 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_960_720.jpg',
    name: 'Pizza Prosciutto',
    price: 15.50,
    description: 'Cook Wario itself made this delcious pizza. It is hot and spicy and super delicious nom nom nom.',
    availability: true,
    ingredients: 'tomato sauce, cheese, spicy salami, black olives, basil, olive oil'
}, {
    image: 'https://cdn.pixabay.com/photo/2014/12/15/13/40/penne-569072_960_720.jpg',
    name: 'Penne al Gorgonzola',
    price: 9.80,
    description: 'Cook Toad itself made this delcious pasta. It is hot and spicy and super delicious nom nom nom.',
    availability: true,
    ingredients: 'tomato sauce, basil, olive oil, gorgonzola'
}, {
    image: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg',
    name: 'Spaghetti Carbonara',
    price: 10.20,
    description: 'Cook Peach itself made this delcious pasta. It is hot and spicy and super delicious nom nom nom.',
    availability: true,
    ingredients: 'carbonara sauce, basil, olive oil'

}, {
    image: 'https://cdn.pixabay.com/photo/2017/03/19/18/22/italian-food-2157246_960_720.jpg',
    name: 'Tiramisu',
    price: 10.20,
    description: 'Cook Toadette itself made this delcious tiramisu. It is hot and spicy and super delicious nom nom nom.',
    availability: true,
    ingredients: 'mascarpone cheese, savoiardi ladyfingers, rum'
}
];

export interface Product {
    name: string;
    price: number;
    description: string;
    availability: boolean;
    image: string;
    ingredients: string;
    }