import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restraunt Container
 *  - Restraunt Card
 *      - Img
 *      - Name of Restraunt, Star Rating, Cuisine, Delivery time etc
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 * 
 * 
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#F0F0F0"
}

const resList = [
    {
        "name": "Bharawan Da Dhaba",
        "rating": "4.4",
        "rating_count": "50+ ratings",
        "cost": "₹ 300",
        "address": "Bharawan Da Dhaba, rimpy bakery 12 circular road main bazar abohar",
        "cuisine": "Indian",
        "lic_no": "license",
        "menu": {
            "Delicious Khana Khazana": {
                "Dal Fry": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Handi": {
                    "price": "170",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Fry Yellow": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Makhani": {
                    "price": "170",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Maharani": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Channa Masala": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Masala": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tikka Butter Masala": {
                    "price": "230",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tomato": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Shahi Paneer": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Jeera Aloo": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Kadai Paneer": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Kaju Palak": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Corn": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Corn Masala": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Malai Kofta": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Handi": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Mutter Mushroom": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Mutter Paneer": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Methi Malai Mutter": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Kadi Pakoda": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Kofta": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Masala": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Kofta": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Aloo": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Gobi": {
                    "price": "109",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Paneer": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Bhurji": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Dum Aloo": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Gravy": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Irani Paneer": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Veg  Pulav": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Veg": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Do Pyaza": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Mutter": {
                    "price": "109",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Do Pyaza": {
                    "price": "210",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Green Salad": {
                "Green Salad": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Onion Salad": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Fruit Cream Salad": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Fruit Salad": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Cucumber Salad": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Basmati Ki Mehak": {
                "Plain Rice": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Jeera Rice": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Angan Ki Kali": {
                "Plain Dahi": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Boondi Raita": {
                    "price": "90",
                    "veg_or_non_veg": "Veg"
                },
                "Pudina Raita": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Pineapple Raita": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                },
                "Fruits Raita": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Raita": {
                    "price": "90",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Breakfast": {
                "Aloo Paratha": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Onion Paratha": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Paratha": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Mix  Paratha": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Roti And Naan": {
                "Plain Chapati": {
                    "price": "7",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Chapati": {
                    "price": "8",
                    "veg_or_non_veg": "Veg"
                },
                "Plain Naan": {
                    "price": "35",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Naan": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                },
                "Stuff Naan": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Garlic Naan": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Laccha Paratha": {
                    "price": "35",
                    "veg_or_non_veg": "Veg"
                },
                "Missi Roti": {
                    "price": "19",
                    "veg_or_non_veg": "Veg"
                },
                "Onion Roti": {
                    "price": "19",
                    "veg_or_non_veg": "Veg"
                },
                "Dry Papad": {
                    "price": "15",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Fast Food And Snacks": {
                "Channa Chat": {
                    "price": "189",
                    "veg_or_non_veg": "Veg"
                },
                "Channa Fry": {
                    "price": "189",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli Dry": {
                    "price": "300",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli Gravy": {
                    "price": "320",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chowmein": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Finger Chips": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Manchurian Dry": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Manchurian Gravy": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Pakora": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Spring Roll": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Noodles": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Burger": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Finger (8 Pcs)": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Burger": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Burger": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/bharawan-da-dhaba-central-abohar-abohar-156587"
    },
    {
        "name": "shere punjab veg",
        "rating": "4.0",
        "rating_count": "100+ ratings",
        "cost": "₹ 150",
        "address": "shere punjab veg, major surinder chowk near verma sons petrol pump and lic building abohar",
        "cuisine": "North Indian",
        "lic_no": "22120652000021",
        "menu": {
            "Recommended": {
                "Chana Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Vegetable": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Makhani": {
                    "price": "169",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Gobi": {
                    "price": "109",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Fry": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Yellow Dal Tadka": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Kadhi Pakora": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Do Pyaza": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Gravy": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Kadai Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Punjabi Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tikka Butter Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tomato": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Malai Kofta": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Shahi Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Bhurji": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Sarso Ka Saag Makhani": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Dum Aloo": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mattar Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Chapati": {
                    "price": "7",
                    "veg_or_non_veg": "Veg"
                },
                "Plain Chapati": {
                    "price": "6",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Naan": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Biryani": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Pulao": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli Gravy": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "170",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Manchurian": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Manchurian Gravy": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Finger": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Family Binge Combos": {
                "Chana Masala (Without Onion + Garlic) + Mix Veg (Without Onion + Garlic) + Veg Biryani (Without Onion + Garlic) + 4 Butter Naan": {
                    "price": "735",
                    "veg_or_non_veg": "Veg"
                },
                "Punjabi Paneer (Without Onion + Garlic) + Veg Biryani (Without Onion + Garlic) + 4 Missi Chapati": {
                    "price": "523",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tomato (Without Onion + Garlic) + Chesse Butter Masala (Without Onion + Garlic) + 4 Butter Naan": {
                    "price": "515",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Paneer (Without Onion + Garlic) + Veg Biryani (Without Onion + Garlic) + Veg Pulao (Without Onion + Garlic)": {
                    "price": "655",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Vegetable": {
                "Chana Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Vegetable": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Palak Mattar": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Palak Kaju": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Jeera Aloo": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Palak": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Maharani": {
                    "price": "169",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Makhani": {
                    "price": "169",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Gobi": {
                    "price": "109",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Fry": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Yellow Dal Tadka": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Kadhi Pakora": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Jeera Aloo": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Gobi Masala": {
                    "price": "79",
                    "veg_or_non_veg": "Veg"
                },
                "Baingan Bartha Makhani": {
                    "price": "79",
                    "veg_or_non_veg": "Veg"
                },
                "Kadhi Paneer Kofta": {
                    "price": "169",
                    "veg_or_non_veg": "Veg"
                },
                "Soya Butter Chaap Gravy": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Malai Mattar": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Do Pyaza": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Gravy": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Kaju Butter Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Shahi Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Malai Kofta": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Punjabi Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Paneer Do Pyaza": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Badami Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Kaju Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Korma": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Kadai Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Paneer Masala": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Punjabi Paneer": {
                    "price": "129",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tikka Butter Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tomato": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Malai Kofta": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Shahi Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Bhurji": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mattar Do Pyaza": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Stuff Tomato": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Malai Kofta": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Mattar": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Saag Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Sarso Ka Saag Makhani": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Dum Aloo": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Mattar Paneer": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Handi": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Sev Bhaji": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Paratha": {
                "Potato Onion Parantha": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Parantha": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Parantha": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Garlic Parantha": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Chapati & Naan": {
                "Butter Chapati": {
                    "price": "7",
                    "veg_or_non_veg": "Veg"
                },
                "Missi Chapati": {
                    "price": "19",
                    "veg_or_non_veg": "Veg"
                },
                "Plain Chapati": {
                    "price": "6",
                    "veg_or_non_veg": "Veg"
                },
                "Churidar Parantha": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Pyaz Mini Parantha": {
                    "price": "22",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Parantha": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Naan": {
                    "price": "85",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Naan": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Garlic Butter Naan": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Rice": {
                "Veg Biryani": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Jeera Rice": {
                    "price": "179",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Jeera Rice": {
                    "price": "179",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Pulao": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Jeera Rice": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Snacks": {
                "Potato Chilli": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli Gravy": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "170",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Manchurian": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Manchurian Gravy": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Chilli": {
                    "price": "130",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Finger": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Chana Fry": {
                    "price": "189",
                    "veg_or_non_veg": "Veg"
                },
                "Potato Chips": {
                    "price": "110",
                    "veg_or_non_veg": "Veg"
                },
                "Papad Masala": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Papad Dry": {
                    "price": "21",
                    "veg_or_non_veg": "Veg"
                },
                "Papad Fry": {
                    "price": "31",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Salad": {
                "Cream Salad": {
                    "price": "179",
                    "veg_or_non_veg": "Veg"
                },
                "Green Salad": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/shere-punjab-veg-central-krishna-nagri-abohar-156588"
    },
    {
        "name": "Sethi Milk Badam",
        "rating": "4.2",
        "rating_count": "20+ ratings",
        "cost": "₹ 100",
        "address": "Sethi Milk Badam, main bazar street no 11 abohar",
        "cuisine": "Sweets,Desserts",
        "lic_no": "22119652000039",
        "menu": {
            "Desserts": {
                "Julie 2pc": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Kulfi Simple 1pc": {
                    "price": "20",
                    "veg_or_non_veg": "Veg"
                },
                "Spongy Rasgulla Per Pc": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                },
                "Faluda Rabri Per Glass": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Kulfi Big 1 Pc": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Beverages": {
                "Badam Milk (200 Ml) Bottle": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/sethi-milk-badam-central-krishna-nagri-abohar-156590"
    },
    {
        "name": "Jodhpuri Kachori",
        "rating": "--",
        "rating_count": "Too Few Ratings",
        "cost": "₹ 100",
        "address": "Jodhpuri Kachori, mandi 1 street no 4 main bazar near sbi bank abohar",
        "cuisine": "Snacks",
        "lic_no": "22121652000387",
        "menu": {
            "Snacks And Chat": {
                "Dry Fruit Bhalla": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                },
                "Stuffed Golgappe": {
                    "price": "30",
                    "veg_or_non_veg": "Veg"
                },
                "Papadi Chat": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                },
                "Dry Fruit Dahi Bhalla": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Kachori": {
                    "price": "20",
                    "veg_or_non_veg": "Veg"
                },
                "Rajbhog": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/jodhpuri-kachori-central-main-bazar-abohar-156601"
    },
    {
        "name": "Hinglaj Kachori Bhandhar",
        "rating": "4.2",
        "rating_count": "20+ ratings",
        "cost": "₹ 100",
        "address": "Hinglaj Kachori Bhandhar, street no 11 circular road ,Abohar",
        "cuisine": "Snacks,Chaat",
        "lic_no": "22119652000042",
        "menu": {
            "Recommended": {
                "Dahi Bhalla": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Dry Fruit Bhalla": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Rajbhog": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Panipuri (12 Pcs)": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Panipuri Atta (12 Pcs)": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Pyaz Kachori": {
                    "price": "30",
                    "veg_or_non_veg": "Veg"
                },
                "Papdi Chaat": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Stuffed Golgappa": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Snacks": {
                "Dahi Bhalla": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Dry Fruit Bhalla": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Rajbhog": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Panipuri (12 Pcs)": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Panipuri Atta (12 Pcs)": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Pyaz Kachori": {
                    "price": "30",
                    "veg_or_non_veg": "Veg"
                },
                "Papdi Chaat": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Stuffed Golgappa": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Combao Pck": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Combo 3": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/hinglaj-kachori-bhandhar-central-main-bazar-abohar-156602"
    },
    {
        "name": "Tandoori Nights",
        "rating": "--",
        "rating_count": "Too Few Ratings",
        "cost": "₹ 300",
        "address": "Tandoori Nights, near civil hospital canteen abohar",
        "cuisine": "Tandoor",
        "lic_no": "22121652000229",
        "menu": {
            "Snacks": {
                "Peanut Masala": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Finger Chips": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                },
                "Corn Chat": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Soya Chaap": {
                "Tandoori Malai Chaap": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Chaap": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Jeera Chaap": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "KFC Chaap": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Fried Chaap": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Veg Snacks": {
                "Tandoori Cheese Tikka": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Cheese Malai Tikka": {
                    "price": "170",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Finger": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Jeera": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Lemon Cheese": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Non-Veg": {
                "Tandoori Chicken": {
                    "price": "160",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tandoori Chicken Afghani": {
                    "price": "170",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tandoori Chicken Kali Mirch": {
                    "price": "170",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tandoori Lemon Chicken": {
                    "price": "160",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tandoori Creamy Chicken": {
                    "price": "190",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tandoori Chicken Tikka": {
                    "price": "300",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Malai Tikka": {
                    "price": "350",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Kali Mirch Tikka": {
                    "price": "330",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tawa Chicken": {
                    "price": "280",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Pakora": {
                    "price": "270",
                    "veg_or_non_veg": "Non-veg"
                },
                "KFC Chicken": {
                    "price": "290",
                    "veg_or_non_veg": "Non-veg"
                },
                "Jeera Chicken": {
                    "price": "270",
                    "veg_or_non_veg": "Non-veg"
                },
                "Lemon Chicken": {
                    "price": "270",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chilli Chicken": {
                    "price": "330",
                    "veg_or_non_veg": "Non-veg"
                },
                "Punjabi Chicken": {
                    "price": "270",
                    "veg_or_non_veg": "Non-veg"
                },
                "Masala Chicken": {
                    "price": "280",
                    "veg_or_non_veg": "Non-veg"
                },
                "Kadai Chicken": {
                    "price": "270",
                    "veg_or_non_veg": "Non-veg"
                },
                "Butter Chicken": {
                    "price": "290",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Do Pyaza": {
                    "price": "250",
                    "veg_or_non_veg": "Non-veg"
                },
                "Rara Chicken": {
                    "price": "280",
                    "veg_or_non_veg": "Non-veg"
                },
                "Pepper Chicken": {
                    "price": "300",
                    "veg_or_non_veg": "Non-veg"
                },
                "Special Methi Malai Chicken": {
                    "price": "290",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Egg": {
                "Omelette": {
                    "price": "70",
                    "veg_or_non_veg": "Non-veg"
                },
                "Egg Bhurji": {
                    "price": "80",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Salad": {
                "Onion Salad": {
                    "price": "30",
                    "veg_or_non_veg": "Veg"
                },
                "Kheera Salad": {
                    "price": "30",
                    "veg_or_non_veg": "Veg"
                },
                "Green Salad": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Special Cacumber Salad": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Raita": {
                "Mixed Raita": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Boondi Raita": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Peanut Raita": {
                    "price": "70",
                    "veg_or_non_veg": "Veg"
                },
                "Dahi Tadka": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Dahi Papdi": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Plain Dahi": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Veg Main Course": {
                "Kadai Chaap": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Masala Chaap": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Chaap": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Punjabi Chaap Tari": {
                    "price": "170",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Methi Malai": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Shahi Paneer": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Kadai Paneer": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Masala Paneer": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tomato": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Masala": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/tandoori-nights-central-abohar-abohar-158192"
    },
    {
        "name": "yummy hub",
        "rating": "--",
        "rating_count": "Too Few Ratings",
        "cost": "₹ 200",
        "address": "yummy hub, hanumangarh road near dr naveen sethi hospitalabohar",
        "cuisine": "Indian",
        "lic_no": "22119652000045",
        "menu": {
            "Indian": {
                "Pani Puri 12 Pcs": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Tikki With Chole": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                },
                "Samosa With Chole": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Samosa With Chatni": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Papdi": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Raj Kachori": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Rahbhog": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Dry Fruit Bhalla": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Dahi Bhalla": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Patties": {
                "Aloo Patties": {
                    "price": "20",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/yummy-hub-central-abohar-abohar-158193"
    },
    {
        "name": "wah ji waah veg and non veg corner",
        "rating": "--",
        "rating_count": "Too Few Ratings",
        "cost": "₹ 200",
        "address": "wah ji waah veg and non veg corner, Hanuman garh road, Down the flyover. Near Dr.Navin Sheety Abohar",
        "cuisine": "North Indian,Chinese",
        "lic_no": "22119652000157",
        "menu": {
            "All Day Breakfast": {
                "Omelette (2 Eggs Butter)": {
                    "price": "60",
                    "veg_or_non_veg": "Non-veg"
                },
                "Half Fry Egg (2 Eggs Butter)": {
                    "price": "60",
                    "veg_or_non_veg": "Non-veg"
                },
                "Egg Bhurji (3 Eggs Butter)": {
                    "price": "80",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Mutton & Biryani": {
                "Chicken Biryani": {
                    "price": "239",
                    "veg_or_non_veg": "Non-veg"
                },
                "Veg Cheese Biryani": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Jeera Rice": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Salad & Chaat": {
                "Dry Papad (1 Pc)": {
                    "price": "12",
                    "veg_or_non_veg": "Veg"
                },
                "Fried Papad": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Kheera Salad": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Green Salad": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Masala Papad": {
                    "price": "69",
                    "veg_or_non_veg": "Veg"
                },
                "Peanut Masala": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Raita Mixed": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                },
                "Plain Dahi": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Chana Chaat": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Fish": {
                "Fish Curry": {
                    "price": "375",
                    "veg_or_non_veg": "Non-veg"
                },
                "Fish Finger": {
                    "price": "350",
                    "veg_or_non_veg": "Non-veg"
                },
                "Fish Fried": {
                    "price": "350",
                    "veg_or_non_veg": "Non-veg"
                },
                "Fish Kfc Style": {
                    "price": "350",
                    "veg_or_non_veg": "Non-veg"
                },
                "Lemon Fish Butter Sauce": {
                    "price": "370",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Chinese Starters": {
                "Chicken Pakora": {
                    "price": "280",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chilli Chicken": {
                    "price": "290",
                    "veg_or_non_veg": "Non-veg"
                },
                "Jeera Chicken": {
                    "price": "325",
                    "veg_or_non_veg": "Non-veg"
                },
                "Lemon Chicken": {
                    "price": "325",
                    "veg_or_non_veg": "Non-veg"
                },
                "Kfc Chicken": {
                    "price": "299",
                    "veg_or_non_veg": "Non-veg"
                },
                "Cream Chicken": {
                    "price": "339",
                    "veg_or_non_veg": "Non-veg"
                },
                "Methi Malai Chicken": {
                    "price": "339",
                    "veg_or_non_veg": "Non-veg"
                },
                "Boiled chicken": {
                    "price": "220",
                    "veg_or_non_veg": "Non-veg"
                },
                "Soya Chaap Chilli": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tikka": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Malai Tikka": {
                    "price": "239",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "239",
                    "veg_or_non_veg": "Veg"
                },
                "Soya Chaap Tandoori Masala": {
                    "price": "159",
                    "veg_or_non_veg": "Veg"
                },
                "Soya Chaap Malai": {
                    "price": "169",
                    "veg_or_non_veg": "Veg"
                },
                "Soya Chaap Kfc Style": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Jeera Paneer": {
                    "price": "249",
                    "veg_or_non_veg": "Veg"
                },
                "Patato Finger": {
                    "price": "110",
                    "veg_or_non_veg": "Veg"
                },
                "paneer pakoda (plate)": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "soya chaap pakoda": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese finger": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "French fries": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Tandoori": {
                "Chicken Tandoori": {
                    "price": "259",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Tikka": {
                    "price": "295",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Malai Tikka": {
                    "price": "300",
                    "veg_or_non_veg": "Non-veg"
                },
                "Afghani Chicken Tandoori": {
                    "price": "309",
                    "veg_or_non_veg": "Non-veg"
                },
                "Malai Tandoori Chicken": {
                    "price": "309",
                    "veg_or_non_veg": "Non-veg"
                },
                "Special Tandoori Chicken": {
                    "price": "309",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Indian Main Course": {
                "Egg Curry": {
                    "price": "180",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Kali Mirch": {
                    "price": "309",
                    "veg_or_non_veg": "Non-veg"
                },
                "Masala Chicken": {
                    "price": "299",
                    "veg_or_non_veg": "Non-veg"
                },
                "Butter Chicken": {
                    "price": "289",
                    "veg_or_non_veg": "Non-veg"
                },
                "Kadai Chicken": {
                    "price": "299",
                    "veg_or_non_veg": "Non-veg"
                },
                "Patiala Chicken": {
                    "price": "299",
                    "veg_or_non_veg": "Non-veg"
                },
                "Curry Chicken": {
                    "price": "160",
                    "veg_or_non_veg": "Non-veg"
                },
                "Keema Chicken": {
                    "price": "319",
                    "veg_or_non_veg": "Non-veg"
                },
                "Rara Chicken": {
                    "price": "319",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Do Pyaza": {
                    "price": "309",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Gravy": {
                    "price": "159",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Butter Gravy": {}
            }
        }
    },
    {
        "name": "theka coffee desi",
        "rating": "3.8",
        "rating_count": "100+ ratings",
        "cost": "₹ 100",
        "address": "theka coffee desi, sahtiya sadan road city",
        "cuisine": "Beverages",
        "lic_no": "22121652000190",
        "menu": {
            "Recommended": {
                "Cafe Latte Coffee": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Cafe Mocha Coffee": {
                    "price": "132",
                    "veg_or_non_veg": "Veg"
                },
                "Chocolate Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Mango Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Walnut Brownie": {
                    "price": "65",
                    "veg_or_non_veg": "Veg"
                },
                "Chocolaty Frappe": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "French Fries": {
                    "price": "82",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Garlic Bread": {
                    "price": "124",
                    "veg_or_non_veg": "Veg"
                },
                "Exotic Garlic Bread": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Wrap": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Veg Wrap": {
                    "price": "92",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Tikka Sub": {
                    "price": "166",
                    "veg_or_non_veg": "Veg"
                },
                "8 \" Regular Farm House Pizza": {
                    "price": "217",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Farm House Pizza": {
                    "price": "375",
                    "veg_or_non_veg": "Veg"
                },
                "13 \"Large Farm House Pizza": {
                    "price": "475",
                    "veg_or_non_veg": "Veg"
                },
                "American Cheese Burger": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Tikki Burger": {
                    "price": "65",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Burger": {
                    "price": "79",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Burger": {
                    "price": "92",
                    "veg_or_non_veg": "Non-veg"
                },
                "8 \" Regular Spicy Paneer Pizza": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Spicy Paneer Pizza": {
                    "price": "480",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Tikka Sandwich": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "8 \" Regular Paneer Makhani Pizza": {
                    "price": "197",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Paneer Makhani Pizza": {
                    "price": "499",
                    "veg_or_non_veg": "Veg"
                },
                "Red Penne Alfredo Pasta": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "White Penne Alfredo Pasta": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Sauce Penne Alfredo Pasta": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Loaded Chicken Pizza": {
                    "price": "432",
                    "veg_or_non_veg": "Non-veg"
                },
                "Paneer Tikka Salad": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Delight Salad": {
                    "price": "189",
                    "veg_or_non_veg": "Non-veg"
                },
                "8 \" Regular Chicken Tikka Pizza": {
                    "price": "187",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Tandoori Chicken Pizza": {
                    "price": "463",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Family Binge Combos": {
                "2 Strawberry Shake + 2 Punjabi Paneer Cruncher (Without Onion + Garlic) + 1 Mint Mojito Mocktail": {
                    "price": "720",
                    "veg_or_non_veg": "Veg"
                },
                "2 Butterscotch Shake + 2 Red Penne Mushroom Pata (Without Onion + Garlic) + 3 Veg Burger (Without Onion + Garlic)": {
                    "price": "862",
                    "veg_or_non_veg": "Veg"
                },
                "3 Piece 8\" Regular Spicy Corn Tango Pizza (Without Onion + Garlic) + 3 Choclate Shakes": {
                    "price": "932",
                    "veg_or_non_veg": "Veg"
                },
                "3 American Cheese Burger (Without Onion + Garlic) + 3 Tcd Special Shake": {
                    "price": "1365",
                    "veg_or_non_veg": "Veg"
                },
                "3 Oreo Shake + 3 Paneer Wrap (Without Onion + Garlic)": {
                    "price": "888",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Hot Coffee": {
                "Americano Black Coffee": {
                    "price": "65",
                    "veg_or_non_veg": "Veg"
                },
                "Cappuccino Coffee": {
                    "price": "91",
                    "veg_or_non_veg": "Veg"
                },
                "Hot Chocolate Coffee": {
                    "price": "91",
                    "veg_or_non_veg": "Veg"
                },
                "Hazelnut Cappuccino Coffee": {
                    "price": "111",
                    "veg_or_non_veg": "Veg"
                },
                "Cookie Cappuccino Coffee": {
                    "price": "155",
                    "veg_or_non_veg": "Veg"
                },
                "Cafe Latte Coffee": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Irish Cafe Latte Coffee": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Caramel Latte Coffee": {
                    "price": "132",
                    "veg_or_non_veg": "Veg"
                },
                "Cafe Mocha Coffee": {
                    "price": "132",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Tea": {
                "Assam Tea": {
                    "price": "52",
                    "veg_or_non_veg": "Veg"
                },
                "Green Tea": {
                    "price": "52",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Thirst Quenchers": {
                "Lemon Ice Tea": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Peach Ice Tea": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Strawberry Ice Tea": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Classic Lemonade": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Strawberry Lemonade": {
                    "price": "115",
                    "veg_or_non_veg": "Veg"
                },
                "Mint Lemonade": {
                    "price": "115",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Shakes Crunchy": {
                "Oreo Shake": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "TCD Special Shake": {
                    "price": "264",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Classic Shakes": {
                "Strawberry Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Chocolate Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Butterscotch Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Vanilla Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Greenapple Shake": {
                    "price": "125",
                    "veg_or_non_veg": "Veg"
                },
                "Black Current Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Shakes Premium": {
                "Mango Shake": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Paan Shake": {
                    "price": "131",
                    "veg_or_non_veg": "Veg"
                },
                "Orange chocolate shake": {
                    "price": "143",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Sweet Moments": {
                "Walnut Brownie": {
                    "price": "65",
                    "veg_or_non_veg": "Veg"
                },
                "Fruit Sundae": {
                    "price": "113",
                    "veg_or_non_veg": "Veg"
                },
                "Paan Sundae": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Cold Coffee": {
                "Devils Own Desi Style Coffee": {
                    "price": "144",
                    "veg_or_non_veg": "Veg"
                },
                "Classic Cold Coffee": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Iced Cappuccino Coffee": {
                    "price": "133",
                    "veg_or_non_veg": "Veg"
                },
                "Iced Vanilla Cappuccino Coffee": {
                    "price": "154",
                    "veg_or_non_veg": "Veg"
                },
                "Cafe Frappe": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Chocolaty Frappe": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "Caramel Frappe": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Quick Bites": {
                "Masala Fries with Dip": {
                    "price": "115",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Tokari": {
                    "price": "113",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Shots": {
                    "price": "113",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Fingers": {
                    "price": "86",
                    "veg_or_non_veg": "Veg"
                },
                "Triple S": {
                    "price": "130",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Finger(peri peri)": {
                    "price": "176",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Finger 5pc(Barbeque)": {
                    "price": "177",
                    "veg_or_non_veg": "Non-veg"
                },
                "French Fries": {
                    "price": "82",
                    "veg_or_non_veg": "Veg"
                },
                "Seekh Kabab with Dip": {
                    "price": "91",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Nuggets": {
                    "price": "139",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Popcorn": {
                    "price": "144",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Finger (5 Pcs)": {
                    "price": "150",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Garlic Breads": {
                "Plain Garlic Bread": {
                    "price": "88",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Garlic Bread": {
                    "price": "124",
                    "veg_or_non_veg": "Veg"
                },
                "Chilly Corn Garlic Bread": {
                    "price": "142",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Cavity": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Exotic Garlic Bread": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                },
                "Roasted Chicken Garlic Bread": {
                    "price": "166",
                    "veg_or_non_veg": "Non-veg"
                },
                "Seekh Kabab Garlic Bread": {
                    "price": "172",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Mocktails": {
                "Mint Mojito Mocktail": {
                    "price": "155",
                    "veg_or_non_veg": "Veg"
                },
                "Cucumber Lemon Mojito Mocktail": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "Meloneez Mocktail": {
                    "price": "139",
                    "veg_or_non_veg": "Veg"
                },
                "Candid Apple Mocktail": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "TCD Float (Coke with Ice Cream Float) Mocktail": {
                    "price": "73",
                    "veg_or_non_veg": "Veg"
                },
                "Lemon Coke Mocktail": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Malt (Taste of Beer) Mocktail": {
                    "price": "131",
                    "veg_or_non_veg": "Veg"
                },
                "Blue Curacao": {
                    "price": "148",
                    "veg_or_non_veg": "Veg"
                },
                "Spicy Mango": {
                    "price": "131",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Wraps": {
                "Paneer Wrap": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Seekh Kabab Wrap": {
                    "price": "121",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Tikka Wrap": {
                    "price": "139",
                    "veg_or_non_veg": "Non-veg"
                },
                "Tandoori Chicken Wrap": {
                    "price": "144",
                    "veg_or_non_veg": "Non-veg"
                },
                "Single egg single chicken wrap": {
                    "price": "155",
                    "veg_or_non_veg": "Non-veg"
                },
                "Aloo Wrap": {
                    "price": "78",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Veg Wrap": {
                    "price": "92",
                    "veg_or_non_veg": "Veg"
                },
                "Egg Wrap": {
                    "price": "92",
                    "veg_or_non_veg": "Non-veg"
                },
                "Pasta Wrap": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Sub": {
                "Paneer Tikka Sub": {
                    "price": "166",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Tikki Sub": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Delight Sub": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Tikka Sub": {
                    "price": "179",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Delight Sub": {
                    "price": "192",
                    "veg_or_non_veg": "Non-veg"
                },
                "Saute Chicken Sub": {
                    "price": "166",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Combos": {
                "2 Pieces Chicken Tikka Sandwich  +  Classic Lemonade": {
                    "price": "145",
                    "veg_or_non_veg": "Non-veg"
                },
                "2 Pieces Paneer Tikka Sandwich + Cappuccino": {
                    "price": "132",
                    "veg_or_non_veg": "Veg"
                },
                "1 Veg Burger with Cheese + Classic Cold Coffee": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "1 Chicken Burger with Cheese + Classic Cold Coffee": {
                    "price": "198",
                    "veg_or_non_veg": "Non-veg"
                },
                "Mexican Veg Wrap + Lemon Coke": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Wrap + Meloneez": {
                    "price": "211",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Veg Supreme Pizza": {
                "8 \" Regular Farm House Pizza": {
                    "price": "217",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Farm House Pizza": {
                    "price": "375",
                    "veg_or_non_veg": "Veg"
                },
                "13 \"Large Farm House Pizza": {
                    "price": "475",
                    "veg_or_non_veg": "Veg"
                },
                "8 \" Regular Special Wonder Pizza": {
                    "price": "184",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Special Wonder Pizza": {
                    "price": "375",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Special Wonder Pizza": {
                    "price": "475",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Burgers": {
                "Punjabi Paneer Cruncher": {
                    "price": "116",
                    "veg_or_non_veg": "Veg"
                },
                "Double Decker Veg Burger": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "American Cheese Burger": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "Exotic Egg Burger": {
                    "price": "118",
                    "veg_or_non_veg": "Non-veg"
                },
                "Spicy Chicken Burger": {
                    "price": "119",
                    "veg_or_non_veg": "Non-veg"
                },
                "Double Decker Chicken Burger": {
                    "price": "172",
                    "veg_or_non_veg": "Non-veg"
                },
                "American chicken burger": {
                    "price": "136",
                    "veg_or_non_veg": "Non-veg"
                },
                "Aloo Tikki Burger": {
                    "price": "65",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Burger": {
                    "price": "79",
                    "veg_or_non_veg": "Veg"
                },
                "Spicy Veg Burger": {
                    "price": "91",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Burger": {
                    "price": "92",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Veg Delight Pizza": {
                "8 \" Regular Tandoori Paneer Pizza": {
                    "price": "175",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Tandoori Paneer Pizza": {
                    "price": "325",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Tandoori Paneer Pizza": {
                    "price": "450",
                    "veg_or_non_veg": "Veg"
                },
                "8 \" Regular Hot & Sweet Delight Pizza": {
                    "price": "175",
                    "veg_or_non_veg": "Veg"
                },
                "10 \"Medium Hot & Sweet Delight Pizza": {
                    "price": "325",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Hot & Sweet Delight Pizza": {
                    "price": "450",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Veg Super Pizza": {
                "8 \" Regular Veg Feast Pizza": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Veg Feast Pizza": {
                    "price": "270",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Veg Feast Pizza": {
                    "price": "480",
                    "veg_or_non_veg": "Veg"
                },
                "8 \" Regular Spicy Corn Tango Pizza": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Spicy Corn Tango Pizza": {
                    "price": "480",
                    "veg_or_non_veg": "Veg"
                },
                "8 \" Regular Spicy Paneer Pizza": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "10 \"Medium Spicy Paneer Pizza": {
                    "price": "270",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Spicy Paneer Pizza": {
                    "price": "480",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Sandwiches": {
                "Corn Delight Sandwich": {
                    "price": "102",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Cheese Sandwich": {
                    "price": "118",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Tikka Sandwich": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Makhani Sandwich": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Sandwich": {
                    "price": "142",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Delight Sandwich": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Tikka Sandwich": {
                    "price": "152",
                    "veg_or_non_veg": "Non-veg"
                },
                "Egg Delight Sandwich": {
                    "price": "131",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Delight Sandwich": {
                    "price": "168",
                    "veg_or_non_veg": "Non-veg"
                },
                "Double Decker Ontario Sandwich": {
                    "price": "209",
                    "veg_or_non_veg": "Non-veg"
                },
                "Schezwan Veg sandwich": {
                    "price": "162",
                    "veg_or_non_veg": "Veg"
                },
                "Schezwan chicken sandwich": {
                    "price": "175",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Single Topping Pizza": {
                "Cheesy Marghrita (Medium)": {
                    "price": "228",
                    "veg_or_non_veg": "Veg"
                },
                "Cheesy Margheritta Pizza (Large)": {
                    "price": "364",
                    "veg_or_non_veg": "Veg"
                },
                "Cheesy  Margherita (Regular)": {
                    "price": "127",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Wonder Pizza": {
                "8 \" Regular Paneer Makhani Pizza": {
                    "price": "197",
                    "veg_or_non_veg": "Veg"
                },
                "10 \" Medium Paneer Makhani Pizza": {
                    "price": "355",
                    "veg_or_non_veg": "Veg"
                },
                "13 \" Large Paneer Makhani Pizza": {
                    "price": "499",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Pastas": {
                "Red Penne Alfredo Pasta": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "Red Penne Mushroom Pasta": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Red Exotic Veggie Pasta": {
                    "price": "179",
                    "veg_or_non_veg": "Veg"
                },
                "Red Penne Chicken Pasta": {
                    "price": "205",
                    "veg_or_non_veg": "Non-veg"
                },
                "White Penne Alfredo Pasta": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "White Penne Mushroom Pasta": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "White Exotic Veggie Pasta": {
                    "price": "179",
                    "veg_or_non_veg": "Veg"
                },
                "White Penne Chicken Pasta": {
                    "price": "205",
                    "veg_or_non_veg": "Non-veg"
                },
                "Mix Sauce Penne Alfredo Pasta": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Sauce Penne Mushroom Pasta": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Sauce Exotic Veggie Pasta": {
                    "price": "179",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Sauce Penne Chicken Pasta": {
                    "price": "205",
                    "veg_or_non_veg": "Non-veg"
                },
                "American crunchy veg pasta": {
                    "price": "196",
                    "veg_or_non_veg": "Veg"
                },
                "American Crunchy chicken pasta": {
                    "price": "215",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Non Veg Supreme Pizza": {
                "8 \" Regular Spicy Chicken Pizza": {
                    "price": "312",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Spicy Chicken Pizza": {
                    "price": "432",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Spicy Chicken Pizza": {
                    "price": "594",
                    "veg_or_non_veg": "Non-veg"
                },
                "8 \" Regular Chicken Love Pizza": {
                    "price": "312",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Chicken Love Pizza": {
                    "price": "432",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Chicken Love Pizza": {
                    "price": "594",
                    "veg_or_non_veg": "Non-veg"
                },
                "8 \" Regular Loaded Chicken Pizza": {
                    "price": "312",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Loaded Chicken Pizza": {
                    "price": "432",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Loaded Chicken Pizza": {
                    "price": "594",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Non Veg Delight Pizza": {
                "8 \" Regular Hawaiian Delight Pizza": {
                    "price": "228",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Hawaiian Delight Pizza": {
                    "price": "378",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Hawaiian Delight Pizza": {
                    "price": "495",
                    "veg_or_non_veg": "Non-veg"
                },
                "8 \" Regular Golden Delight Pizza": {
                    "price": "228",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Golden Delight Pizza": {
                    "price": "378",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Golden Delight Pizza": {
                    "price": "495",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Salad": {
                "Paneer Tikka Salad": {
                    "price": "158",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Tikki Salad": {
                    "price": "152",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Delight Salad": {
                    "price": "145",
                    "veg_or_non_veg": "Veg"
                },
                "Chicken Tikka Salad": {
                    "price": "172",
                    "veg_or_non_veg": "Non-veg"
                },
                "Chicken Delight Salad": {
                    "price": "189",
                    "veg_or_non_veg": "Non-veg"
                },
                "Saute Chicken Salad": {
                    "price": "166",
                    "veg_or_non_veg": "Non-veg"
                },
                "Egg Salad": {
                    "price": "166",
                    "veg_or_non_veg": "Non-veg"
                },
                "Nacho Salad": {
                    "price": "188",
                    "veg_or_non_veg": "Veg"
                },
                "Crispy veg saled": {
                    "price": "188",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Non Veg Super Pizza": {
                "8 \" Regular Chicken Tikka Pizza": {
                    "price": "187",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Chicken Tikka Pizza": {
                    "price": "330",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Chicken Tikka Pizza": {
                    "price": "463",
                    "veg_or_non_veg": "Non-veg"
                },
                "8 \" Regular Tandoori Chicken Pizza": {
                    "price": "187",
                    "veg_or_non_veg": "Non-veg"
                },
                "10 \" Medium Tandoori Chicken Pizza": {
                    "price": "330",
                    "veg_or_non_veg": "Non-veg"
                },
                "13 \" Large Tandoori Chicken Pizza": {
                    "price": "463",
                    "veg_or_non_veg": "Non-veg"
                }
            },
            "Swiggy Special Combos": {
                "1 Aloo Tikki Burger + 1 Single Topping Onion Pizza": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "1 Aloo Tikki Burger + 1 Single Topping Corn Pizza": {
                    "price": "150",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/theka-coffee-desi-central-raipura-abohar-158203"
    },
    {
        "name": "Sam Uncle",
        "rating": "3.6",
        "rating_count": "20+ ratings",
        "cost": "₹ 200",
        "address": "Sam Uncle, hanumangarh road near raja bajaj showroom abohar",
        "cuisine": "Continental",
        "lic_no": "22119652000052",
        "menu": {
            "Recommended": {
                "Burger with Pizza Dip": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Cheese Burger": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Burger": {
                    "price": "85",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Tikki Burger": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Mixed Veg Sandwich": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Jumbo Sandwich": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Sandwich": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Corn Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Tomato Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Onion Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Capsicum Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Mix Veg Cheese Pizza": {
                    "price": "287",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Yummy Paneer Treat Pizza": {
                    "price": "315",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Veggie Loaded Pizza": {
                    "price": "349",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Sweet Corn Cheese Pizza": {
                    "price": "297",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Spicy Veggie Delight Pizza": {
                    "price": "298",
                    "veg_or_non_veg": "Veg"
                },
                "Mixed Veg Sandwizza": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Garlic Bread": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Sweet Corn Sandwizza": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Cold Coffee": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Chocolate Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Black Currant Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Strawberry Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Burgers": {
                "Burger with Pizza Dip": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Cheese Burger": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Burger": {
                    "price": "85",
                    "veg_or_non_veg": "Veg"
                },
                "Chilli Shot Burger": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Mayo Burger": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Green Valley Burger": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Tikki Burger": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Sandwiches": {
                "Mixed Veg Sandwich": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Jumbo Sandwich": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Sandwich": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Sweet Corn Sandwich": {
                    "price": "79",
                    "veg_or_non_veg": "Veg"
                },
                "Mexican Cheese Sandwich": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Herb Sandwich": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Pasta Sandwich": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Pizza's": {
                "8'' Corn Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Tomato Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Onion Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Plain Cheese Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Capsicum Pizza": {
                    "price": "259",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Mix Veg Cheese Pizza": {
                    "price": "287",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Yummy Paneer Treat Pizza": {
                    "price": "315",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Veggie Loaded Pizza": {
                    "price": "349",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Sweet Corn Cheese Pizza": {
                    "price": "297",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Spicy Veggie Delight Pizza": {
                    "price": "298",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Exotic Mushroom Pizza": {
                    "price": "298",
                    "veg_or_non_veg": "Veg"
                },
                "8'' Potato Stick Pizza": {
                    "price": "349",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Sweet Corns": {
                "Butter Lemon Sweet Corn": {
                    "price": "67",
                    "veg_or_non_veg": "Veg"
                },
                "Pudina Sweet Corn": {
                    "price": "67",
                    "veg_or_non_veg": "Veg"
                },
                "Black Pepper Sweet Corn": {
                    "price": "67",
                    "veg_or_non_veg": "Veg"
                },
                "Spice Magic Sweet Corn": {
                    "price": "67",
                    "veg_or_non_veg": "Veg"
                },
                "Red Chilli Sweet Corn": {
                    "price": "67",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Quick Bites": {
                "Mixed Veg Sandwizza": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Garlic Bread": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Garlic Bread": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Sweet Corn Sandwizza": {
                    "price": "89",
                    "veg_or_non_veg": "Veg"
                },
                "Sweet Corn Garlic Bread": {
                    "price": "124",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Garlic Bread": {
                    "price": "124",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Shakes and Beverages": {
                "Cold Coffee": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Chocolate Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Black Currant Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Strawberry Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                },
                "Butterscotch Shake": {
                    "price": "84",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Pasta's": {
                "Masala Spiral Pasta In Bowl": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Masala Spiral Pasta In Cup": {
                    "price": "80",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/sam-uncle-central-main-bazar-abohar-158204"
    },
    {
        "name": "Singh Hut",
        "rating": "3.7",
        "rating_count": "20+ ratings",
        "cost": "₹ 250",
        "address": "Singh Hut, CIRCULAR ROAD NEAR NEHRU PARK ABOHAR",
        "cuisine": "Fast Food,Indian",
        "lic_no": "22119652000167",
        "menu": {
            "Recommended": {
                "Malai Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Afghani Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Pudina Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Chaap Tikka Gravy": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                },
                "Keema Chaap Gravy": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Tikka Butter Masala": {
                    "price": "300",
                    "veg_or_non_veg": "Veg"
                },
                "Rumali Roti": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                },
                "Chilli Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Chilli Mushroom": {
                    "price": "280",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "280",
                    "veg_or_non_veg": "Veg"
                },
                "Manchurian Gravy": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Chilli Potato": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Honey Chilli Potato": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "French Fry": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Spring Roll": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Momos (10 Pcs)": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Fried Momos (10 Pcs)": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Momos (8 Pcs)": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Malai Paneer": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Chow mien": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chow mien": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Singapore Chow mien": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Chaap Roll": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Combos": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Soya Chaap": {
                "Malai Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Afghani Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Pudina Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Irani Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Fried Chaap": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Gravy Item": {
                "Chaap Tikka Gravy": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                },
                "Keema Chaap Gravy": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Tikka Butter Masala": {
                    "price": "300",
                    "veg_or_non_veg": "Veg"
                },
                "Kadai Paneer": {
                    "price": "300",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Tikka Masala": {
                    "price": "300",
                    "veg_or_non_veg": "Veg"
                },
                "Rumali Roti": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Chinese Hot": {
                "Chilli Chaap": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Chilli Mushroom": {
                    "price": "280",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "280",
                    "veg_or_non_veg": "Veg"
                },
                "Manchurian Gravy": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Chilli Potato": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Honey Chilli Potato": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "French Fry": {
                    "price": "100",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Spring Roll": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Momos": {
                "Momos (10 Pcs)": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Fried Momos (10 Pcs)": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Momos (8 Pcs)": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Masala Fried Momos (8 Pcs)": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Soup": {
                "Veg Manchow Soup": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Paneer": {
                "Malai Paneer": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                },
                "Afghani Paneer": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                },
                "Irani Paneer": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Paneer": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Pudina Paneer": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Paneer": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Golden Fried Paneer": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Mushroom": {
                "Malai Mushroom": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Afghani Mushroom": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Irani Mushroom": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Tandoori Mushroom": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Pudina Mushroom": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Mushroom": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Golden Fried Mushroom": {
                    "price": "240",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Chow mien": {
                "Veg Chow mien": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Hakka Chow mien": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chow mien": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Singapore Chow mien": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                },
                "Mixed Veg Chow mien": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Chaap Chow mien": {
                    "price": "140",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Rumali Roll": {
                "Paneer Roll": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                },
                "Chaap Roll": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Roll": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Mixed Roll": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Rumali Package": {
                "Combos": {
                    "price": "200",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/singh-hut-nehru-park-main-bazar-abohar-187912"
    },
    {
        "name": "Shri Balaji Vaishno Dhaba",
        "rating": "--",
        "rating_count": "Too Few Ratings",
        "cost": "₹ 100",
        "address": "Shri Balaji Vaishno Dhaba, St no 13,6th chowk,main Bazar,near jain bhawan, abohar",
        "cuisine": "North Indian",
        "lic_no": "22119652000389",
        "menu": {
            "Main Course": {
                "Dal": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Kadhi": {
                    "price": "90",
                    "veg_or_non_veg": "Veg"
                },
                "Mixed Veg": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Lehsun Chutney": {
                    "price": "35",
                    "veg_or_non_veg": "Veg"
                },
                "Dahi Fry": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                },
                "Salad": {
                    "price": "40",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Raita": {
                "Simple Raita": {
                    "price": "110",
                    "veg_or_non_veg": "Veg"
                },
                "Mixed Raita": {
                    "price": "120",
                    "veg_or_non_veg": "Veg"
                },
                "Masala Raita": {
                    "price": "110",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Indian Breads": {
                "Simple Roti": {
                    "price": "10",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Roti": {
                    "price": "12",
                    "veg_or_non_veg": "Veg"
                },
                "Laccha Prantha": {
                    "price": "35",
                    "veg_or_non_veg": "Veg"
                },
                "Pyaz Prantha": {
                    "price": "35",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Prantha": {
                    "price": "55",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/shri-balaji-vaishno-dhaba-central-main-bazar-abohar-244866"
    },
    {
        "name": "Swastik Dhaba",
        "rating": "--",
        "rating_count": "Too Few Ratings",
        "cost": "₹ 200",
        "address": "Swastik Dhaba, Gaushala road street no 22 near shiv mandir abohar",
        "cuisine": "North Indian",
        "lic_no": "license",
        "menu": {
            "Vegetable": {
                "Cream Malai Mater": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Do Piaza": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Gravy": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Kaju Butter Masala": {
                    "price": "169",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Shahi Paneer": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Malai Kofta": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Punjabi Paneer": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Paneer Do Piaza": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Badami Paneer": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Kaju Paneer": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Korma": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Plinda": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Kadai Paneer": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Mashroom Paneer Masala": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Punjabi Paneer": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tikka Butter Masala": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Masala": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Tomato": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Malai Kofta": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Paneer": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Shahi Paneer": {
                    "price": "219",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Bhurji": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Mater Do Piaza": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Stuff Tomato": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Malai Kofta": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Mater": {
                    "price": "210",
                    "veg_or_non_veg": "Veg"
                },
                "Saag Paneer": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Palak Paneer": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Sarso Ka Saag Makhani": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Dum Aloo": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Mater Paneer": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Butter Nandi": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Sev Bhaji": {
                    "price": "190",
                    "veg_or_non_veg": "Veg"
                },
                "Chana Masala": {
                    "price": "210",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Vegetable": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Palak Mater": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Palak Kaju": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Jeera Aloo": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Palak": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Maharani": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Makhani (Maah Chana)": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Aloo Gobhi": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Dal Fry": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Yellow Dal Tadka": {
                    "price": "99",
                    "veg_or_non_veg": "Veg"
                },
                "Karhi Pakora": {
                    "price": "109",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Paneer": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Achari Jeera Aloo": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Gobhi Masala": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Bengan Bhartha Makhani": {
                    "price": "119",
                    "veg_or_non_veg": "Veg"
                },
                "Soya Butter Chaap Gravy (Special)": {
                    "price": "229",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Parantha": {
                "Potato Onion Paratha": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Mix Paratha": {
                    "price": "50",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese  Paratha": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Garlic Paratha": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Raita": {
                "Vegetabel Cream Raita": {
                    "price": "130",
                    "veg_or_non_veg": "Veg"
                },
                "Russian Fruit Raita": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Pineapple Raita": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Boondi Raita": {
                    "price": "130",
                    "veg_or_non_veg": "Veg"
                },
                "Curd": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Chappati and Naan": {
                "Butter Chappati": {
                    "price": "7",
                    "veg_or_non_veg": "Veg"
                },
                "Missi Chappati": {
                    "price": "19",
                    "veg_or_non_veg": "Veg"
                },
                "Plain Chappati": {
                    "price": "6",
                    "veg_or_non_veg": "Veg"
                },
                "Churidaar Paratha": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Pin Mini Paratha": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Cream Paratha": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Naan": {
                    "price": "75",
                    "veg_or_non_veg": "Veg"
                },
                "Buttter Naan": {
                    "price": "45",
                    "veg_or_non_veg": "Veg"
                },
                "Garlic Butter Naan": {
                    "price": "55",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Mini Paratha": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Rice": {
                "Veg Biryani": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Kesar Jeera Rice": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Paneer Jeera Rice": {
                    "price": "180",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Pulav": {
                    "price": "220",
                    "veg_or_non_veg": "Veg"
                },
                "Butter Jeera Rice": {
                    "price": "110",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Snacks": {
                "Potato Chilli": {
                    "price": "160",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli Gravy": {
                    "price": "320",
                    "veg_or_non_veg": "Veg"
                },
                "Cheese Chilli": {
                    "price": "320",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Manchurian": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Veg Manchurian Gravy": {
                    "price": "209",
                    "veg_or_non_veg": "Veg"
                },
                "Mushroom Chilli": {
                    "price": "210",
                    "veg_or_non_veg": "Veg"
                },
                "Chana Fry": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Potato Chips": {
                    "price": "110",
                    "veg_or_non_veg": "Veg"
                },
                "Papad Dry": {
                    "price": "25",
                    "veg_or_non_veg": "Veg"
                }
            },
            "Salad": {
                "Cream Salad": {
                    "price": "199",
                    "veg_or_non_veg": "Veg"
                },
                "Green Salad": {
                    "price": "60",
                    "veg_or_non_veg": "Veg"
                }
            }
        },
        "link": "https://www.swiggy.com/restaurants/swastik-dhaba-central-krishna-nagri-abohar-338749"
    }
];

const RestrauntCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-img"
                src="https://b.zmtcdn.com/data/pictures/8/18739658/f677028a497000dbf0f3b750d938ec24_o2_featured_v2.jpg?output-format=webp" alt="res-logo"></img>
            <h3>{props.resData.name}</h3>
            <h4>{props.resData.cuisine}</h4>
            <h4>{props.resData.rating}</h4>
            <h4>34 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restraunt-container">
                {resList.map((restraunt, index) => <RestrauntCard resData={restraunt} key={index}/>)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header></Header>
            <Body></Body>
            {/* Footer */}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);