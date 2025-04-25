// Define your model here
export class MyModel {
    // Model properties
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// Define your serializers here
import { MySerializer } from 'your-packages/serializers';

export class MyModelSerializer extends MySerializer<MyModel> {}

// Create a model using the serializer
import MyModel from './models/MyModel';
const myModel = new MyModel(1, "John Doe");

// Use the model in your application
console.log(myModel);
