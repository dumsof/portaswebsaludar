import { Idioma } from './idioma';
import { Mensaje } from './mensaje';

export interface ResponseIdioma {
  idiomas: Idioma[];
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
