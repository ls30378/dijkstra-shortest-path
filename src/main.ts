class NeighbourCity {
  name: string;
  weight: number;
}

class City {
  name: string;
  neighbours: NeighbourCity[];
  weight: number;

  constructor(theName: string, theNodes: NeighbourCity[], theWeight: number) {
    this.name = theName;
    this.neighbours = theNodes;
    this.weight = theWeight;
  }
}

class Dijkstra {
  cities?: City | {};
  constructor() {
    this.cities = {};
  }

  addCity(city: City): void {
    this.cities[city.name] = city;
  }

  findPointsOfShortestWay(start: string, finish: string): string[] {
    let nextVertex: string = finish;
    let arrayWithVertex: string[] = [];
    while (nextVertex !== start) {
      let minWeigth: number = Number.MAX_VALUE;
      let minVertex: string = "";
      for (let i of this.cities[nextVertex].neighbours) {
        if (i.weight + this.cities[i.name].weight < minWeigth) {
          minWeigth = this.cities[i.name].weight;
          minVertex = i.name;
        }
      }
      arrayWithVertex.push(minVertex);
      nextVertex = minVertex;
    }
    return arrayWithVertex;
  }

  findShortestWay(start: string, finish: string): string[] {
    let nodes: any = {};

    for (let i in this.cities) {
      if (this.cities[i].name === start) {
        this.cities[i].weight = 0;
      } else {
        this.cities[i].weight = Number.MAX_VALUE;
      }
      nodes[this.cities[i].name] = this.cities[i].weight;
    }

    while (Object.keys(nodes).length !== 0) {
      let sortedVisitedByWeight: string[] = Object.keys(nodes).sort(
        (a, b) => this.cities[a].weight - this.cities[b].weight
      );
      let currentVertex: City = this.cities[sortedVisitedByWeight[0]];
      for (let j of currentVertex.neighbours) {
        const calculateWeight: number = currentVertex.weight + j.weight;
        if (calculateWeight < this.cities[j.name].weight) {
          this.cities[j.name].weight = calculateWeight;
        }
      }
      delete nodes[sortedVisitedByWeight[0]];
    }
    const finishWeight: number = this.cities[finish].weight;
    let arrayWithVertex: string[] = this.findPointsOfShortestWay(
      start,
      finish
    ).reverse();
    arrayWithVertex.push(finish, finishWeight.toString());
    return arrayWithVertex;
  }
}

let dijkstra = new Dijkstra();
dijkstra.addCity(
  new City(
    "Prishtina",
    [
      { name: "Suhareka", weight: 68 },
      { name: "Gjakova", weight: 109 },
      { name: "Malisheva", weight: 42 },
      { name: "Prizren", weight: 85 },
    ],
    0
  )
);
dijkstra.addCity(
  new City(
    "Suhareka",
    [
      { name: "Prishtina", weight: 68 },
      { name: "Rahovec", weight: 17 },
      { name: "Prizren", weight: 18 },
      { name: "Gjakova", weight: 80 },
    ],
    0
  )
);
dijkstra.addCity(
  new City(
    "Rahovec",
    [
      { name: "Suhareka", weight: 17 },
      { name: "Gjakova", weight: 28 },
      { name: "Malisheva", weight: 16 },
      { name: "Prizren", weight: 25 },
    ],
    0
  )
);
dijkstra.addCity(
  new City(
    "Prizren",
    [
      { name: "Prishtina", weight: 85 },
      { name: "Rahovec", weight: 25 },
      { name: "Suhareka", weight: 18 },
    ],
    0
  )
);
dijkstra.addCity(
  new City(
    "Malisheva",
    [
      { name: "Prishtina", weight: 42 },
      { name: "Rahovec", weight: 16 },
      { name: "Prizren", weight: 21 },
    ],
    0
  )
);
dijkstra.addCity(
  new City(
    "Gjakova",
    [
      { name: "Rahovec", weight: 28 },
      { name: "Prishtina", weight: 109 },
    ],
    0
  )
);
console.log(dijkstra.findShortestWay("Prishtina", "Rahovec"));
