const car = { brand: "", model: "", color: "" };
const updatedProperties = Object.assign(car, {type: ""});

const electro = Object.assign({}, car);
electro.type = "electro";


const common = Object.assign({}, car);
common.type = "common";
common.gas = "";
common.gearBox = "";

const models = {
  tesla: {...electro, brand: "Tesla", model: "S Plaid", maxDistance: 850},
  leaf: {...electro, brand: "Nissan", model: "Leaf", maxDistance: 270},
  x5: {...common, brand: "BMW", model: "X5", gas: "Diesel", gearBox: "auto"},
  kenga: {...common, brand: "Renault", model: "Kangoo", gas: "Petrol", gearBox: "mechanic"}
};

for (let modelName in models) {
  console.log(modelName + ":");
  const model = models[modelName];
  for (let [key, value] of Object.entries(model)) {
    console.log(`${key}: ${value}`);
  }
  console.log();
}
