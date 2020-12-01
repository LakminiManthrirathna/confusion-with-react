import uth from '../images/uthappizza.png';
import zuc from '../images/zucchipakoda.png';
import vad from '../images/vadonut.png';
import ela from '../images/elaicheesecake.png';

export const DISHES =
    [
        {
        id: 0,
        name:'Uthappizza',
        image: uth,
        category: 'mains',
        label:'Hot',
        price:'4.99',
        featured: true,
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                    
        },
        {
        id: 1,
        name:'Zucchipakoda',
        image: zuc,
        category: 'appetizer',
        label:'',
        price:'1.99',
        featured: false,
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
        },
        {
        id: 2,
        name: 'VadaCake',
        image: vad,
        category: 'appetizer',
        label:'New',
        price:'1.99',
        featured: false,
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
        },
        {
        id: 3,
        name:'ElaiCheese Cake',
        image: ela,
        category: 'dessert',
        label:'',
        price:'2.99',
        featured: false,
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        }
    ];
