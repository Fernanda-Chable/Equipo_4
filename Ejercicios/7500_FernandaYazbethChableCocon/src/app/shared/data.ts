export interface IModel{
    id: string;
    create_on: string|Date;
    update_on: string|Date;
}

export interface ICliente{
    nombre: string;
    
}

export interface IReservas extends IModel{
  description: string;
  date: string;
  status: Date|string;

  
}