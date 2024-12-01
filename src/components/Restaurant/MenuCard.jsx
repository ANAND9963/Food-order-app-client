import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";


const allIngredients = [
  {
    category: "Meat",
    ingredients: ["Mutton (bone-in)"],
  },
  {
    category: "Rice",
    ingredients: ["Basmati Rice"],
  },
  {
    category: "Spices",
    ingredients: [
      "Cumin seeds",
      "Coriander powder",
      "Garam masala",
      "Red chili powder",
      "Turmeric",
      "Cloves",
      "Cardamom",
      "Cinnamon",
      "Bay leaves",
      "Star anise",
    ],
  },
  {
    category: "Herbs & Garnish",
    ingredients: [
      "Fresh mint leaves",
      "Fresh coriander leaves",
      "Fried onions",
      "Lemon slices",
    ],
  },
  {
    category: "Dairy",
    ingredients: ["Yogurt", "Ghee"],
  },
  {
    category: "Aromatics",
    ingredients: ["Onions", "Tomatoes", "Ginger-garlic paste"],
  },
  {
    category: "Liquids",
    ingredients: ["Water", "Rose water"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log(value);
    

  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/9609856/pexels-photo-9609856.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">Mutton Biryani</p>
            <p>$ 15.99</p>
            <p className="text-gray-400">
              Mutton biryani is a flavorful, aromatic rice dish made with tender
              marinated mutton, layered with fragrant basmati rice, and cooked
              with a blend of spices. It's often garnished with fried onions,
              boiled eggs, and fresh herbs for a rich, savory taste.
            </p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {allIngredients.map((item,idx) => (
              <div key={idx}>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item ,idx) => 
                    <FormControlLabel key={idx} control={<Checkbox onChange={()=> handleCheckBoxChange(item)} />} label={item} />
                  )}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button type ="submit" variant="contained" disabled={false}>
              {true?"Add to Cart":"Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
