const car = { brand: "", model: "", color: "" };
const updatedProperties = Object.assign(car, {type: ""});
console.log(car);

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


for (const modelName in models) {
  const model = models[modelName];

  let modelInfo = modelName + ":\n";
  Object.entries(model).forEach(([key, value]) => {
    modelInfo += `${key}: "${value}", `;
  });
  console.log(modelInfo.slice(0, -2) + "\n");
}
