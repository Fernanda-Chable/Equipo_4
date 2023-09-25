export interface IModel{
    id: string;
    create_on: string|Date;
    update_on: string|Date;
}

export interface ICliente{
    nombre: string;
    
}

export interface IReservas {
  id?: string; // Propiedad opcional
  description: string;
  date: string;
  status: string;
  create_on?: Date; // Propiedad opcional
  update_on?: Date; // Propiedad opcional
}
export interface Response {
  Items: IReservas[]; // IReservas debe coincidir con la estructura de tus elementos
}


