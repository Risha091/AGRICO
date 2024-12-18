
export const registerFormControls = [
  {
      name : 'userName',
      label: 'User Name',
      placeholder : 'Enter your user name',
      componentType : 'input',
      type: 'text',
  },

   { 
      name : 'email',
      label: 'Email',
      placeholder : 'Enter your email name',
      componentType : 'input',
      type: 'email',
  },

   {
      name : 'password',
      label: 'Password',
      placeholder : 'Enter password',
      componentType : 'input',
      type: 'password',
  }
];

export const loginFormControls = [
 
   {
      name : 'email',
      label: 'Email',
      placeholder : 'Enter your email name',
      componentType : 'input',
      type: 'email',
  },

   {
      name : 'password',
      label: 'Password',
      placeholder : 'Enter password',
      componentType : 'input',
      type: 'password',
  },
];

export const addProductFormElements = [
{
  label: "Title",
  name: "title",
  componentType: "input",
  type: "text",
  placeholder: "Enter product title",
},
{
  label: "Description",
  name: "description",
  componentType: "textarea",
  placeholder: "Enter product description",
},
{
  label: "Category",
  name: "category",
  componentType: "select",
  options: [
    { id: "fruit", label: "Fruit" },
    { id: "flower", label: "Flower" },
    { id: "vegetables", label: "Vegetables" },
    { id: "seeds", label: "Seeds" },
    { id: "PlantProtectors", label: "PlantProtectors" },
    { id: "GrowthPromoters", label: "GrowthPromoters" },
  ],
},
{
  label: "Price",
  name: "price",
  componentType: "input",
  type: "number",
  placeholder: "Enter product price",
},
{
  label: "Sale Price",
  name: "salePrice",
  componentType: "input",
  type: "number",
  placeholder: "Enter sale price (optional)",
},
{
  label: "Total Stock",
  name: "totalStock",
  componentType: "input",
  type: "number",
  placeholder: "Enter total stock",
},
];

export const shoppingViewHeaderMenuItems = [
{
  id: 'home',
  label: 'Home',
  path: '/shop/home'
},
{
  id: 'fruit',
  label: 'Fruit',
  path: '/shop/listing'
},
{
  id: 'flower',
  label: 'Flower',
  path: '/shop/listing' 
},
{
  id: 'vegetables',
  label: 'Vegetables',
  path: '/shop/listing'
},
{
  id: 'seeds',
  label: 'Seeds',
  path: '/shop/listing'
},
{
  id: 'PlantProtectors',
  label: 'PlantProtectors',
  path: '/shop/listing'
},
{
  id: 'GrowthPromoters',
  label: 'GrowthPromoters',
  path: '/shop/listing'
},
];

export const categoryOptionsMap = {
fruit: "Fruit",
flower: "Flower",
vegetables: "Vegetables",
seeds: "Seeds",
PlantProtectors: "PlantProtectors",
GrowthPromoters: "GrowthPromoters"
};

export const filterOptions = {
category: [
  { id: 'fruit',
  label: 'Fruit'},
  {
    id: 'flower',
  label: 'Flower'
  },
  {
  id: 'vegetables',
  label: 'Vegetables'
  },
  {
    id: 'seeds',
  label: 'Seeds'
  },
  {
    id: 'PlantProtectors',
  label: 'PlantProtectors'
  },
  {
    id: 'GrowthPromoters',
  label: 'GrowthPromoters'
  },
]
};

export const sortOptions = [
{ id: "price-lowtohigh", label: "Price: Low to High" },
{ id: "price-hightolow", label: "Price: High to Low" },
{ id: "title-atoz", label: "Title: A to Z" },
{ id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
{
  label: "Address",
  name: "address",
  componentType: "input",
  type: "text",
  placeholder: "Enter your address",
},
{
  label: "City",
  name: "city",
  componentType: "input",
  type: "text",
  placeholder: "Enter your city",
},
{
  label: "Pincode",
  name: "pincode",
  componentType: "input",
  type: "text",
  placeholder: "Enter your pincode",
},
{
  label: "Phone",
  name: "phone",
  componentType: "input",
  type: "text",
  placeholder: "Enter your phone number",
},
{
  label: "Notes",
  name: "notes",
  componentType: "textarea",
  placeholder: "Enter any additional notes",
},
];